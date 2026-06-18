import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonModal, IonItem, IonLabel, IonInput, IonTextarea,
  IonToast, IonSpinner, IonText, IonButtons, IonBackButton,
  IonFab, IonFabButton, IonIcon, IonAlert,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import api from '../services/api';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  fecha_publicacion: string;
  autor?: string;
}

const AdminNoticias: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [editando, setEditando] = useState<Noticia | null>(null);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState('');
  const [alertaBorrar, setAlertaBorrar] = useState<number | null>(null);
  const [toast, setToast] = useState({ abierto: false, mensaje: '', color: 'success' });

  const cargar = async () => {
    setCargando(true);
    try {
      const res = await api.get<Noticia[]>('/noticias');
      setNoticias(res.data);
    } catch {
      mostrarToast('Error al cargar noticias.', 'danger');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  const mostrarToast = (mensaje: string, color: string) =>
    setToast({ abierto: true, mensaje, color });

  const abrirCrear = () => {
    setEditando(null);
    setTitulo('');
    setContenido('');
    setImagen('');
    setModalAbierto(true);
  };

  const abrirEditar = (n: Noticia) => {
    setEditando(n);
    setTitulo(n.titulo);
    setContenido(n.contenido);
    setImagen(n.imagen || '');
    setModalAbierto(true);
  };

  const guardar = async () => {
    if (!titulo.trim() || !contenido.trim()) {
      mostrarToast('Título y contenido son obligatorios.', 'warning');
      return;
    }
    try {
      if (editando) {
        await api.put(`/noticias/${editando.id}`, { titulo, contenido, imagen });
        mostrarToast('Noticia actualizada.', 'success');
      } else {
        await api.post('/noticias', { titulo, contenido, imagen });
        mostrarToast('Noticia creada.', 'success');
      }
      setModalAbierto(false);
      cargar();
    } catch {
      mostrarToast('Error al guardar la noticia.', 'danger');
    }
  };

  const eliminar = async (id: number) => {
    try {
      await api.delete(`/noticias/${id}`);
      mostrarToast('Noticia eliminada.', 'success');
      cargar();
    } catch {
      mostrarToast('Error al eliminar.', 'danger');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" />
          </IonButtons>
          <IonTitle>Gestión de Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {cargando ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}><IonSpinner /></div>
        ) : noticias.length === 0 ? (
          <IonText><p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>No hay noticias publicadas.</p></IonText>
        ) : (
          noticias.map((n) => (
            <IonCard key={n.id}>
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1rem' }}>{n.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>{n.contenido.substring(0, 120)}...</p>
                <p style={{ fontSize: '0.75rem', color: '#999' }}>
                  {new Date(n.fecha_publicacion).toLocaleDateString('es-CL')}
                  {n.autor ? ` — ${n.autor}` : ''}
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <IonButton size="small" fill="outline" onClick={() => abrirEditar(n)}>Editar</IonButton>
                  <IonButton size="small" color="danger" fill="outline" onClick={() => setAlertaBorrar(n.id)}>Eliminar</IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          ))
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={abrirCrear}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Modal crear/editar */}
        <IonModal isOpen={modalAbierto} onDidDismiss={() => setModalAbierto(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{editando ? 'Editar Noticia' : 'Nueva Noticia'}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setModalAbierto(false)}>Cancelar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="floating">Título</IonLabel>
              <IonInput value={titulo} onIonChange={(e) => setTitulo(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">URL de imagen (opcional)</IonLabel>
              <IonInput value={imagen} onIonChange={(e) => setImagen(e.detail.value!)} placeholder="https://..." />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contenido</IonLabel>
              <IonTextarea value={contenido} onIonChange={(e) => setContenido(e.detail.value!)} rows={6} />
            </IonItem>
            <IonButton expand="block" className="ion-margin-top" onClick={guardar}>
              {editando ? 'Guardar cambios' : 'Publicar noticia'}
            </IonButton>
          </IonContent>
        </IonModal>

        {/* Alerta confirmar eliminación */}
        <IonAlert
          isOpen={alertaBorrar !== null}
          onDidDismiss={() => setAlertaBorrar(null)}
          header="¿Eliminar noticia?"
          message="Esta acción no se puede deshacer."
          buttons={[
            { text: 'Cancelar', role: 'cancel' },
            { text: 'Eliminar', role: 'destructive', handler: () => { if (alertaBorrar) eliminar(alertaBorrar); } },
          ]}
        />

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

export default AdminNoticias;
