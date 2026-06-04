import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonLabel, IonInput,
  IonButton, IonText, IonToast
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados para manejar los errores visualmente
  const [mensajeError, setMensajeError] = useState('');
  const [mostrarToast, setMostrarToast] = useState(false);
  
  const history = useHistory();

  const handleLogin = async () => {
    if (!email || !password) {
      setMensajeError('Por favor ingresa tu correo y contraseña');
      setMostrarToast(true);
      return;
    }

    try {
      // Mapeamos "email" y "password" a los nombres que espera tu base de datos
      const respuesta = await api.post('/auth/login', {
        correo: email,
        contrasena: password
      });

      const { token, usuario } = respuesta.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(usuario));

      if (usuario.rol === 'administrador') {
        history.push('/admin');
      } else {
        history.push('/dashboard');
      }

    } catch (error: any) {
      if (error.response && error.response.data) {
        setMensajeError(error.response.data.error);
      } else {
        setMensajeError('Error de conexión con el servidor');
      }
      setMostrarToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Municipalidad Santo Domingo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText><h2>Iniciar Sesión</h2></IonText>

        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Ingresar
        </IonButton>

        <IonButton expand="block" fill="outline" routerLink="/register">
          Registrarse
        </IonButton>

        {/* Componente para mostrar alertas de error de forma elegante */}
        <IonToast
          isOpen={mostrarToast}
          onDidDismiss={() => setMostrarToast(false)}
          message={mensajeError}
          duration={3000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
