import React from 'react';
import {
  IonRouterOutlet, IonSplitPane, IonMenu,
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonIcon, IonMenuToggle,
} from '@ionic/react';
import {
  homeOutline, newspaperOutline, peopleOutline, constructOutline,
  documentTextOutline, logOutOutline, personOutline,
  alertCircleOutline, settingsOutline, listOutline,
} from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Autoridades from '../pages/Autoridades';
import PrivateRoute from '../components/PrivateRoute';
import DireccionObras from '../pages/DireccionObras';
import Noticias from '../pages/Noticias';
import TurismoPatrimonial from '../pages/TurismoPatrimonial';
import MedioAmbiente from '../pages/MedioAmbiente';
import AtractivosNaturales from '../pages/AtractivosNaturales';
import PlanRegulador from '../pages/PlanRegulador';
import InstrumentosPlanificacion from '../pages/PlanificacionTerritorial';
import OrdenanzasMunicipales from '../pages/OrdenanzasMunicipales';
import Contacto from '../pages/Contacto';
import Tramites from '../pages/Tramites';
import Turismo from '../pages/Turismo';
import Direcciones from '../pages/Direcciones';
import NoticiaDetalle from '../pages/NoticiaDetalle';
import Reportes from '../pages/Reportes';
import DireccionTransito from '../pages/DireccionTransito';
import JuzgadoPoliciaLocal from '../pages/JuzgadoPoliciaLocal';
import BecasMunicipales from '../pages/BecasMunicipales';
import Subsidios from '../pages/Subsidios';
import OMIL from '../pages/OMIL';
import PagosMunicipales from '../pages/PagosMunicipales';
import Certificados from '../pages/Certificados';
import Perfil from '../pages/Perfil';
import AdminNoticias from '../pages/AdminNoticias';
import AdminUsuarios from '../pages/AdminUsuarios';
import AdminReportes from '../pages/AdminReportes';

const MenuCiudadano: React.FC = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <>
      <IonMenuToggle>
        <IonItem button routerLink="/dashboard" routerDirection="none" lines="none">
          <IonIcon icon={homeOutline} slot="start" />
          <IonLabel>Inicio</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/reportes" routerDirection="none" lines="none">
          <IonIcon icon={alertCircleOutline} slot="start" />
          <IonLabel>Mis Reportes</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/noticias" routerDirection="none" lines="none">
          <IonIcon icon={newspaperOutline} slot="start" />
          <IonLabel>Noticias</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/perfil" routerDirection="none" lines="none">
          <IonIcon icon={personOutline} slot="start" />
          <IonLabel>Mi Perfil</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/home" routerDirection="none" lines="none">
          <IonIcon icon={homeOutline} slot="start" />
          <IonLabel>Sitio Municipal</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button onClick={handleLogout} lines="none" style={{ marginTop: '16px' }}>
          <IonIcon icon={logOutOutline} slot="start" color="danger" />
          <IonLabel color="danger">Cerrar Sesión</IonLabel>
        </IonItem>
      </IonMenuToggle>
    </>
  );
};

const MenuAdmin: React.FC = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <>
      <IonMenuToggle>
        <IonItem button routerLink="/admin" routerDirection="none" lines="none">
          <IonIcon icon={settingsOutline} slot="start" />
          <IonLabel>Panel Admin</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/admin/reportes" routerDirection="none" lines="none">
          <IonIcon icon={listOutline} slot="start" />
          <IonLabel>Reportes</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/admin/noticias" routerDirection="none" lines="none">
          <IonIcon icon={newspaperOutline} slot="start" />
          <IonLabel>Noticias</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button routerLink="/admin/usuarios" routerDirection="none" lines="none">
          <IonIcon icon={peopleOutline} slot="start" />
          <IonLabel>Usuarios</IonLabel>
        </IonItem>
      </IonMenuToggle>
      <IonMenuToggle>
        <IonItem button onClick={handleLogout} lines="none" style={{ marginTop: '16px' }}>
          <IonIcon icon={logOutOutline} slot="start" color="danger" />
          <IonLabel color="danger">Cerrar Sesión</IonLabel>
        </IonItem>
      </IonMenuToggle>
    </>
  );
};

const AppMenu: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  if (!user) return null;
  return user.rol === 'administrador' ? <MenuAdmin /> : <MenuCiudadano />;
};

const RUTAS_PUBLICAS = ['/home', '/noticias', '/turismo', '/tramites', '/autoridades', '/direcciones', '/contacto', '/login', '/register', '/plan-regulador'];

const AppLayout: React.FC = () => {
  const location = useLocation();
  const estaAutenticado = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const esPublica = RUTAS_PUBLICAS.some(r => location.pathname.startsWith(r));
  const mostrarMenu = estaAutenticado && !esPublica;

  return (
    <IonSplitPane contentId="main-content" when="lg" disabled={!mostrarMenu}>
      {mostrarMenu && (
          <IonMenu contentId="main-content" type="overlay">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle style={{ fontSize: '15px' }}>
                  {user?.rol === 'administrador' ? 'Administración' : 'Portal Ciudadano'}
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <AppMenu />
              </IonList>
            </IonContent>
          </IonMenu>
        )}

        <IonRouterOutlet id="main-content">
          <Route path="/home" component={Home} exact />
          <Route path="/autoridades" component={Autoridades} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PrivateRoute path="/admin" component={Admin} role="admin" exact />
          <Redirect from="/" to="/home" exact />
          <Route path="/tramites/direccion-obras" component={DireccionObras} exact />
          <Route path="/noticias" component={Noticias} exact />
          <Route path="/noticias/:id" component={NoticiaDetalle} exact />
          <Route path="/turismo/patrimonial" component={TurismoPatrimonial} exact />
          <Route path="/tramites/medio-ambiente" component={MedioAmbiente} exact />
          <Route path="/tramites/transito" component={DireccionTransito} exact />
          <Route path="/tramites/juzgado" component={JuzgadoPoliciaLocal} exact />
          <Route path="/tramites/becas" component={BecasMunicipales} exact />
          <Route path="/tramites/subsidios" component={Subsidios} exact />
          <Route path="/tramites/omil" component={OMIL} exact />
          <Route path="/tramites/pagos" component={PagosMunicipales} exact />
          <Route path="/tramites/certificados" component={Certificados} exact />
          <Route path="/turismo/naturales" component={AtractivosNaturales} exact />
          <Route path="/plan-regulador/comunal" component={PlanRegulador} exact />
          <Route path="/plan-regulador/instrumentos" component={InstrumentosPlanificacion} exact />
          <Route path="/plan-regulador/ordenanzas" component={OrdenanzasMunicipales} exact />
          <Route path="/contacto" component={Contacto} exact />
          <Route path="/tramites" component={Tramites} exact />
          <Route path="/turismo" component={Turismo} exact />
          <Route path="/direcciones" component={Direcciones} exact />
          <PrivateRoute path="/reportes" component={Reportes} exact />
          <PrivateRoute path="/perfil" component={Perfil} exact />
          <PrivateRoute path="/admin/noticias" component={AdminNoticias} role="admin" exact />
          <PrivateRoute path="/admin/usuarios" component={AdminUsuarios} role="admin" exact />
          <PrivateRoute path="/admin/reportes" component={AdminReportes} role="admin" exact />
        </IonRouterOutlet>
      </IonSplitPane>
  );
};

const AppRoutes: React.FC = () => (
  <IonReactRouter>
    <AppLayout />
  </IonReactRouter>
);

export default AppRoutes;
