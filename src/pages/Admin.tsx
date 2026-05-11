 import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,
  IonBadge
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Admin: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Panel Administrador</IonTitle>
          <IonButton slot="end" fill="clear" onClick={handleLogout}>
            Cerrar Sesión
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Panel de Administración</h2>
        <p>Municipalidad Santo Domingo</p>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Usuarios</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Gestiona los ciudadanos registrados
                  <br />
                  <IonBadge color="primary">24 usuarios</IonBadge>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Trámites</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Revisa y gestiona solicitudes
                  <br />
                  <IonBadge color="warning">8 pendientes</IonBadge>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Reportes</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Reportes ciudadanos recibidos
                  <br />
                  <IonBadge color="danger">3 urgentes</IonBadge>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Noticias</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Publica y edita noticias
                  <br />
                  <IonBadge color="success">Activo</IonBadge>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Admin;
