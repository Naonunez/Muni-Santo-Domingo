import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,
  IonBadge, IonSpinner,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface Stats {
  total_usuarios: number;
  reportes_pendientes: number;
  total_reportes: number;
  total_noticias: number;
}

const Admin: React.FC = () => {
  const history = useHistory();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    api.get('/usuarios/stats').then((res: { data: Stats }) => {
      setStats(res.data);
    }).catch(() => setStats({ total_usuarios: 0, reportes_pendientes: 0, total_reportes: 0, total_noticias: 0 }));
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
          <IonTitle>Panel Administrador</IonTitle>
          <IonButton slot="end" fill="clear" onClick={handleLogout}>
            Cerrar Sesión
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Panel de Administración</h2>
        <p>Municipalidad Santo Domingo</p>

        {stats ? (
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonCard button routerLink="/admin/usuarios">
                  <IonCardHeader>
                    <IonCardTitle>Usuarios</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Ciudadanos registrados
                    <br />
                    <IonBadge color="primary">{stats.total_usuarios} registrados</IonBadge>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="6">
                <IonCard button routerLink="/admin/reportes">
                  <IonCardHeader>
                    <IonCardTitle>Reportes</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Reportes ciudadanos
                    <br />
                    <IonBadge color="danger">{stats.reportes_pendientes} pendientes</IonBadge>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="6">
                <IonCard button routerLink="/admin/noticias">
                  <IonCardHeader>
                    <IonCardTitle>Noticias</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Publicaciones activas
                    <br />
                    <IonBadge color="success">{stats.total_noticias} publicadas</IonBadge>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="6">
                <IonCard button routerLink="/noticias">
                  <IonCardHeader>
                    <IonCardTitle>Ver Sitio</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Ir a vista pública
                    <br />
                    <IonBadge color="medium">Público</IonBadge>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <IonSpinner />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Admin;
