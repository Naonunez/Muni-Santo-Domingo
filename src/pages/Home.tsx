import {
  IonPage, IonContent
} from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          overflow: 'hidden'
        }}>
          <img
            src="/images/frontis.jpeg"
            alt="Municipalidad Santo Domingo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Sección servicios */}
        <div style={{ padding: '40px 60px', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '30px' }}>
            Servicios Municipales
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { titulo: 'Trámites', desc: 'Realiza tus trámites municipales en línea' },
              { titulo: 'Noticias', desc: 'Mantente informado de la comuna' },
              { titulo: 'Turismo', desc: 'Descubre Santo Domingo' },
              { titulo: 'Transparencia', desc: 'Accede a información pública' },
              { titulo: 'Contacto', desc: 'Comunícate con nosotros' },
              { titulo: 'OIRS', desc: 'Oficina de Información y Reclamos' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '25px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: '#f9f9f9'
              }}>
                <h3 style={{ color: '#1a237e' }}>{item.titulo}</h3>
                <p style={{ color: '#555' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
