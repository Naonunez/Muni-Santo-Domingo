import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SERVICIOS = [
  { titulo: 'Retiro de Podas Voluminosas', desc: 'Retiro domiciliario de ramas y podas de gran tamaño que no caben en la bolsa de basura habitual.', icono: 'cl-reading' },
  { titulo: 'Retiro de Residuos Voluminosos', desc: 'Recolección de residuos de gran volumen como muebles, electrodomésticos y escombros menores.', icono: 'cl-give-letter' },
  { titulo: 'Reciclaje de Vegetación de Jardín', desc: 'Recolección separada de residuos orgánicos de jardín para su posterior compostaje o reutilización.', icono: 'cl-currency-cycle' },
  { titulo: 'Puntos Limpios Rurales', desc: 'Puntos de disposición de residuos habilitados para residentes del sector rural de la comuna.', icono: 'cl-touch-screen' },
  { titulo: 'Reciclaje Domiciliario', desc: 'Programa de retiro en el domicilio de materiales reciclables: papel, cartón, plástico, vidrio y metales.', icono: 'cl-currency-cycle' },
  { titulo: 'Recolección de Residuos Sólidos', desc: 'Servicio regular de recolección de basura domiciliaria en toda la comuna.', icono: 'cl-reading' },
  { titulo: 'Puntos Verdes Santo Domingo', desc: 'Centros de acopio de reciclables distribuidos en distintos sectores de la comuna para uso de la comunidad.', icono: 'cl-document-verified' },
];

const DOCUMENTOS = [
  { titulo: 'Ordenanza Ambiental Local (2017)', desc: 'Norma que regula la protección del medioambiente en el territorio comunal.' },
  { titulo: 'Ordenanza de Aseo y Ornato', desc: 'Reglamenta la limpieza de espacios públicos, veredas y extracción de residuos.' },
  { titulo: 'Ordenanza de Uso y Desarrollo de Playas', desc: 'Normativa específica para el uso sustentable y cuidado de las playas de Santo Domingo.' },
  { titulo: 'Ordenanza de Protección de Humedales', desc: 'Marco regulatorio para la protección de los ecosistemas de humedales de la comuna.' },
  { titulo: 'Política Ambiental Municipal (2023–2026)', desc: 'Documento que define los ejes estratégicos de gestión ambiental para el período 2023–2026.' },
  { titulo: 'Plan de Cambio Climático (2019)', desc: 'Plan de acción comunal frente a los efectos del cambio climático.' },
  { titulo: 'Plan de Educación Ambiental (2023–2026)', desc: 'Estrategia municipal de educación y sensibilización ambiental para la comunidad.' },
  { titulo: 'Guía de Denuncias Ambientales', desc: 'Instructivo para que los vecinos realicen denuncias por infracciones ambientales.' },
];

const EQUIPO = [
  { nombre: 'Mónica González', cargo: 'Directora DIMAO', email: 'mgonzalez@santodomingo.cl' },
  { nombre: 'Adriana Armijo', cargo: 'Asistente Administrativa', email: 'aarmijo@santodomingo.cl' },
  { nombre: 'Manuel Álvarez', cargo: 'Gestión Ambiental', email: null },
  { nombre: 'Macarena Pozo', cargo: 'Residuos, Sustentabilidad y Reciclaje', email: null },
  { nombre: 'Claudio Alarcón', cargo: 'Ornato y Parques', email: null },
  { nombre: 'Humberto Farías', cargo: 'Alumbrado Público', email: null },
];

const FAQS = [
  {
    pregunta: '¿Quién debe mantener la limpieza de las veredas?',
    respuesta: 'Los residentes son responsables de mantener limpias las veredas frente a su propiedad, así como de cuidar la vegetación del antejardín. La municipalidad interviene únicamente en los espacios de uso público.',
  },
  {
    pregunta: '¿Qué ocurre con disputas por árboles en propiedades privadas?',
    respuesta: 'Las disputas sobre árboles o vegetación dentro de propiedades privadas son responsabilidad exclusiva de sus propietarios. La Dirección de Medio Ambiente interviene solo en árboles y vegetación ubicados en espacios públicos.',
  },
  {
    pregunta: '¿En qué horario se pueden realizar trabajos de construcción?',
    respuesta: 'Los trabajos de construcción están permitidos de lunes a viernes entre las 08:00 y las 20:00 hrs, y los sábados entre las 08:00 y las 14:00 hrs. Se pueden autorizar excepciones de carácter técnico.',
  },
];

