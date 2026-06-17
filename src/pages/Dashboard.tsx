import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,
  IonBadge, IonSpinner,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [totalReportes, setTotalReportes] = useState<number | null>(null);

  useEffect(() => {
    api.get('/reportes').then((res: { data: unknown[] }) => {
      setTotalReportes(res.data.length);
    }).catch(() => setTotalReportes(0));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Panel Ciudadano</IonTitle>
          <IonButton slot="end" fill="clear" onClick={handleLogout}>
            Cerrar Sesión
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bienvenido, {user.nombre || 'Ciudadano'}</h2>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard button routerLink="/reportes">
                <IonCardHeader>
                  <IonCardTitle>Reportes</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Reporta problemas en tu comuna
                  <br />
                  {totalReportes === null ? (
                    <IonSpinner name="dots" />
                  ) : (
                    <IonBadge color="primary">{totalReportes} enviados</IonBadge>
                  )}
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard button routerLink="/noticias">
                <IonCardHeader>
                  <IonCardTitle>Noticias</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Últimas noticias de la municipalidad</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard button routerLink="/tramites/direccion-obras">
                <IonCardHeader>
                  <IonCardTitle>Trámites</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Información sobre trámites municipales</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard button routerLink="/perfil">
                <IonCardHeader>
                  <IonCardTitle>Mi Perfil</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Gestiona tu información personal</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
