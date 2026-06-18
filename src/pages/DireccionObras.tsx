import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMULARIOS_MINVU = [
  { titulo: 'Obras de menor cuantía', desc: 'Formularios para intervenciones menores en edificaciones existentes.' },
  { titulo: 'Permiso de edificación', desc: 'Solicitud de permiso para nuevas construcciones.' },
  { titulo: 'Subdivisión y urbanización de terrenos', desc: 'Trámites de división predial con obras de urbanización.' },
  { titulo: 'División predial y condominios', desc: 'Formularios para división de predios y regímenes de copropiedad.' },
  { titulo: 'Certificaciones y solicitudes varias', desc: 'Certificado de informes previos, número municipal y otros.' },
  { titulo: 'Regularización de vivienda social', desc: 'Regularización de edificaciones de vivienda de menor valor.' },
  { titulo: 'Levantamientos de edificaciones', desc: 'Documentación técnica de edificaciones existentes sin permiso.' },
  { titulo: 'Construcción en zona de catástrofe', desc: 'Formularios para obras en zonas declaradas de catástrofe.' },
  { titulo: 'Permiso de vivienda unifamiliar', desc: 'Procedimiento simplificado para casas de hasta 140 m².' },
  { titulo: 'Regularización de microempresa y equipamiento comunitario', desc: 'Regularización de inmuebles destinados a microempresas.' },
  { titulo: 'Instalación de antenas de telecomunicaciones', desc: 'Permiso para instalación de antenas y torres de señal.' },
  { titulo: 'Regularización Ley N° 20.703', desc: 'Formularios para regularización bajo la Ley de Copropiedad inmobiliaria.' },
  { titulo: 'Regularización otras categorías', desc: 'Otros procedimientos de regularización según normativa vigente.' },
];

const RECURSOS = [
  { titulo: 'Ordenanza del PRC y Plano de Zonificación', desc: 'Plan Regulador Comunal vigente con planos y ordenanza de uso de suelo.', ruta: '/instrumentos-planificacion', interno: true },
  { titulo: 'Ley General de Urbanismo y Construcciones', desc: 'Texto actualizado de la LGUC y Ordenanza General de Urbanismo.', href: 'https://www.bcn.cl/leychile/navegar?idNorma=13560' },
  { titulo: 'Tasaciones y Contribuciones SII', desc: 'Consulta de avalúos fiscales y planos de contribuciones del Servicio de Impuestos Internos.', href: 'https://www.sii.cl' },
  { titulo: 'Plataforma SmartDOM', desc: 'Seguimiento del estado de expedientes ingresados a la Dirección de Obras.', href: 'https://santodomingo.smartdom.cl/#/seguimiento-expediente' },
];

const DireccionObras: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Dirección de Obras"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Dirección de Obras
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Velar por el cumplimiento de la Ley General de Urbanismo y Construcciones, del Plan Regulador Comunal y de las ordenanzas correspondientes.
            </p>
          </div>
        </div>

        {/* Trámites en Línea */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Trámites en Línea</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La Dirección de Obras dispone de plataformas digitales para el ingreso y seguimiento de expedientes de manera remota.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {/* Plataforma ingreso */}
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.75rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-touch-screen" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '1rem', fontWeight: 700 }}>Ingreso de Expedientes</h3>
              </div>
              <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>
                Presenta tu solicitud de permiso o trámite de forma digital a través de la plataforma habilitada por la municipalidad.
              </p>
              <a href="https://santodomingo.smartdom.cl" target="_blank" rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ir a SmartDOM
              </a>
            </div>

            {/* Seguimiento */}
            <div style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', padding: '1.75rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="cl cl-reading" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <h3 style={{ color: '#1a237e', margin: 0, fontSize: '1rem', fontWeight: 700 }}>Seguimiento de Expedientes</h3>
              </div>
              <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>
                Consulta el estado de avance de tus expedientes ingresados a la Dirección de Obras en tiempo real.
              </p>
              <a href="https://santodomingo.smartdom.cl/#/seguimiento-expediente" target="_blank" rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ver estado
              </a>
            </div>
          </div>
        </div>

        {/* Formularios MINVU */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Formularios MINVU</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            La oficina dispone de los formularios oficiales del Ministerio de Vivienda y Urbanismo (MINVU) para los distintos tipos de trámites de edificación y urbanización.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {(expanded ? FORMULARIOS_MINVU : FORMULARIOS_MINVU.slice(0, 6)).map((f, i) => (
              <div key={i} style={{ background: '#f5f7fa', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '1.125rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '0.9375rem', color: '#1565c0' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 700 }}>{f.titulo}</p>
                  <p style={{ color: '#666', margin: '0 0 0.625rem', fontSize: '0.75rem', lineHeight: 1.5 }}>{f.desc}</p>
                  <a href="https://www.minvu.gob.cl/tramites/formularios/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                    <i className="cl cl-arrow-right" style={{ fontSize: '0.625rem' }} /> Ver formulario
                  </a>
                </div>
              </div>
            ))}
          </div>
          {!expanded && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => setExpanded(true)}
                style={{ background: 'none', border: '2px solid #1565c0', color: '#1565c0', padding: '0.6rem 2rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                <i className="cl cl-m-arrow-down" style={{ marginRight: '0.4rem' }} />
                Ver todos los formularios ({FORMULARIOS_MINVU.length})
              </button>
            </div>
          )}
          {expanded && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={() => setExpanded(false)}
                style={{ background: 'none', border: '2px solid #1565c0', color: '#1565c0', padding: '0.6rem 2rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
                <i className="cl cl-m-arrow-up" style={{ marginRight: '0.4rem' }} />
                Mostrar menos
              </button>
            </div>
          )}
        </div>

        {/* Recursos e Información Municipal */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Información Municipal</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Documentos y recursos de referencia para la realización de trámites en la Dirección de Obras.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {RECURSOS.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '6px', borderLeft: '4px solid #1565c0', padding: '1.25rem 1.375rem', display: 'flex', alignItems: 'flex-start', gap: '0.875rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '0.9375rem', color: '#1565c0' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#1a237e', margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 700 }}>{r.titulo}</p>
                  <p style={{ color: '#666', margin: '0 0 0.625rem', fontSize: '0.75rem', lineHeight: 1.5 }}>{r.desc}</p>
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.625rem' }} /> Ver recurso
                    </a>
                  ) : (
                    <a href={r.ruta}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.3rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.625rem' }} /> Ver en el sitio
                    </a>
                  )}
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

export default DireccionObras;
