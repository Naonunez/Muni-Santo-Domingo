import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarruselHero from '../components/CarruselHero';
import BuscadorGlobal from '../components/BuscadorGlobal';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent scrollEvents>
        <Navbar />

        {/* Hero: frontis de fondo con carrusel de afiches encima */}
        <div style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden' }}>
          <img
            src="/images/frontis.jpeg"
            alt="Municipalidad Santo Domingo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.55) 0%, rgba(10,20,80,0.2) 100%)', zIndex: 1 }} />

          {/* Carrusel de afiches centrado sobre el hero */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.5))',
          }}>
            <CarruselHero />
          </div>
        </div>

        {/* Buscador centrado */}
        <div style={{
          background: '#f0f2f8',
          padding: '28px 20px',
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #dde1ef',
        }}>
          <BuscadorGlobal />
        </div>

        {/* Sección servicios */}
        <div style={{ padding: '2.5rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '1.875rem', fontSize: '1.375rem' }}>
            Servicios Municipales
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }}>
            {[
              { titulo: 'Trámites',  desc: 'Realiza tus trámites municipales en línea',         ruta: '/tramites' },
              { titulo: 'Noticias',  desc: 'Mantente informado de la comuna',                    ruta: '/noticias' },
              { titulo: 'Turismo',   desc: 'Descubre Santo Domingo',                             ruta: '/turismo' },
              { titulo: 'Geoportal', desc: 'Accede al Sistema de Información Geográfica',        href: 'https://geoportal-santodomingo.hub.arcgis.com/' },
              { titulo: 'Contacto',  desc: 'Comunícate con nosotros',                            ruta: '/contacto' },
              { titulo: 'OIRS',      desc: 'Oficina de Información y Reclamos',                  href: 'https://santodomingo.cerofilas.gob.cl/tramites/informativo/235' },
            ].map((item: { titulo: string; desc: string; ruta?: string; href?: string }, i) => {
              const cardStyle: React.CSSProperties = {
                padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px',
                textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s',
                backgroundColor: '#f9f9f9', textDecoration: 'none', display: 'flex',
                flexDirection: 'column', justifyContent: 'center',
              };
              const contenido = (
                <>
                  <h3 style={{ color: '#1a237e', margin: '0 0 0.5rem', fontSize: '1rem' }}>{item.titulo}</h3>
                  <p style={{ color: '#555', margin: 0, fontSize: '0.875rem' }}>{item.desc}</p>
                </>
              );
              const hover = {
                enter: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#e8eaf6';
                  (e.currentTarget as HTMLElement).style.borderColor = '#1a237e';
                },
                leave: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#f9f9f9';
                  (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0';
                },
              };
              if (item.href) {
                return (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    style={cardStyle} onMouseEnter={hover.enter} onMouseLeave={hover.leave}>
                    {contenido}
                  </a>
                );
              }
              return (
                <div key={i} style={cardStyle} onClick={() => history.push(item.ruta!)}
                  onMouseEnter={hover.enter} onMouseLeave={hover.leave}>
                  {contenido}
                </div>
              );
            })}
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
