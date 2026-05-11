import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DireccionObras: React.FC = () => {
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
            src="/images/direccion_de_obras.jpeg"
            alt="Dirección de Obras"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
          />
          <div style={{
            position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0 0 16px 0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>
              Dirección de Obras
            </h1>
            <p style={{ fontSize: '15px', lineHeight: '1.6', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Velar por el cumplimiento de las disposiciones de la Ley General de
              Urbanismo y Construcciones, del Plan Regulador Comunal y de las
              ordenanzas correspondientes
            </p>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default DireccionObras;
