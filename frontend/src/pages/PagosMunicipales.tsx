import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PAGOS = [
  {
    titulo: 'Patentes Comerciales',
    depto: 'Dirección de Administración y Finanzas',
    desc: 'Pago en línea del derecho municipal para ejercer actividades comerciales en la comuna. Requiere registro previo con RUT en el portal de pagos.',
    icono: 'cl-document-verified',
    online: true,
    periodos: [],
    docs: [],
    nota: null,
    contacto: null,
    link: 'https://ww9.e-com.cl/Pagos/PatentesComerciales/Pago%20Patentes/onlinev3/inicio.asp?codMunic=44',
  },
  {
    titulo: 'Permiso de Circulación',
    depto: 'Dirección de Tránsito',
    desc: 'Renovación y pago del permiso anual obligatorio para circular con vehículos en la vía pública.',
    icono: 'cl-touch-screen',
    online: true,
    periodos: ['Febrero', 'Marzo', 'Julio'],
    docs: [
      'Documentación de importación aduanera (si corresponde)',
      'Seguro obligatorio vigente hasta el año siguiente',
      'Certificado de Homologación Individual (C.H.I.)',
      'Revisión técnica y análisis de emisiones',
      'Permiso de circulación anterior',
      'Documentación de cambio de nombre (si corresponde)',
    ],
    nota: null,
    contacto: null,
    link: 'https://ww9.e-com.cl/Pagos/PermisoCirculacion/renovacion/ecomv3/vista/?id=44&plebcas=12&portal=%2728/06/2023%27&html=70&opc=1',
  },
  {
    titulo: 'Derechos de Aseo',
    depto: 'Dirección de Administración y Finanzas',
    desc: 'Pago del derecho municipal que financia el servicio de recolección, transporte y disposición de residuos domiciliarios. Se paga ingresando el número de ROL de la propiedad.',
    icono: 'cl-currency-cycle',
    online: true,
    periodos: ['Mayo', 'Julio', 'Octubre', 'Noviembre'],
    docs: [],
    nota: 'Para consultar el ROL de tu propiedad contáctate con: aseomunicipal@santodomingo.cl · (32) 238 1637 · (32) 238 1647',
    contacto: 'aseomunicipal@santodomingo.cl',
    link: 'https://ww9.e-com.cl/Pagos/DerechodeAseo/onlinev4/inicio.asp?codmunic=44',
  },
  {
    titulo: 'Patentes Profesionales',
    depto: 'Dirección de Administración y Finanzas — Rentas Municipales',
    desc: 'Pago de patente para el ejercicio de actividades profesionales independientes. Plazo límite: 30 de noviembre de cada año.',
    icono: 'cl-reading',
    online: true,
    periodos: [],
    docs: [
      'Verificar multas pendientes al 30 de noviembre del año anterior',
      'Vehículos usados: permiso anterior, certificado de homologación, seguro obligatorio y padrón',
      'Vehículos nuevos: factura de compra, inscripción registro civil, homologación, seguro vigente hasta el 31 de marzo siguiente',
    ],
    nota: 'Vehículos sin circulación: requieren pago de derecho municipal y declaración jurada. Plazo: 30 de noviembre.',
    contacto: null,
    link: 'https://ww9.e-com.cl/Pagos/PermisoCirculacion/renovacion/ecomv3/vista/?id=44&plebcas=12&portal=%2715/06/2023%27&html=70&opc=1',
  },
  {
    titulo: 'Patentes de Alcoholes',
    depto: 'Dirección de Administración y Finanzas — Rentas Municipales',
    desc: 'Pago del derecho municipal para la venta y expendio de bebidas alcohólicas. Por el momento este pago no está disponible en línea.',
    icono: 'cl-give-letter',
    online: false,
    periodos: [],
    docs: [],
    nota: 'Dirígete directamente a la Dirección de Administración y Finanzas en Av. Santa Teresa N°1.',
    contacto: null,
    link: null,
  },
];

