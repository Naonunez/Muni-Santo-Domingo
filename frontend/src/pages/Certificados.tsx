import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CERTIFICADOS = [
  {
    titulo: 'Certificado de Afectación a Utilidad Pública',
    depto: 'Dirección de Obras Municipales',
    desc: 'Certifica si una propiedad está afecta a utilidad pública conforme al Art. 1.4.4 de la Ordenanza General de Urbanismo y Construcciones.',
    icono: 'cl-document-verified',
    online: true,
    docs: [
      'Dirección de la propiedad',
      'Número de ROL tributario',
    ],
    nota: null,
    link: 'https://santodomingo.smartdom.cl/#/inicio',
  },
  {
    titulo: 'Certificado de Bien Nacional de Uso Público',
    depto: 'Dirección de Obras Municipales',
    desc: 'Acredita que un predio pertenece a la nación, se encuentra en territorio chileno y no tiene propietario privado.',
    icono: 'cl-document-verified',
    online: true,
    docs: [],
    nota: null,
    link: 'https://santodomingo.smartdom.cl/#/inicio',
  },
  {
    titulo: 'Certificado de Informes Previos',
    depto: 'Dirección de Obras Municipales',
    desc: 'Identifica la zona en que se ubica el predio y las normas urbanísticas aplicables según el Plan Regulador Comunal. El predio debe encontrarse en zona urbana.',
    icono: 'cl-reading',
    online: true,
    docs: [
      'Dirección de la propiedad',
      'Número de ROL tributario',
      'El predio debe estar ubicado en zona urbana',
    ],
    nota: null,
    link: 'https://santodomingo.smartdom.cl/#/inicio',
  },
  {
    titulo: 'Certificado de Número Municipal',
    depto: 'Dirección de Obras Municipales',
    desc: 'Acredita la numeración municipal asignada a una propiedad según los registros de la Dirección de Obras.',
    icono: 'cl-touch-screen',
    online: true,
    docs: [],
    nota: null,
    link: 'https://santodomingo.smartdom.cl/#/inicio',
  },
  {
    titulo: 'Certificado de Predio Rural',
    depto: 'Dirección de Obras Municipales',
    desc: 'Certifica que una propiedad se encuentra fuera del límite urbano según el Plan Regulador Comunal vigente.',
    icono: 'cl-document-verified',
    online: true,
    docs: [
      'Certificado de tasación simple de la propiedad',
      'Escritura de la propiedad',
    ],
    nota: null,
    link: 'https://santodomingo.smartdom.cl/#/inicio',
  },
  {
    titulo: 'Informe de Deuda de Derechos de Aseo',
    depto: 'Dirección de Administración y Finanzas — Rentas Municipales',
    desc: 'Certifica si una propiedad tiene deudas pendientes por concepto de derechos de aseo municipal.',
    icono: 'cl-give-letter',
    online: false,
    docs: [
      'Número de ROL tributario de la propiedad',
    ],
    nota: 'Atención presencial en Av. Santa Teresa N°1, 1° piso.',
    link: null,
  },
];

const Certificados: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Certificados Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Certificados Municipales
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Solicita certificados de propiedad, urbanismo y deuda municipal de forma en línea o presencial.
            </p>
          </div>
        </div>

        {/* Barra informativa */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-touch-screen',      label: 'Portal en línea',       valor: 'santodomingo.smartdom.cl' },
              { icono: 'cl-document-verified', label: 'Certificados',           valor: '5 en línea · 1 presencial' },
              { icono: 'cl-reading',           label: 'Unidad emisora',         valor: 'Dirección de Obras Municipales' },
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

        {/* Certificados */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Certificados Disponibles</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La mayoría de los certificados se solicitan en línea a través de la plataforma SmartDOM. Revisa los requisitos de cada uno antes de postular.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {CERTIFICADOS.map((cert, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderLeft: `4px solid ${cert.online ? '#1565c0' : '#e65100'}`, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>

                {/* Cabecera */}
                <div style={{ padding: '1.375rem 1.5rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: cert.online ? '#e8edf8' : '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <i className={`cl ${cert.icono}`} style={{ fontSize: '1.125rem', color: cert.online ? '#1565c0' : '#e65100' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 800 }}>{cert.titulo}</h3>
                      {cert.online ? (
                        <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 700 }}>En línea</span>
                      ) : (
                        <span style={{ backgroundColor: '#fff3e0', color: '#e65100', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 700 }}>Solo presencial</span>
                      )}
                    </div>
                    <p style={{ color: '#777', margin: '0 0 0.375rem', fontSize: '0.75rem' }}>{cert.depto}</p>
                    <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{cert.desc}</p>
                  </div>
                </div>

                {/* Requisitos / nota */}
                <div style={{ padding: '1rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cert.docs.length > 0 && (
                    <div>
                      <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <i className="cl cl-document-verified" style={{ fontSize: '0.8125rem', color: '#1565c0' }} /> Requisitos
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {cert.docs.map((doc, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#1565c0', marginTop: '7px', flexShrink: 0 }} />
                            <p style={{ color: '#444', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>{doc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {cert.nota && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <i className="cl cl-call-info" style={{ fontSize: '0.875rem', color: cert.online ? '#1565c0' : '#e65100', flexShrink: 0, marginTop: '1px' }} />
                      <p style={{ color: '#555', margin: 0, fontSize: '0.75rem', lineHeight: 1.6 }}>{cert.nota}</p>
                    </div>
                  )}
                </div>

                {/* Pie */}
                <div style={{ padding: '0.875rem 1.5rem', backgroundColor: '#f5f7fa', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'flex-end' }}>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.45rem 1.125rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Solicitar en línea
                    </a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="cl cl-touch-screen" style={{ fontSize: '0.875rem', color: '#e65100' }} />
                      <span style={{ color: '#e65100', fontSize: '0.8125rem', fontWeight: 600 }}>Solo en oficina municipal</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Acceso directo SmartDOM */}
          <div style={{ marginTop: '2rem', background: '#fff', borderRadius: '8px', padding: '1.5rem 1.75rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', borderLeft: '4px solid #1565c0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="cl cl-touch-screen" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
              </div>
              <div>
                <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.9375rem', fontWeight: 700 }}>Portal SmartDOM</p>
                <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem' }}>Todos los certificados en línea se gestionan a través de la plataforma SmartDOM de la Municipalidad de Santo Domingo.</p>
              </div>
            </div>
            <a href="https://santodomingo.smartdom.cl/#/inicio" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.625rem 1.75rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
              <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ir a SmartDOM
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div style={{ padding: '2.5rem 3.75rem', background: '#1a237e' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icono: 'cl-touch-screen', titulo: 'Dirección',           texto: 'Av. Santa Teresa N°1, Santo Domingo' },
              { icono: 'cl-reading',      titulo: 'Horario de Atención', texto: 'Lunes a Viernes: 08:45 – 14:00 hrs\nSábados: 09:30 – 13:30 hrs' },
              { icono: 'cl-telephone',    titulo: 'Emergencias 24/7',    texto: '+56 32 238 1603\n+56 35 220 4200' },
            ].map((col, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
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

export default Certificados;
