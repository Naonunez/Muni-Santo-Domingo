import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ORDENANZAS = [
  {
    titulo: 'Plan Regulador Comunal',
    descripcion: 'Instrumento de planificación territorial de escala comunal que regula el uso del suelo urbano de la comuna.',
    href: 'https://santodomingo.cl/wp-content/uploads/2023/09/descarga-12-ordenanza-PRC-Sto.-Dgo.ACTUALIZADA.pdf',
  },
  {
    titulo: 'Ordenanza Municipal de Soterramiento',
    descripcion: 'Regula el soterramiento de redes de servicios e instalaciones en el territorio comunal.',
    href: 'https://santodomingo.cl/wp-content/uploads/2023/12/Ordenanza-Municipal-de-Soterramiento.pdf',
  },
  {
    titulo: 'Ordenanza de Tenencia Responsable',
    descripcion: 'Establece normas para la tenencia responsable de animales de compañía en la comuna. Decreto Alcaldicio N° 2304.',
    href: 'https://santodomingo.cl/wp-content/uploads/2024/11/Ordenanza-Tenencia-Responsable-_Decreto-Alcaldicio-N%C2%B0-2304.pdf',
  },
  {
    titulo: 'Ordenanza de Medio Ambiente y Protección de la Biodiversidad',
    descripcion: 'Establece normas para la protección del medio ambiente y la biodiversidad en el territorio comunal. Decreto Alcaldicio N° 2435.',
    href: 'https://santodomingo.cl/wp-content/uploads/2024/11/Ordenanza-Municipal-de-Medio-Ambiente-y-Proteccion-de-la-Biodiversidad_-Decreto-Alcaldicio-2435.pdf',
  },
  {
    titulo: 'Ordenanza de Derechos Varios',
    descripcion: 'Ordenanza que regula los derechos municipales de diversa índole. Actualizada el 6 de enero de 2025.',
    href: 'https://santodomingo.cl/wp-content/uploads/2025/03/D-N%C2%B0-003-06-01-2025-1.pdf',
  },
  {
    titulo: 'Ordenanza de Aseo y Ornato',
    descripcion: 'Norma el aseo, ornato y mantención del espacio público en la comuna. Decreto Alcaldicio N° 1802.',
    href: 'https://santodomingo.cl/wp-content/uploads/2023/12/Nueva-Ordenanza-Municipal-Aseo-y-Ornato-Decreto-Alcaldicio-N%C2%B01802_1.pdf',
  },
  {
    titulo: 'Ordenanza de Uso y Aprovechamiento de Playas',
    descripcion: 'Regula el uso y aprovechamiento de las playas del territorio comunal de Santo Domingo.',
    href: 'https://santodomingo.cl/wp-content/uploads/2025/07/ORDENANZA-DE-PLAYAS.pdf',
  },
  {
    titulo: 'Ordenanza sobre Propaganda y Publicidad',
    descripcion: 'Establece las normas para la instalación de publicidad y propaganda en el espacio público comunal.',
    href: 'https://santodomingo.cl/wp-content/uploads/2026/02/2025-03797-DECRETO-PLAN-VISUAL.pdf',
  },
];

const OrdenanzasMunicipales: React.FC = () => (
  <IonPage>
    <IonContent>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
        <img src="/images/Ordenanza.jpeg" alt="Ordenanzas Municipales"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '580px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
            Ordenanzas Municipales
          </h1>
          <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.6 }}>
            Normativas que regulan el funcionamiento y convivencia en la comuna de Santo Domingo.
          </p>
        </div>
      </div>

      {/* Listado */}
      <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Las ordenanzas municipales son normas de carácter general y obligatorio dictadas por la
            Municipalidad de Santo Domingo en el ámbito de su competencia. A continuación se presentan
            los documentos vigentes disponibles para su descarga.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ORDENANZAS.map((o, i) => (
              <div key={i} style={{
                backgroundColor: '#fff', borderRadius: '8px',
                boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                borderLeft: '4px solid #1565c0',
                padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '1.25rem',
              }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0,
                  backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1a237e', margin: '0 0 0.25rem' }}>
                    {o.titulo}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#666', margin: 0, lineHeight: 1.6 }}>
                    {o.descripcion}
                  </p>
                </div>
                <a href={o.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0,
                  padding: '0.5rem 1rem', borderRadius: '4px',
                  backgroundColor: '#1565c0', color: '#fff',
                  textDecoration: 'none', fontSize: '0.8125rem', fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1a237e')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1565c0')}
                >
                  <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} />
                  Descargar
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </IonContent>
  </IonPage>
);

export default OrdenanzasMunicipales;
