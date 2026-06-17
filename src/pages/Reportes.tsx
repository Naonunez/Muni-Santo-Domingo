import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonBadge, IonModal, IonItem, IonLabel, IonInput, IonTextarea,
  IonSelect, IonSelectOption, IonToast, IonSpinner, IonText,
  IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon, IonMenuButton,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface Reporte {
  id: number;
  tipo_reporte: string;
  descripcion: string;
  estado: 'pendiente' | 'en_revision' | 'resuelto';
  fecha_creacion: string;
  ciudadano_nombre?: string;
}

const colorEstado = (estado: string) => {
  if (estado === 'resuelto') return 'success';
  if (estado === 'en_revision') return 'warning';
  return 'danger';
};

const Reportes: React.FC = () => {
  const [reportes, setReportes] = useState<Reporte[]>([]);
  const [cargando, setCargando] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tipoReporte, setTipoReporte] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [toast, setToast] = useState({ abierto: false, mensaje: '', color: 'success' });
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const history = useHistory();

  const cargarReportes = async () => {
    setCargando(true);
    try {
      const res = await api.get('/reportes');
      setReportes(res.data);
    } catch {
      setToast({ abierto: true, mensaje: 'Error al cargar reportes.', color: 'danger' });
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarReportes();
  }, []);

  const enviarReporte = async () => {
    if (!tipoReporte || !descripcion) {
      setToast({ abierto: true, mensaje: 'Completa todos los campos.', color: 'warning' });
      return;
    }
    try {
      await api.post('/reportes', { tipo_reporte: tipoReporte, descripcion });
      setToast({ abierto: true, mensaje: 'Reporte enviado con éxito.', color: 'success' });
      setModalAbierto(false);
      setTipoReporte('');
      setDescripcion('');
      cargarReportes();
    } catch {
      setToast({ abierto: true, mensaje: 'Error al enviar el reporte.', color: 'danger' });
    }
  };

  const eliminarReporte = async (id: number) => {
    try {
      await api.delete(`/reportes/${id}`);
      setToast({ abierto: true, mensaje: 'Reporte eliminado.', color: 'success' });
      cargarReportes();
    } catch {
      setToast({ abierto: true, mensaje: 'Error al eliminar el reporte.', color: 'danger' });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle>Mis Reportes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {cargando ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <IonSpinner />
          </div>
        ) : reportes.length === 0 ? (
          <IonText>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
              No tienes reportes aún. ¡Crea uno con el botón +!
            </p>
          </IonText>
        ) : (
          reportes.map((r) => (
            <IonCard key={r.id}>
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1rem' }}>
                  {r.tipo_reporte}
                  <IonBadge color={colorEstado(r.estado)} style={{ marginLeft: '0.5rem' }}>
                    {r.estado.replace('_', ' ')}
                  </IonBadge>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{r.descripcion}</p>
                <p style={{ fontSize: '0.8rem', color: '#888' }}>
                  {new Date(r.fecha_creacion).toLocaleDateString('es-CL')}
                </p>
                {user.rol !== 'administrador' && (
                  <IonButton
                    size="small"
                    color="danger"
                    fill="outline"
                    onClick={() => eliminarReporte(r.id)}
                  >
                    Eliminar
                  </IonButton>
                )}
              </IonCardContent>
            </IonCard>
          ))
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setModalAbierto(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={modalAbierto} onDidDismiss={() => setModalAbierto(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Nuevo Reporte</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setModalAbierto(false)}>Cancelar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel>Tipo de Reporte</IonLabel>
              <IonSelect value={tipoReporte} onIonChange={(e) => setTipoReporte(e.detail.value)}>
                <IonSelectOption value="Alumbrado público">Alumbrado público</IonSelectOption>
                <IonSelectOption value="Baches y pavimento">Baches y pavimento</IonSelectOption>
                <IonSelectOption value="Áreas verdes">Áreas verdes</IonSelectOption>
                <IonSelectOption value="Basura y residuos">Basura y residuos</IonSelectOption>
                <IonSelectOption value="Agua y alcantarillado">Agua y alcantarillado</IonSelectOption>
                <IonSelectOption value="Otro">Otro</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Descripción</IonLabel>
              <IonTextarea
                value={descripcion}
                onIonChange={(e) => setDescripcion(e.detail.value!)}
                rows={4}
              />
            </IonItem>
            <IonButton expand="block" className="ion-margin-top" onClick={enviarReporte}>
              Enviar Reporte
            </IonButton>
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

export default Reportes;
