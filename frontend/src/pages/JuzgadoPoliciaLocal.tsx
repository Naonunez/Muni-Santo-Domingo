import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TRAMITES = [
  { titulo: 'Descargos', desc: 'Presenta circunstancias que puedan reducir la sanción o derivar en el sobreseimiento de la causa.', icono: 'cl-document-verified' },
  { titulo: 'Notificación Electrónica', desc: 'Solicita recibir las notificaciones del tribunal por correo electrónico según Ley 21.241. Dirígete a jpl@santodomingo.cl', icono: 'cl-give-letter' },
  { titulo: 'Entrega de Vehículos Retenidos', desc: 'Trámite para recuperar un vehículo retenido. Requiere documentación del propietario o poder notarial y padrón del vehículo.', icono: 'cl-touch-screen' },
  { titulo: 'Exhorto', desc: 'Para causas ocurridas fuera de Santo Domingo. Permite realizar la audiencia de forma remota en el juzgado del domicilio.', icono: 'cl-reading' },
  { titulo: 'Nómina de Testigos', desc: 'Requerida para presentar declaraciones de testigos. Debe ingresarse antes de las 12:00 hrs del día anterior a la audiencia.', icono: 'cl-document-verified' },
  { titulo: 'Prescripción de Multas', desc: 'Solicita el sobreseimiento de multas impagas. El plazo varía según el tipo de infracción.', icono: 'cl-currency-cycle' },
  { titulo: 'Impugnación de Idoneidad Moral', desc: 'Solicitud de reconsideración ante denegación de licencia de conducir. Plazo: 5 días hábiles desde la notificación.', icono: 'cl-document-verified' },
  { titulo: 'Renovación de Licencia Provisional', desc: 'Renovable mientras la licencia esté retenida por causa pendiente y se encuentre vigente.', icono: 'cl-touch-screen' },
  { titulo: 'Reposición', desc: 'Solicitud de reconsideración o reducción de la sentencia. Plazo: 30 días hábiles desde la notificación.', icono: 'cl-reading' },
  { titulo: 'Copias de Expediente', desc: 'Obtén copias de los documentos y actuaciones de tu causa.', icono: 'cl-document-verified' },
];

const COMPETENCIAS = [
  'Ley de Tránsito (N° 18.290)',
  'Protección al Consumidor (N° 19.496)',
  'Urbanismo y Construcción',
  'Bebidas Alcohólicas (N° 19.925)',
  'Impuestos y Ordenanzas Municipales',
  'Seguridad Privada',
  'Protección Forestal',
  'Elecciones',
  'Copropiedad Inmobiliaria',
];

const INFRACCIONES = [
  { nivel: 'Gravísimas', color: '#c62828', bg: '#ffebee', monto: '1,5 – 3 UTM', suspension: '5 a 45 días de suspensión de licencia' },
  { nivel: 'Graves', color: '#e65100', bg: '#fff3e0', monto: '1 – 1,5 UTM', suspension: 'Según reincidencia' },
  { nivel: 'Menos Graves', color: '#f9a825', bg: '#fffde7', monto: '0,5 – 1 UTM', suspension: '—' },
  { nivel: 'Leves', color: '#2e7d32', bg: '#e8f5e9', monto: '0,2 – 0,5 UTM', suspension: '—' },
];

const EQUIPO = [
  { nombre: 'Pilar Herrera', cargo: 'Jueza', email: null, telefono: null },
  { nombre: 'Claudia Urra', cargo: 'Secretaria Abogada', email: 'curra@santodomingo.cl', telefono: '+56 32 238 1603' },
  { nombre: 'Susana Pardo', cargo: 'Actuaria', email: 'spardo@santodomingo.cl', telefono: '+56 32 238 1696' },
  { nombre: 'Teresita Córdova', cargo: 'Actuaria', email: 'tcordova@santodomingo.cl', telefono: '+56 32 238 1696' },
];

