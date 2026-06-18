import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem, IonLabel, IonBadge,
  IonSpinner, IonText, IonButtons, IonBackButton, IonSearchbar,
} from '@ionic/react';
import api from '../services/api';

interface Usuario {
  id: number;
  nombre: string;
  rut: string;
  correo: string;
  region: string;
  comuna: string;
  rol: string;
  fecha_registro: string;
}

const AdminUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [filtrados, setFiltrados] = useState<Usuario[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    api.get<Usuario[]>('/usuarios')
      .then((res) => {
        setUsuarios(res.data);
        setFiltrados(res.data);
      })
      .catch(() => setCargando(false))
      .finally(() => setCargando(false));
  }, []);

  const filtrar = (texto: string) => {
    setBusqueda(texto);
    const q = texto.toLowerCase();
    setFiltrados(
      usuarios.filter(
        (u) =>
          u.nombre.toLowerCase().includes(q) ||
          u.correo.toLowerCase().includes(q) ||
          u.rut.toLowerCase().includes(q)
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/admin" />
          </IonButtons>
          <IonTitle>Usuarios Registrados</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonSearchbar
          value={busqueda}
          onIonInput={(e) => filtrar(e.detail.value!)}
          placeholder="Buscar por nombre, correo o RUT"
          debounce={200}
        />

        {cargando ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}><IonSpinner /></div>
        ) : filtrados.length === 0 ? (
          <IonText><p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>No se encontraron usuarios.</p></IonText>
        ) : (
          filtrados.map((u) => (
            <IonCard key={u.id}>
              <IonCardContent style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '1rem' }}>{u.nombre}</strong>
                  <IonBadge color={u.rol === 'administrador' ? 'primary' : 'medium'}>
                    {u.rol}
                  </IonBadge>
                </div>
                <IonItem lines="none" style={{ '--padding-start': '0' }}>
                  <IonLabel>
                    <p>RUT: {u.rut}</p>
                    <p>Correo: {u.correo}</p>
                    <p>Comuna: {u.comuna}, {u.region}</p>
                    <p style={{ fontSize: '0.75rem', color: '#999' }}>
                      Registrado: {new Date(u.fecha_registro).toLocaleDateString('es-CL')}
                    </p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default AdminUsuarios;
