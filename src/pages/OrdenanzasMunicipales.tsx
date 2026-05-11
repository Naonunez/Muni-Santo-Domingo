import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrdenanzasMunicipales: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '500px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/Ordenanza.jpeg"
            alt="Ordenanzas Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '60px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}>
              Ordenanzas Municipales
            </h1>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default OrdenanzasMunicipales;