const DireccionMedioAmbiente: React.FC = () => {
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/Medio_Ambiente.jpeg" alt="Dirección de Medio Ambiente"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '560px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Dirección de Medio Ambiente, Aseo y Ornato
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Promueve la protección del medioambiente mediante programas de educación ambiental, tenencia responsable de mascotas y fiscalización ambiental.
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Servicios</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La DIMAO ofrece una amplia gama de servicios orientados al manejo responsable de residuos, el reciclaje y el cuidado de los espacios públicos de la comuna.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {SERVICIOS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderTop: '3px solid #1565c0', padding: '1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`cl ${s.icono}`} style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 700 }}>{s.titulo}</h3>
                <p style={{ color: '#666', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentos e Instrumentos */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Documentos e Instrumentos</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Ordenanzas, políticas y planes que regulan la gestión ambiental en la comuna de Santo Domingo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {DOCUMENTOS.map((d, i) => (
              <div key={i} style={{ background: '#f5f7fa', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '1.125rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '0.9375rem', color: '#1565c0' }} />
                </div>
                <div>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 700 }}>{d.titulo}</p>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.75rem', lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a href="https://santodomingo.cl/direccion-de-medio-ambiente-aseo-y-ornato/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', border: '2px solid #1565c0', color: '#1565c0', padding: '0.6rem 2rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ver todos los documentos
            </a>
          </div>
        </div>

        {/* Equipo DIMAO */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Equipo DIMAO</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Profesionales y técnicos que conforman la Dirección de Medio Ambiente, Aseo y Ornato.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {EQUIPO.map((p, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.25rem 1.375rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className="cl cl-give-letter" style={{ fontSize: '1rem', color: '#1565c0' }} />
                </div>
                <div>
                  <p style={{ color: '#1a237e', margin: '0 0 0.125rem', fontSize: '0.875rem', fontWeight: 700 }}>{p.nombre}</p>
                  <p style={{ color: '#555', margin: '0 0 0.375rem', fontSize: '0.75rem', lineHeight: 1.4 }}>{p.cargo}</p>
                  {p.email && (
                    <a href={`mailto:${p.email}`} style={{ color: '#1565c0', fontSize: '0.75rem', textDecoration: 'none' }}>{p.email}</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Preguntas Frecuentes</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Respuestas a las consultas más comunes sobre el servicio de aseo, ornato y normativa ambiental comunal.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '860px' }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
                <button
                  onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                  style={{ width: '100%', background: faqAbierta === i ? '#f0f4ff' : '#fff', border: 'none', padding: '1rem 1.375rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                >
                  <span style={{ color: '#1a237e', fontSize: '0.9375rem', fontWeight: 600 }}>{faq.pregunta}</span>
                  <i className={`cl ${faqAbierta === i ? 'cl-m-arrow-up' : 'cl-m-arrow-down'}`} style={{ fontSize: '1rem', color: '#1565c0', flexShrink: 0 }} />
                </button>
                {faqAbierta === i && (
                  <div style={{ padding: '0 1.375rem 1rem', backgroundColor: '#f0f4ff' }}>
                    <p style={{ color: '#444', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{faq.respuesta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div style={{ padding: '2.5rem 3.75rem', background: '#1a237e' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-touch-screen" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Dirección</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>Av. Santa Teresa N°1, Santo Domingo</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-reading" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Horario de Atención</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>Lunes a Viernes: 08:45 – 14:00 hrs<br />Sábados: 09:30 – 13:30 hrs</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-telephone" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Emergencias 24/7</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>+56 32 238 1603<br />+56 35 220 4200</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default DireccionMedioAmbiente;
