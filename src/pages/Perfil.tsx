import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonItem, IonLabel, IonSpinner,
  IonToast, IonButtons, IonBackButton, IonText,
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

const Perfil: React.FC = () => {
  const [perfil, setPerfil] = useState<Usuario | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get('/usuarios/perfil')
      .then((res: { data: Usuario }) => setPerfil(res.data))
      .catch(() => setError(true));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {perfil ? (
          <IonCard>
            <IonCardContent>
              <IonItem lines="full">
                <IonLabel>
                  <strong>Nombre</strong>
                  <p>{perfil.nombre}</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonLabel>
                  <strong>RUT</strong>
                  <p>{perfil.rut}</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonLabel>
                  <strong>Correo</strong>
                  <p>{perfil.correo}</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonLabel>
                  <strong>Región</strong>
                  <p>{perfil.region}</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="full">
                <IonLabel>
                  <strong>Comuna</strong>
                  <p>{perfil.comuna}</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>
                  <strong>Miembro desde</strong>
                  <p>{new Date(perfil.fecha_registro).toLocaleDateString('es-CL')}</p>
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            {error ? (
              <IonText color="danger"><p>Error al cargar el perfil.</p></IonText>
            ) : (
              <IonSpinner />
            )}
          </div>
        )}

        <IonToast
          isOpen={error}
          message="No se pudo cargar el perfil."
          duration={3000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
