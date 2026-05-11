import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contacto: React.FC = () => {
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
            src="/images/Contacto.jpeg"
            alt="Contacto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '60px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}>
              Contacto
            </h1>
          </div>
        </div>

        {/* Contáctanos */}
        <div style={{ padding: '60px 80px', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111', marginBottom: '40px' }}>
            Contáctanos
          </h2>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Dirección */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>📍</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Dirección</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                Municipalidad de Santo Domingo,<br />
                Av. Santa Teresa de Los Andes N° 1
              </p>
            </div>

            {/* Llámanos */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>📞</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Llámanos</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                Fono de Seguridad: 1458<br />
                + 563 2238 1603<br />
                + 563 5220 4200
              </p>
            </div>

            {/* Email */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>✉️</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Email</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                contacto@santodomingo.cl
              </p>
            </div>

          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Contacto;