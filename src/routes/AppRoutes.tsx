import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
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

const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/autoridades" component={Autoridades} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/admin" component={Admin} role="admin" exact />
        <Redirect from="/" to="/home" exact />
        <Route path="/tramites/direccion-obras" component={DireccionObras} exact />
        <Route path="/noticias" component={Noticias} exact />
        <Route path="/turismo/patrimonial" component={TurismoPatrimonial} exact />
        <Route path="/tramites/medio-ambiente" component={MedioAmbiente} exact />
        <Route path="/turismo/naturales" component={AtractivosNaturales} exact />
        <Route path="/plan-regulador/comunal" component={PlanRegulador} exact />
        <Route path="/plan-regulador/instrumentos" component={InstrumentosPlanificacion} exact />
        <Route path="/plan-regulador/ordenanzas" component={OrdenanzasMunicipales} exact />
        <Route path="/contacto" component={Contacto} exact />
        
        
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;