import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonBadge, IonButton, IonSelect, IonSelectOption,
  IonToast, IonSpinner, IonText, IonButtons, IonBackButton,
  IonItem, IonLabel, IonTextarea, IonModal, IonMenuButton,
} from '@ionic/react';
import api from '../services/api';

interface Reporte {
  id: number;
  tipo_reporte: string;
  descripcion: string;
  direccion?: string;
  comentario_admin?: string;
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
  const [reportes, setReportes]   = useState<Reporte[]>([]);
  const [cargando, setCargando]   = useState(true);
  const [toast, setToast]         = useState({ abierto: false, mensaje: '', color: 'success' });
  const [modalAbierto, setModalAbierto]   = useState(false);
  const [reporteSeleccionado, setReporteSeleccionado] = useState<Reporte | null>(null);
  const [nuevoEstado, setNuevoEstado]       = useState('');
  const [comentario, setComentario]         = useState('');

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

  const abrirModal = (r: Reporte) => {
    setReporteSeleccionado(r);
    setNuevoEstado(r.estado);
    setComentario(r.comentario_admin || '');
    setModalAbierto(true);
  };

  const guardarRespuesta = async () => {
    if (!reporteSeleccionado) return;
    try {
      await api.put(`/reportes/${reporteSeleccionado.id}/estado`, {
        estado: nuevoEstado,
        comentario_admin: comentario,
      });
      setToast({ abierto: true, mensaje: 'Reporte actualizado.', color: 'success' });
      setModalAbierto(false);
      cargar();
    } catch {
      setToast({ abierto: true, mensaje: 'Error al actualizar.', color: 'danger' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
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
                <p style={{ color: '#555', fontSize: '0.9rem', margin: '0 0 4px' }}>{r.descripcion}</p>
                {r.direccion && (
                  <p style={{ fontSize: '0.8rem', color: '#555', margin: '0 0 4px' }}>
                    📍 {r.direccion}
                  </p>
                )}
                <p style={{ fontSize: '0.8rem', color: '#888', margin: '0 0 8px' }}>
                  Ciudadano: <strong>{r.ciudadano_nombre}</strong> —{' '}
                  {new Date(r.fecha_creacion).toLocaleDateString('es-CL')}
                </p>
                {r.comentario_admin && (
                  <div style={{
                    background: '#e8f5e9', borderLeft: '3px solid #43a047',
                    borderRadius: '4px', padding: '8px 12px', marginBottom: '8px',
                  }}>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#2e7d32', fontWeight: 600 }}>
                      Respuesta enviada
                    </p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#333' }}>
                      {r.comentario_admin}
                    </p>
                  </div>
                )}
                <IonButton size="small" fill="outline" onClick={() => abrirModal(r)}>
                  Responder / Cambiar estado
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        )}

        {/* Modal respuesta */}
        <IonModal isOpen={modalAbierto} onDidDismiss={() => setModalAbierto(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Responder Reporte</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setModalAbierto(false)}>Cancelar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {reporteSeleccionado && (
              <>
                <p style={{ fontWeight: 600, marginBottom: '4px' }}>{reporteSeleccionado.tipo_reporte}</p>
                <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '16px' }}>
                  {reporteSeleccionado.descripcion}
                </p>
                <IonItem>
                  <IonLabel>Estado</IonLabel>
                  <IonSelect value={nuevoEstado} onIonChange={(e) => setNuevoEstado(e.detail.value)} interface="popover">
                    <IonSelectOption value="pendiente">Pendiente</IonSelectOption>
                    <IonSelectOption value="en_revision">En revisión</IonSelectOption>
                    <IonSelectOption value="resuelto">Resuelto</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Comentario / Respuesta al ciudadano</IonLabel>
                  <IonTextarea
                    value={comentario}
                    onIonChange={(e) => setComentario(e.detail.value!)}
                    rows={4}
                    placeholder="Ej: Se ha programado la reparación para el día..."
                  />
                </IonItem>
                <IonButton expand="block" className="ion-margin-top" onClick={guardarRespuesta}>
                  Guardar
                </IonButton>
              </>
            )}
          </IonContent>
        </IonModal>

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