const PagosMunicipales: React.FC = () => {
  const [docsOpen, setDocsOpen] = useState<number | null>(null);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Pagos Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Pagos Municipales
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Realiza el pago de patentes, derechos y permisos municipales de forma completamente en línea.
            </p>
          </div>
        </div>

        {/* Barra informativa */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-touch-screen',      label: 'Portal de pagos',    valor: 'e-com.cl' },
              { icono: 'cl-document-verified', label: 'Pagos disponibles',  valor: '4 tipos en línea · 1 presencial' },
              { icono: 'cl-give-letter',        label: 'Consultas',          valor: 'aseomunicipal@santodomingo.cl' },
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

        {/* Pagos */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Tipos de Pago</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Selecciona el tipo de pago que necesitas realizar. La mayoría está disponible en línea a través del portal e-com.cl.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {PAGOS.map((pago, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderLeft: `4px solid ${pago.online ? '#1565c0' : '#e65100'}`, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>

                {/* Cabecera */}
                <div style={{ padding: '1.375rem 1.5rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: pago.online ? '#e8edf8' : '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <i className={`cl ${pago.icono}`} style={{ fontSize: '1.125rem', color: pago.online ? '#1565c0' : '#e65100' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <h3 style={{ color: '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 800 }}>{pago.titulo}</h3>
                      {pago.online ? (
                        <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 700 }}>
                          En línea
                        </span>
                      ) : (
                        <span style={{ backgroundColor: '#fff3e0', color: '#e65100', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 700 }}>
                          Solo presencial
                        </span>
                      )}
                    </div>
                    <p style={{ color: '#777', margin: '0 0 0.375rem', fontSize: '0.75rem' }}>{pago.depto}</p>
                    <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{pago.desc}</p>
                  </div>
                </div>

                {/* Períodos / docs */}
                <div style={{ padding: '1rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {pago.periodos.length > 0 && (
                    <div>
                      <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.8125rem' }}>Períodos de pago</p>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {pago.periodos.map((p) => (
                          <span key={p} style={{ backgroundColor: '#e8edf8', color: '#1565c0', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {pago.docs.length > 0 && (
                    <div>
                      <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <i className="cl cl-document-verified" style={{ fontSize: '0.8125rem', color: '#1565c0' }} /> Documentos requeridos
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {(docsOpen === i ? pago.docs : pago.docs.slice(0, 3)).map((doc, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#1565c0', marginTop: '7px', flexShrink: 0 }} />
                            <p style={{ color: '#444', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>{doc}</p>
                          </div>
                        ))}
                        {pago.docs.length > 3 && (
                          <button onClick={() => setDocsOpen(docsOpen === i ? null : i)}
                            style={{ background: 'none', border: 'none', color: '#1565c0', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: '0.125rem 0', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <i className={`cl ${docsOpen === i ? 'cl-m-arrow-up' : 'cl-m-arrow-down'}`} style={{ fontSize: '0.75rem' }} />
                            {docsOpen === i ? 'Ver menos' : `Ver ${pago.docs.length - 3} más`}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {pago.nota && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <i className="cl cl-call-info" style={{ fontSize: '0.875rem', color: '#1565c0', flexShrink: 0, marginTop: '1px' }} />
                      <p style={{ color: '#555', margin: 0, fontSize: '0.75rem', lineHeight: 1.6 }}>{pago.nota}</p>
                    </div>
                  )}
                </div>

                {/* Pie */}
                <div style={{ padding: '0.875rem 1.5rem', backgroundColor: '#f5f7fa', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'flex-end' }}>
                  {pago.link ? (
                    <a href={pago.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.45rem 1.125rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Pagar en línea
                    </a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="cl cl-touch-screen" style={{ fontSize: '0.875rem', color: '#e65100' }} />
                      <span style={{ color: '#e65100', fontSize: '0.8125rem', fontWeight: 600 }}>Pago solo en oficina municipal</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
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

export default PagosMunicipales;
