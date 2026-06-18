import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SECCIONES = [
  {
    titulo: 'Atractivos Patrimoniales y Culturales',
    desc: 'Descubre el rico patrimonio histórico de Santo Domingo: vestigios precolombinos, parques científicos y la historia que forjó nuestra identidad cultural.',
    imagen: '/images/Piedra_Intihuatana.jpeg',
    ruta: '/turismo/patrimonial',
    circulo: '#f0f4ff',
  },
  {
    titulo: 'Atractivos Naturales',
    desc: 'Santo Domingo, denominada "Comuna Parque", te invita a conocer sus playas, humedales, reservas naturales y el encuentro del río Maipo con el mar.',
    imagen: '/images/Humedal.jpeg',
    ruta: '/turismo/naturales',
    circulo: '#e8f5e9',
  },
];

const Turismo: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/Frontis_atractivos.jpeg" alt="Turismo en Santo Domingo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '540px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Turismo
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Santo Domingo es una comuna privilegiada por su naturaleza, historia y cultura. Explora todo lo que nuestra tierra tiene para ofrecerte.
            </p>
          </div>
        </div>

        {/* Tarjetas de secciones */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.375rem' }}>
            Explora nuestra comuna
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
            {SECCIONES.map((sec, i) => (
              <div
                key={i}
                onClick={() => history.push(sec.ruta)}
                style={{ borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', transition: 'all 0.25s', background: '#fff' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
                }}
              >
                {/* Imagen */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img src={sec.imagen} alt={sec.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />
                </div>

                {/* Contenido con círculo decorativo */}
                <div style={{ position: 'relative', padding: '28px 24px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: sec.circulo, zIndex: 0 }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ color: '#1a237e', margin: '0 0 0.625rem', fontSize: '1.125rem', fontWeight: 700 }}>
                      {sec.titulo}
                    </h3>
                    <p style={{ color: '#555', margin: '0 0 1.25rem', fontSize: '0.875rem', lineHeight: 1.7 }}>
                      {sec.desc}
                    </p>
                    <span style={{ display: 'inline-block', background: '#1a237e', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600 }}>
                      Explorar →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto turismo */}
        <div style={{ padding: '2.5rem 3.75rem', background: '#1a237e', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Oficina de Turismo</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', margin: '0 0 0.375rem', fontSize: '0.9375rem' }}>
            Municipalidad de Santo Domingo, Av. Santa Teresa N° 1
          </p>
          <a href="mailto:municipio@santodomingo.cl" style={{ color: '#90caf9', fontSize: '0.9375rem', textDecoration: 'underline' }}>
            municipio@santodomingo.cl
          </a>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Turismo;
