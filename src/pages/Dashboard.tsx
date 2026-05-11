 import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Panel Ciudadano</IonTitle>
          <IonButton slot="end" fill="clear" onClick={handleLogout}>
            Cerrar Sesión
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bienvenido, {user.email}</h2>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard routerLink="/tramites">
                <IonCardHeader>
                  <IonCardTitle>Trámites</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Solicita y revisa tus trámites municipales</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard routerLink="/reportes">
                <IonCardHeader>
                  <IonCardTitle>Reportes</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Reporta problemas en tu comuna</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard routerLink="/noticias">
                <IonCardHeader>
                  <IonCardTitle>Noticias</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Últimas noticias de la municipalidad</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard routerLink="/perfil">
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
