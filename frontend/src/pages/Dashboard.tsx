import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,
  IonBadge, IonSpinner, IonList, IonItem, IonLabel, IonIcon,
  IonMenuButton,
} from '@ionic/react';
import { notificationsOutline, checkmarkCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { guardarEstados, detectarCambios } from '../services/notificaciones';

interface Reporte {
  id: number;
  estado: string;
  tipo_reporte: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [totalReportes, setTotalReportes] = useState<number | null>(null);
  const [notificaciones, setNotificaciones] = useState<string[]>([]);
  const [verNotif, setVerNotif] = useState(false);

  useEffect(() => {
    api.get<Reporte[]>('/reportes').then((res) => {
      setTotalReportes(res.data.length);
      const cambios = detectarCambios(res.data);
      setNotificaciones(cambios);
      guardarEstados(res.data);
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
          <IonMenuButton slot="start" />
          <IonTitle>Panel Ciudadano</IonTitle>
          <div slot="end" style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '8px' }}>
            <IonButton fill="clear" onClick={() => setVerNotif(!verNotif)} style={{ position: 'relative' }}>
              <IonIcon icon={notificationsOutline} style={{ fontSize: '22px', color: '#fff' }} />
              {notificaciones.length > 0 && (
                <IonBadge color="danger" style={{
                  position: 'absolute', top: '4px', right: '4px',
                  fontSize: '10px', minWidth: '16px', height: '16px',
                  borderRadius: '8px', padding: '0 4px'
                }}>
                  {notificaciones.length}
                </IonBadge>
              )}
            </IonButton>
            <IonButton fill="clear" onClick={handleLogout} style={{ color: '#fff' }}>
              Salir
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Bienvenido, {user.nombre || 'Ciudadano'}</h2>

        {/* Panel de notificaciones */}
        {verNotif && (
          <IonCard color="light" style={{ marginBottom: '16px' }}>
            <IonCardHeader>
              <IonCardTitle style={{ fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IonIcon icon={notificationsOutline} />
                Notificaciones
                {notificaciones.length === 0 && (
                  <IonBadge color="success">Al día</IonBadge>
                )}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {notificaciones.length === 0 ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555' }}>
                  <IonIcon icon={checkmarkCircleOutline} color="success" />
                  No hay cambios nuevos en tus reportes.
                </div>
              ) : (
                <IonList lines="none">
                  {notificaciones.map((n, i) => (
                    <IonItem key={i}>
                      <IonIcon icon={notificationsOutline} slot="start" color="warning" />
                      <IonLabel style={{ fontSize: '13px' }}>{n}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              )}
            </IonCardContent>
          </IonCard>
        )}

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
