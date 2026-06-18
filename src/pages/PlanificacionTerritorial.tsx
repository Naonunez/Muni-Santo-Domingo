import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SECCIONES = [
  {
    titulo: 'A. Instrumento de Origen',
    docs: [
      { label: 'Publicación en el Diario Oficial con Ordenanza', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/D.O.-odenanza-prc-Santo-Domingo_11.11.2003.pdf' },
      { label: 'Memoria Explicativa',                            href: 'https://santodomingo.cl/wp-content/uploads/2025/10/Memoria-PRCSD.pdf' },
      { label: 'Plano — PRCSD 01 Lámina A',                     href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-01_-lamina-A-_-PRC-Santo-Domingo.pdf' },
      { label: 'Plano — PRCSD 01 Lámina B',                     href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-01_-lamina-B-_-PRC-Santo-Domingo.pdf' },
      { label: 'Plano — PRCSD 02',                              href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-02-_-PRC-Santo-Domingo.pdf' },
      { label: 'Plano — PRCSD 03',                              href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-03-_-PRC-Santo-Domingo.pdf' },
    ],
  },
  {
    titulo: 'B. Modificaciones (Enmiendas)',
    docs: [
      { label: 'Enmienda 1 (2006)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_21.10.2006.-pag-7.pdf' },
      { label: 'Enmienda 2 (2007)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_10.02.2007.-pag-12.pdf' },
      { label: 'Enmienda 3 (2008)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_05.01.2008.pdf' },
      { label: 'Enmienda 4 (2008)', href: 'https://drive.google.com/file/d/1_y4wBmO6AIQx8tADWkgqip_uBSaQmXPE/view?usp=drive_link' },
      { label: 'Enmienda 5 (2008)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_21.08.2008.pdf' },
      { label: 'Enmienda 6 (2013)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_18.04.2013.pdf' },
      { label: 'Enmienda 7 (2022)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Enmienda-N%C2%B07-al-PRC-SAnto-Domingo_-D.O.-19.07.2022.pdf' },
    ],
  },
  {
    titulo: 'Proceso de Actualización del Plan Regulador Comunal',
    docs: [
      { label: '1. Etapa Preparación y/o Inicio',                        href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Decreto-alcaldicio-N%C2%B0-1768-Inicio-Proceso-Evaluacion-Ambiental-117.pdf' },
      { label: '2. Informa Aprobación IO por Autoridad',                  href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Minuta-de-Acuerdos-Sesion-Ordinaria-N%C2%B0-137-16-de-septiembre-de-20202347.pdf' },
      { label: '3. Acuerdo de Concejo Municipal',                         href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Minuta-Sesion-Extra-Ordinaria-N%C2%B0-018-de-fecha-miercoles-24-de-agosto-de-2022.pdf' },
      { label: '4. Publicación Anteproyecto e Inicio Consulta Pública',   href: 'https://santodomingo.cl/municipio/#pladeco' },
      { label: '5. Fecha para Someter Anteproyecto para Aprobación',      href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Oficio-2024-0228.pdf' },
      { label: '6. Aprobación de Anteproyecto por Autoridad',             href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Acta-Sesion-Extraordinaria-N%C2%B0-029-10-mayo-2024-v.2-1.pdf' },
    ],
  },
];

const InstrumentosPlanificacion: React.FC = () => (
  <IonPage>
    <IonContent>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
        <img src="/images/Plan_Regulador.jpeg" alt="Instrumentos de Planificación Territorial"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '580px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
            Instrumentos de Planificación Territorial
          </h1>
          <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.6 }}>
            Plan Regulador Comunal vigente, sus modificaciones y el proceso de actualización.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a237e', margin: '0 0 1.5rem' }}>
            Plan Regulador Comunal Vigente
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {SECCIONES.map((s, si) => (
              <div key={si} style={{
                backgroundColor: '#fff', borderRadius: '8px',
                boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                borderLeft: '4px solid #1565c0',
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '50%', flexShrink: 0,
                    backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className="cl cl-document-verified" style={{ fontSize: '1rem', color: '#1565c0' }} />
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1a237e', margin: 0 }}>
                    {s.titulo}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {s.docs.map((d, di) => (
                    <a key={di} href={d.href} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: '0.375rem',
                      padding: '0.4rem 0.875rem', borderRadius: '4px',
                      backgroundColor: '#f0f4ff', color: '#1565c0',
                      textDecoration: 'none', fontSize: '0.8125rem', fontWeight: 500,
                      border: '1px solid #c5d3f0',
                    }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#dce6ff')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f0f4ff')}
                    >
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem', flexShrink: 0 }} />
                      {d.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </IonContent>
  </IonPage>
);

export default InstrumentosPlanificacion;
