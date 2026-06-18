import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CATEGORIAS = [
  {
    titulo: 'Dirección de Obras',
    desc: 'Permisos de edificación, subdivisiones, recepciones de obras y certificados de informes previos.',
    icono: 'cl-document-verified',
    ruta: '/tramites/direccion-obras',
  },
  {
    titulo: 'Medio Ambiente, Aseo y Ornato',
    desc: 'Trámites relacionados con aseo domiciliario, reciclaje, áreas verdes y medio ambiente.',
    icono: 'cl-reading',
    ruta: '/tramites/medio-ambiente',
  },
  {
    titulo: 'Dirección de Tránsito',
    desc: 'Licencias de conducir, revisión técnica y permisos de circulación.',
    icono: 'cl-touch-screen',
    ruta: '/tramites/transito',
  },
  {
    titulo: 'Juzgado de Policía Local',
    desc: 'Infracciones de tránsito, multas municipales y procesos de mediación.',
    icono: 'cl-document-verified',
    ruta: '/tramites/juzgado',
  },
  {
    titulo: 'Becas Municipales',
    desc: 'Postulación a becas de estudio para educación escolar y superior.',
    icono: 'cl-reading',
    ruta: '/tramites/becas',
  },
  {
    titulo: 'Subsidios',
    desc: 'Subsidios habitacionales, sociales y ayudas de emergencia.',
    icono: 'cl-currency-cycle',
    ruta: '/tramites/subsidios',
  },
  {
    titulo: 'OMIL',
    desc: 'Oficina Municipal de Intermediación Laboral. Bolsa de empleo y capacitaciones.',
    icono: 'cl-give-letter',
    ruta: '/tramites/omil',
  },
  {
    titulo: 'Pagos en Línea',
    desc: 'Pago de patentes comerciales, contribuciones y derechos municipales.',
    icono: 'cl-currency-cycle',
    ruta: '/tramites/pagos',
  },
  {
    titulo: 'Certificados',
    desc: 'Solicitud de certificados de residencia, avalúo y otros documentos municipales.',
    icono: 'cl-document-verified',
    ruta: '/tramites/certificados',
  },
];

const Tramites: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Trámites municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Trámites Municipales
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Accede a todos los servicios y trámites que ofrece la Municipalidad de Santo Domingo de forma rápida y sencilla.
            </p>
          </div>
        </div>

        {/* Grid de categorías */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '2.25rem', fontSize: '1.375rem' }}>
            ¿Qué trámite necesitas realizar?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {CATEGORIAS.map((cat, i) => (
              <div
                key={i}
                onClick={() => history.push(cat.ruta)}
                style={{
                  background: '#fff',
                  borderRadius: '8px',
                  borderTop: '3px solid #1565c0',
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(26,35,126,0.12)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.07)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  backgroundColor: '#e8edf8', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <i className={`cl ${cat.icono}`} style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '1rem', fontWeight: 700 }}>{cat.titulo}</h3>
                <p style={{ color: '#666', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6, flex: 1 }}>{cat.desc}</p>
                <span style={{ color: '#1565c0', fontSize: '0.8125rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ver más
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nota informativa */}
        <div style={{ padding: '2.5rem 3.75rem', background: '#1a237e', textAlign: 'center' }}>
          <p style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 600 }}>
            ¿Necesitas ayuda con tu trámite?
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.875rem' }}>
            Visítanos en Av. Santa Teresa N° 1, Santo Domingo · Lunes a Viernes 08:45 – 14:00 hrs
          </p>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Tramites;