const JuzgadoPoliciaLocal: React.FC = () => {
  const [tramitesExpanded, setTramitesExpanded] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Juzgado de Policía Local"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '540px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Juzgado de Policía Local
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Tribunal especial que administra justicia en materias municipales bajo la supervisión de la Corte de Apelaciones de Valparaíso.
            </p>
          </div>
        </div>

        {/* Horarios destacados */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-reading', label: 'Atención al público', valor: 'Lunes a Viernes: 08:45 – 14:00 hrs' },
              { icono: 'cl-touch-screen', label: 'Días de audiencia', valor: 'Lunes, Miércoles y Viernes: 10:00 – 13:00 hrs' },
              { icono: 'cl-give-letter', label: 'Notificaciones', valor: 'jpl@santodomingo.cl' },
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

        {/* Competencias */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Materias de Competencia</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            El Juzgado de Policía Local conoce y resuelve las infracciones establecidas por las siguientes leyes y materias:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.875rem' }}>
            {COMPETENCIAS.map((c, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '0.875rem 1.125rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '0.8125rem', color: '#1565c0' }} />
                </div>
                <p style={{ color: '#1a237e', margin: 0, fontSize: '0.8125rem', fontWeight: 600 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trámites disponibles */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Trámites Disponibles</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Documentos y solicitudes que puedes presentar ante el Juzgado de Policía Local.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {(tramitesExpanded ? TRAMITES : TRAMITES.slice(0, 6)).map((t, i) => (
              <div key={i} style={{ background: '#f5f7fa', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '1.125rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className={`cl ${t.icono}`} style={{ fontSize: '0.9375rem', color: '#1565c0' }} />
                </div>
                <div>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 700 }}>{t.titulo}</p>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.75rem', lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {!tramitesExpanded && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => setTramitesExpanded(true)}
                style={{ background: 'none', border: '2px solid #1565c0', color: '#1565c0', padding: '0.6rem 2rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                <i className="cl cl-m-arrow-down" style={{ marginRight: '0.4rem' }} />
                Ver todos los trámites ({TRAMITES.length})
              </button>
            </div>
          )}
          {tramitesExpanded && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => setTramitesExpanded(false)}
                style={{ background: 'none', border: '2px solid #1565c0', color: '#1565c0', padding: '0.6rem 2rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                <i className="cl cl-m-arrow-up" style={{ marginRight: '0.4rem' }} />
                Mostrar menos
              </button>
            </div>
          )}
        </div>

        {/* Multas e infracciones de tránsito */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Multas e Infracciones de Tránsito</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Clasificación de infracciones según la Ley de Tránsito N° 18.290 y sus montos en Unidades Tributarias Mensuales (UTM).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            {INFRACCIONES.map((inf, i) => (
              <div key={i} style={{ background: inf.bg, borderRadius: '8px', borderTop: `3px solid ${inf.color}`, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ color: inf.color, fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{inf.nivel}</span>
                <span style={{ color: '#1a237e', fontSize: '1.125rem', fontWeight: 900 }}>{inf.monto}</span>
                <span style={{ color: '#555', fontSize: '0.75rem', lineHeight: 1.5 }}>{inf.suspension}</span>
              </div>
            ))}
          </div>

          {/* Descuento y pago */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-currency-cycle" style={{ fontSize: '1rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 700 }}>Descuento por Pago Oportuno</h3>
              </div>
              <p style={{ color: '#555', fontSize: '0.8125rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                Para infracciones <strong>graves, menos graves y leves</strong>: paga el <strong>75% del valor</strong> (25% de descuento) dentro de los primeros 5 días desde la citación.
              </p>
              <p style={{ color: '#888', fontSize: '0.75rem', lineHeight: 1.5, margin: 0 }}>
                No aplica en infracciones gravísimas ni en accidentes con lesionados. La aceptación del descuento implica renuncia al derecho a audiencia.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.5rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-reading" style={{ fontSize: '1rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 700 }}>Consecuencias del No Pago</h3>
              </div>
              <p style={{ color: '#555', fontSize: '0.8125rem', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                <strong>Citación personal:</strong> el no pago genera orden de arresto.<br />
                <strong>Parte empadronado:</strong> la multa queda anotada en el Registro de Multas de Tránsito No Pagadas, impidiendo renovar el permiso de circulación.
              </p>
              <p style={{ color: '#888', fontSize: '0.75rem', lineHeight: 1.5, margin: 0 }}>
                El pago debe realizarse en la Tesorería Municipal dentro de 5 días desde la notificación.
              </p>
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Equipo</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Personal del Juzgado de Policía Local de Santo Domingo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {EQUIPO.map((p, i) => (
              <div key={i} style={{ background: '#f5f7fa', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.25rem' }}>
                  <i className="cl cl-give-letter" style={{ fontSize: '1rem', color: '#1565c0' }} />
                </div>
                <p style={{ color: '#1a237e', margin: 0, fontSize: '0.875rem', fontWeight: 700 }}>{p.nombre}</p>
                <p style={{ color: '#555', margin: 0, fontSize: '0.75rem' }}>{p.cargo}</p>
                {p.email && <a href={`mailto:${p.email}`} style={{ color: '#1565c0', fontSize: '0.75rem', textDecoration: 'none', wordBreak: 'break-all' }}>{p.email}</a>}
                {p.telefono && <p style={{ color: '#666', margin: 0, fontSize: '0.75rem' }}>{p.telefono}</p>}
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
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>Av. Santa Teresa N°1, 1° piso<br />Santo Domingo</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-reading" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Horario de Atención</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>Lunes a Viernes: 08:45 – 14:00 hrs<br />Audiencias: Lun, Mié y Vie 10:00 – 13:00</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-telephone" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Teléfonos</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>Secretaría: +56 32 238 1603<br />Actuarias: +56 32 238 1696</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default JuzgadoPoliciaLocal;
