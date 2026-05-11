 import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonLabel, IonInput,
  IonButton, IonText
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Por ahora simulamos login (en EP2 se conecta al backend)
    if (email === 'admin@muni.cl' && password === '1234') {
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      history.push('/admin');
    } else if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, role: 'usuario' }));
      history.push('/dashboard');
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
      </IonContent>
    </IonPage>
  );
};

export default Login;
