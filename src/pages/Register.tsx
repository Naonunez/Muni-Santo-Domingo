import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonItem, IonLabel, IonInput,
  IonButton, IonText, IonCheckbox, IonSelect,
  IonSelectOption, IonToast
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api'; // Importamos tu conexión real al backend

const Register: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terminos, setTerminos] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [colorAlerta, setColorAlerta] = useState<'danger' | 'success' | 'warning'>('danger');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const history = useHistory();

  const handleRegister = async () => {
    if (!nombre || !rut || !email || !region || !comuna || !password) {
      mostrarToast('Por favor completa todos los campos', 'warning');
      return;
    }
    if (!terminos) {
      mostrarToast('Debes aceptar los términos y condiciones', 'warning');
      return;
    }
    if (password !== confirmPassword) {
      mostrarToast('Las contraseñas no coinciden', 'danger');
      return;
    }

    try {
      await api.post('/auth/register', {
        nombre: nombre,
        rut: rut,
        correo: email, 
        region: region,
        comuna: comuna,
        contrasena: password, 
        rol: 'ciudadano' 
      });

      mostrarToast('¡Registro exitoso! Ya puedes iniciar sesión.', 'success');
      
      setTimeout(() => {
        history.push('/login');
      }, 2000);

    } catch (error: any) {
      if (error.response && error.response.data) {
        mostrarToast(error.response.data.error, 'danger');
      } else {
        mostrarToast('Error de conexión con el servidor', 'danger');
      }
    }
  };

  const mostrarToast = (texto: string, color: 'danger' | 'success' | 'warning') => {
    setMensajeAlerta(texto);
    setColorAlerta(color);
    setMostrarAlerta(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText><h2>Crear Cuenta</h2></IonText>

        <IonItem>
          <IonLabel position="floating">Nombre de Usuario</IonLabel>
          <IonInput value={nombre} onIonChange={e => setNombre(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">RUT</IonLabel>
          <IonInput value={rut} onIonChange={e => setRut(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo Electrónico</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel>Región</IonLabel>
          <IonSelect value={region} onIonChange={e => setRegion(e.detail.value)}>
            <IonSelectOption value="rm">Región Metropolitana</IonSelectOption>
            <IonSelectOption value="v">Región de Valparaíso</IonSelectOption>
            <IonSelectOption value="vi">Región del Libertador</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Comuna</IonLabel>
          <IonInput value={comuna} onIonChange={e => setComuna(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Contraseña</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Confirmar Contraseña</IonLabel>
          <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonCheckbox slot="start" checked={terminos} onIonChange={e => setTerminos(e.detail.checked)} />
          <IonLabel>Acepto los términos y condiciones</IonLabel>
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleRegister}>
          Registrarse
        </IonButton>

        <IonButton expand="block" fill="outline" routerLink="/login">
          Ya tengo cuenta
        </IonButton>

        {}
        <IonToast
          isOpen={mostrarAlerta}
          onDidDismiss={() => setMostrarAlerta(false)}
          message={mensajeAlerta}
          duration={3000}
          color={colorAlerta}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;
