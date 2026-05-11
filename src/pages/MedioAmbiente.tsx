import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MedioAmbiente: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '450px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/Medio_Ambiente.jpeg"
            alt="Dirección de Medio Ambiente"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '550px'
          }}>
            <h1 style={{
              fontSize: '44px', fontWeight: '900', margin: '0 0 16px 0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
            }}>
              Dirección de Medio Ambiente,<br />Aseo y Ornato (DIMAO)
            </h1>
            <p style={{ fontSize: '14px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
              Promueve la protección del medioambiente en la comuna mediante la
              ejecución de programas y proyectos que apunten al desarrollo
              sostenible, mediante la educación ambiental, tenencia responsable de
              mascotas, fiscalización ambiental y revisión y seguimiento de los
              proyectos sometidos al Sistema de Evaluación de Impacto Ambiental (SEIA).
            </p>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default MedioAmbiente;