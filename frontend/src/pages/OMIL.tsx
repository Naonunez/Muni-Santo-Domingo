import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PASOS = [
  { n: '1', titulo: 'Currículum Vitae Digital', desc: 'Prepara tu CV actualizado en formato digital antes de iniciar la postulación.' },
  { n: '2', titulo: 'Formulario de Inscripción', desc: 'Completa el formulario oficial de postulación disponible en el enlace de registro.' },
  { n: '3', titulo: 'Taller de Empleabilidad', desc: 'Asiste al taller de empleabilidad dictado por la OMIL para prepararte para el mercado laboral.' },
  { n: '4', titulo: 'Pruebas de Evaluación', desc: 'Realiza las pruebas de evaluación requeridas para completar tu perfil de postulante.' },
  { n: '5', titulo: 'Envío de Postulación', desc: 'Envía tu postulación a través del formulario en línea o preséntate directamente en la oficina.' },
];

const SERVICIOS = [
  {
    titulo: 'Intermediación Laboral',
    desc: 'Vinculamos las necesidades de empleo de los vecinos con las oportunidades laborales ofrecidas por empresas de la comuna y la región.',
    icono: 'cl-give-letter',
  },
  {
    titulo: 'Búsqueda de Capacitaciones',
    desc: 'Facilitamos el acceso a cursos de capacitación en oficios disponibles en el portal OMIL para potenciar tus habilidades laborales.',
    icono: 'cl-reading',
  },
  {
    titulo: 'Bolsa de Trabajo',
    desc: 'Publicamos ofertas laborales disponibles en la comuna y conectamos a los postulantes con empleadores locales.',
    icono: 'cl-document-verified',
  },
  {
    titulo: 'Taller de Empleabilidad',
    desc: 'Talleres para mejorar habilidades blandas, preparar entrevistas de trabajo y elaborar un currículum vitae efectivo.',
    icono: 'cl-touch-screen',
  },
];

const OMIL: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="OMIL Santo Domingo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '560px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              OMIL
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: '0 0 0.5rem' }}>
              Oficina Municipal de Intermediación Laboral
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.3)', margin: 0, color: 'rgba(255,255,255,0.9)' }}>
              Conectamos a los vecinos de Santo Domingo con oportunidades de empleo y capacitación laboral en la región.
            </p>
          </div>
        </div>

        {/* Barra informativa */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-touch-screen', label: 'Ubicación OMIL',    valor: 'Plaza del Cabildo s/n' },
              { icono: 'cl-telephone',    label: 'WhatsApp',           valor: '+56 9 3959 3561' },
              { icono: 'cl-reading',      label: 'Horario',            valor: 'Lunes a Viernes: 08:45 – 14:00 hrs' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <i className={`cl ${item.icono}`} style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 0.125rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</p>
                  <p style={{ color: '#fff', margin: 0, fontSize: '0.8125rem', fontWeight: 600 }}>{item.valor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Servicios</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La OMIL pone a disposición de los vecinos un conjunto de servicios gratuitos orientados a mejorar su acceso al mercado laboral.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {SERVICIOS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderTop: '3px solid #1565c0', padding: '1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`cl ${s.icono}`} style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 700 }}>{s.titulo}</h3>
                <p style={{ color: '#666', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cómo inscribirse */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Cómo Inscribirse</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Sigue estos pasos para registrarte en la OMIL y acceder a las oportunidades laborales y de capacitación disponibles.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '780px' }}>
            {PASOS.map((paso, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: '#f5f7fa', borderRadius: '8px', padding: '1.25rem 1.5rem', borderLeft: '4px solid #1565c0' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: '#1565c0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.875rem' }}>{paso.n}</span>
                </div>
                <div>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.9375rem', fontWeight: 700 }}>{paso.titulo}</p>
                  <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/oRJbiR6W84Bw4bU97" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.625rem 1.75rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Formulario de Inscripción
            </a>
            <a href="https://santodomingo.cerofilas.gob.cl" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', border: '2px solid #1565c0', color: '#1565c0', padding: '0.575rem 1.75rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Portal Municipal
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div style={{ padding: '2.5rem 3.75rem', background: '#1a237e' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-touch-screen', titulo: 'Ubicación OMIL',    texto: 'Plaza del Cabildo s/n\n(ex edificio municipalidad)' },
              { icono: 'cl-telephone',    titulo: 'Teléfono',           texto: '+56 35 220 0656' },
              { icono: 'cl-call-info',    titulo: 'WhatsApp',           texto: '+56 9 3959 3561' },
              { icono: 'cl-reading',      titulo: 'Horario',            texto: 'Lunes a Viernes\n08:45 – 14:00 hrs' },
            ].map((col, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`cl ${col.icono}`} style={{ fontSize: '1rem', color: '#fff' }} />
                </div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>{col.titulo}</p>
                  <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{col.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default OMIL;
