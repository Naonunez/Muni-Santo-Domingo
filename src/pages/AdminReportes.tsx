import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonBadge, IonButton, IonSelect, IonSelectOption,
  IonToast, IonSpinner, IonText, IonButtons, IonBackButton, IonItem, IonLabel,
} from '@ionic/react';
import api from '../services/api';

interface Reporte {
  id: number;
  tipo_reporte: string;
  descripcion: string;
  estado: 'pendiente' | 'en_revision' | 'resuelto';
  fecha_creacion: string;
  ciudadano_nombre: string;
}

const colorEstado = (estado: string) => {
  if (estado === 'resuelto') return 'success';
  if (estado === 'en_revision') return 'warning';
  return 'danger';
};

const AdminReportes: React.FC = () => {
  const [reportes, setReportes] = useState<Reporte[]>([]);
  const [cargando, setCargando] = useState(true);
  const [toast, setToast] = useState({ abierto: false, mensaje: '', color: 'success' });

  const cargar = async () => {
    setCargando(true);
    try {
      const res = await api.get<Reporte[]>('/reportes');
      setReportes(res.data);
    } catch {
      setToast({ abierto: true, mensaje: 'Error al cargar reportes.', color: 'danger' });
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  const cambiarEstado = async (id: number, estado: string) => {
    try {
      await api.put(`/reportes/${id}/estado`, { estado });
      setToast({ abierto: true, mensaje: 'Estado actualizado.', color: 'success' });
      cargar();
    } catch {
      setToast({ abierto: true, mensaje: 'Error al actualizar el estado.', color: 'danger' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" />
          </IonButtons>
          <IonTitle>Gestión de Reportes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {cargando ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}><IonSpinner /></div>
        ) : reportes.length === 0 ? (
          <IonText><p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>No hay reportes registrados.</p></IonText>
        ) : (
          reportes.map((r) => (
            <IonCard key={r.id}>
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {r.tipo_reporte}
                  <IonBadge color={colorEstado(r.estado)}>{r.estado.replace('_', ' ')}</IonBadge>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>{r.descripcion}</p>
                <p style={{ fontSize: '0.8rem', color: '#888' }}>
                  Ciudadano: <strong>{r.ciudadano_nombre}</strong> —{' '}
                  {new Date(r.fecha_creacion).toLocaleDateString('es-CL')}
                </p>
                <IonItem lines="none" style={{ '--padding-start': '0', marginTop: '8px' }}>
                  <IonLabel>Cambiar estado:</IonLabel>
                  <IonSelect
                    value={r.estado}
                    onIonChange={(e) => cambiarEstado(r.id, e.detail.value)}
                    interface="popover"
                  >
                    <IonSelectOption value="pendiente">Pendiente</IonSelectOption>
                    <IonSelectOption value="en_revision">En revisión</IonSelectOption>
                    <IonSelectOption value="resuelto">Resuelto</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))
        )}

        <IonToast
          isOpen={toast.abierto}
          onDidDismiss={() => setToast({ ...toast, abierto: false })}
          message={toast.mensaje}
          duration={2500}
          color={toast.color}
        />
      </IonContent>
    </IonPage>
  );
};

export default AdminReportes;
