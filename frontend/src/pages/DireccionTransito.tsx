import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DireccionTransito: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Dirección de Tránsito"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Dirección de Tránsito
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Responsable de emitir licencias de conducir y permisos de circulación, optimizando los recursos viales y la señalización en la comuna.
            </p>
          </div>
        </div>

        {/* Servicios principales */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Servicios</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La Dirección de Tránsito gestiona los trámites viales de los vecinos de Santo Domingo, incluyendo la obtención y renovación de licencias y el pago de permisos de circulación.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>

            {/* Licencia de Conducir */}
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.75rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-touch-screen" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '1.0625rem', fontWeight: 700 }}>Licencia de Conducir</h3>
              </div>
              <p style={{ color: '#555', margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
                Trámite para obtener, renovar o duplicar una licencia de conducir. El agendamiento se realiza en línea, por teléfono o por correo electrónico.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="cl cl-telephone" style={{ fontSize: '0.8125rem', color: '#1565c0' }} />
                  </div>
                  <span style={{ color: '#444', fontSize: '0.8125rem' }}>+56 32 238 1668</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="cl cl-give-letter" style={{ fontSize: '0.8125rem', color: '#1565c0' }} />
                  </div>
                  <a href="mailto:licencias@santodomingo.cl" style={{ color: '#1565c0', fontSize: '0.8125rem', textDecoration: 'none' }}>licencias@santodomingo.cl</a>
                </div>
              </div>
              <a href="https://santodomingo.cl/direccion-de-transito/" target="_blank" rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Agendar hora
              </a>
            </div>

            {/* Permiso de Circulación */}
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.75rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '1.0625rem', fontWeight: 700 }}>Permiso de Circulación</h3>
              </div>
              <p style={{ color: '#555', margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
                Autorización anual obligatoria para circular con un vehículo en la vía pública. Para obtenerlo o renovarlo no debes tener multas de tránsito pendientes.
              </p>

              {/* Períodos de pago */}
              <div style={{ background: '#f5f7fa', borderRadius: '6px', padding: '0.875rem 1rem' }}>
                <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.8125rem' }}>Períodos de pago</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['Febrero', 'Marzo', 'Julio'].map((mes) => (
                    <span key={mes} style={{ backgroundColor: '#e8edf8', color: '#1565c0', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {mes}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <a href="https://consultamultas.srcei.cl" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', border: '1.5px solid #1565c0', color: '#1565c0', padding: '0.45rem 1rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>
                  <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Consultar multas pendientes
                </a>
                <a href="https://www.e-com.cl" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>
                  <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Pagar en línea
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Recursos útiles */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Recursos Útiles</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Plataformas externas que necesitas para completar tus trámites de tránsito.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              {
                titulo: 'Consulta de Multas de Tránsito',
                desc: 'Verifica si tienes infracciones pendientes antes de solicitar o renovar tu permiso de circulación.',
                href: 'https://consultamultas.srcei.cl',
                icono: 'cl-reading',
              },
              {
                titulo: 'Pago de Permiso de Circulación',
                desc: 'Portal de pago en línea habilitado para el pago del permiso de circulación de tu vehículo.',
                href: 'https://www.e-com.cl',
                icono: 'cl-currency-cycle',
              },
              {
                titulo: 'Registro Civil — Licencias',
                desc: 'Información oficial del Servicio de Registro Civil e Identificación sobre licencias de conducir.',
                href: 'https://www.srcei.cl',
                icono: 'cl-document-verified',
              },
              {
                titulo: 'Directorio de Tránsito Municipal',
                desc: 'Contacto directo con la Dirección de Tránsito de la Municipalidad de Santo Domingo.',
                href: 'mailto:licencias@santodomingo.cl',
                icono: 'cl-give-letter',
              },
            ].map((r, i) => (
              <div key={i} style={{ background: '#f5f7fa', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '1.125rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className={`cl ${r.icono}`} style={{ fontSize: '0.9375rem', color: '#1565c0' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 700 }}>{r.titulo}</p>
                  <p style={{ color: '#666', margin: '0 0 0.625rem', fontSize: '0.75rem', lineHeight: 1.5 }}>{r.desc}</p>
                  <a href={r.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                    <i className="cl cl-arrow-right" style={{ fontSize: '0.625rem' }} /> Acceder
                  </a>
                </div>
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
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Teléfono Licencias</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>+56 32 238 1668</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default DireccionTransito;
