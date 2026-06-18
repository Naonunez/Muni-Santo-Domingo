import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ── helpers ── */
const DocLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{
    display: 'flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.5rem 0.75rem', borderRadius: '4px',
    backgroundColor: '#f0f4ff', color: '#1565c0',
    textDecoration: 'none', fontSize: '0.8125rem', fontWeight: 500,
    border: '1px solid #c5d3f0', transition: 'background 0.15s',
  }}
    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#dce6ff')}
    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f0f4ff')}
  >
    <i className="cl cl-document-verified" style={{ fontSize: '0.875rem', flexShrink: 0 }} />
    {label}
  </a>
);

const SeccionTitulo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a237e', margin: '1.5rem 0 0.75rem', borderBottom: '2px solid #e0e7ff', paddingBottom: '0.375rem' }}>
    {children}
  </h3>
);

const DocGrid: React.FC<{ docs: { label: string; href: string }[] }> = ({ docs }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
    {docs.map(d => <DocLink key={d.label} href={d.href} label={d.label} />)}
  </div>
);

/* ── Acordeón de etapa ── */
const Etapa: React.FC<{ numero: string; titulo: string; estado: string; children: React.ReactNode }> = ({ numero, titulo, estado, children }) => {
  const [abierto, setAbierto] = useState(false);
  const completada = estado === 'Completada';
  return (
    <div style={{ border: '1px solid #e0e7ff', borderRadius: '8px', overflow: 'hidden', marginBottom: '0.75rem' }}>
      <button onClick={() => setAbierto(!abierto)} style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '1rem 1.25rem', background: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <div style={{
          width: '2rem', height: '2rem', borderRadius: '50%', flexShrink: 0,
          backgroundColor: completada ? '#1565c0' : '#e8eaf6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: completada ? '#fff' : '#5c6bc0', fontWeight: 700, fontSize: '0.875rem',
        }}>{numero}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1a237e' }}>{titulo}</div>
          <div style={{ fontSize: '0.75rem', color: completada ? '#2e7d32' : '#f57c00', fontWeight: 600 }}>{estado}</div>
        </div>
        <i className={`cl cl-m-arrow-${abierto ? 'up' : 'down'}`} style={{ fontSize: '1rem', color: '#5c6bc0' }} />
      </button>
      {abierto && (
        <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid #e0e7ff', backgroundColor: '#fafbff' }}>
          {children}
        </div>
      )}
    </div>
  );
};

/* ── Página ── */
const PlanRegulador: React.FC = () => (
  <IonPage>
    <IonContent>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
        <img src="/images/Plan_Regulador.jpeg" alt="Plan Regulador Comunal"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '580px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
            Plan Regulador Comunal
          </h1>
          <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, lineHeight: 1.6 }}>
            Instrumento de planificación territorial de escala comunal y de carácter normativo,
            definido por la Ley General de Urbanismo y Construcciones.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>

        {/* Descripción */}
        <div style={{ maxWidth: '860px', margin: '0 auto 3rem', backgroundColor: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', borderTop: '3px solid #1565c0' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#1a237e', margin: '0 0 1rem' }}>¿Qué es el PRC?</h2>
          <p style={{ fontSize: '0.9375rem', color: '#444', lineHeight: 1.8, margin: 0 }}>
            El Plan Regulador Comunal (PRC) es el instrumento de planificación territorial de escala comunal
            con carácter normativo. Planifica el territorio urbano comunal considerando el desarrollo
            ambiental y una visión de futuro a 20 años. Su elaboración es función privativa del Municipio
            y sus competencias recaen exclusivamente sobre suelo urbano.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* PRC Vigente */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#1a237e', margin: '0 0 1.25rem' }}>PRC Vigente</h2>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1.5rem 2rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#555', margin: '0 0 1rem' }}>
              <strong>Aprobación:</strong> Resolución Afecta N° 31-4-266 — 29 de noviembre de 2003<br />
              <strong>Publicación:</strong> Diario Oficial, 11 de noviembre de 2003
            </p>

            <SeccionTitulo>Documentos PRC Vigente</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Publicación D.O. con Ordenanza', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/D.O.-odenanza-prc-Santo-Domingo_11.11.2003.pdf' },
              { label: 'Memoria Explicativa',             href: 'https://santodomingo.cl/wp-content/uploads/2025/10/Memoria-PRCSD.pdf' },
            ]} />

            <SeccionTitulo>Planos PRC Vigente</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Lámina A',  href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-01_-lamina-A-_-PRC-Santo-Domingo.pdf' },
              { label: 'Lámina B',  href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-01_-lamina-B-_-PRC-Santo-Domingo.pdf' },
              { label: 'PRCSD 02', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-02-_-PRC-Santo-Domingo.pdf' },
              { label: 'PRCSD 03', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRCSD-03-_-PRC-Santo-Domingo.pdf' },
            ]} />

            <SeccionTitulo>Enmiendas (Modificaciones)</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Enmienda 1 (2006)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_21.10.2006.-pag-7.pdf' },
              { label: 'Enmienda 2 (2007)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_10.02.2007.-pag-12.pdf' },
              { label: 'Enmienda 3 (2008)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_05.01.2008.pdf' },
              { label: 'Enmienda 4 (2008)', href: 'https://drive.google.com/file/d/1_y4wBmO6AIQx8tADWkgqip_uBSaQmXPE/view' },
              { label: 'Enmienda 5 (2008)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_21.08.2008.pdf' },
              { label: 'Enmienda 6 (2013)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/PRC_enmienda_18.04.2013.pdf' },
              { label: 'Enmienda 7 (2022)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Enmienda-N%C2%B07-al-PRC-SAnto-Domingo_-D.O.-19.07.2022.pdf' },
            ]} />

            <SeccionTitulo>Ordenanza</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Ordenanza PRC (actualizada)', href: 'https://santodomingo.cl/wp-content/uploads/2023/09/descarga-12-ordenanza-PRC-Sto.-Dgo.ACTUALIZADA.pdf' },
            ]} />
          </div>

          {/* Proceso de actualización */}
          <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#1a237e', margin: '0 0 0.5rem' }}>Proceso de Actualización del PRC</h2>
          <p style={{ fontSize: '0.875rem', color: '#555', margin: '0 0 1.25rem', lineHeight: 1.7 }}>
            La municipalidad se encuentra actualizando el PRC vigente (aprobado en 2003) debido a cambios
            en los patrones de habitación y desarrollo urbano de localidades como El Convento y San Enrique,
            que transitaron de ser balnearios de segunda residencia a residencia permanente.
          </p>

          <Etapa numero="1" titulo="Imagen Objetivo" estado="Completada">
            <p style={{ fontSize: '0.875rem', color: '#555', margin: '1rem 0 0.5rem', lineHeight: 1.7 }}>
              Consultas públicas realizadas en 2020 (audiencias virtuales: 29 sep. y 9 oct.) y 2022
              (audiencias presenciales: 13 may. Complejo Deportivo Juan Vera Velázquez,
              24 may. Sede Vecinal San Enrique, 27 may. Sede Vecinal El Convento).
            </p>
            <SeccionTitulo>Documentos Imagen Objetivo</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Presentaciones',                     href: 'https://santodomingo.cl/wp-content/uploads/2023/09/PRCSD_Presentacion-Imagen-Objetivo_Sitio-Web_V2-1.pdf' },
              { label: 'Lámina Vialidad',                    href: 'https://santodomingo.cl/wp-content/uploads/2023/11/Lamina-Vialidad-Sto.Domingo.pdf' },
              { label: 'Lámina Zonificación',                href: 'https://santodomingo.cl/wp-content/uploads/2023/11/Lamina-Zonificacion-Sto.Domingo.pdf' },
              { label: 'Lámina El Convento',                 href: 'https://santodomingo.cl/wp-content/uploads/2023/11/Lamina-El-Convento.pdf' },
              { label: 'Láminas San Enrique',                href: 'https://santodomingo.cl/wp-content/uploads/2023/11/Laminas-San-Enrique.pdf' },
              { label: 'Informe Sistematización Obs.',       href: 'https://santodomingo.cl/wp-content/uploads/2023/09/Informe-Sistematizacion-de-Observaciones_PRCSD-sin-datos-sensibles.pdf' },
            ]} />
            <SeccionTitulo>Documentos Técnicos EAE</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Informe Ambiental Complementario',   href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_a-Informe-Ambiental-Complementario_ET6_IAC-comprimido.pdf' },
              { label: 'Memoria Explicativa',                href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_b-Memoria-Explicativa_ET6_IAC.pdf' },
              { label: 'Ordenanza Preliminar',               href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_c-Ordenanza-Preliminar_ET6_IA.pdf' },
              { label: 'Estudio de Riesgo y Prot. Ambiental',href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_dEstudio-de-Riesgo-y-Proteccion-Ambiental_ET6_IA.pdf' },
              { label: 'Estudio de Capacidad Vial',          href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_e-Estudio-de-Capacidad-Vial_ET6_IA.pdf' },
              { label: 'Estudio de Factibilidad Sanitaria',  href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_f-Estudio-de-Factibilidad-Sanitaria_ET6_IA.pdf' },
              { label: 'Estudio de Equipamiento',            href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_g-Estudio-de-Equipamiento_ET6_IA.pdf' },
              { label: 'Estudio de Patrimonio',              href: 'https://santodomingo.cl/wp-content/uploads/2023/11/PRCSD_h-Estudio-de-Patrimonio_ET6_IA.pdf' },
            ]} />
            <SeccionTitulo>Acuerdos de Concejo</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Sesión Extraordinaria N°018 (24 ago 2022)', href: 'https://santodomingo.cl/wp-content/uploads/2023/09/Tabla-Sesion-Extra-Ordinaria-N%C2%B0-018-24-de-agosto-2022.pdf' },
              { label: 'Sesión Ordinaria N°137 (16 sep 2020)',      href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Minuta-de-Acuerdos-Sesion-Ordinaria-N%C2%B0-137-16-de-septiembre-de-20202347.pdf' },
            ]} />
          </Etapa>

          <Etapa numero="2" titulo="Evaluación Ambiental Estratégica (EAE)" estado="Completada">
            <SeccionTitulo>Documentos EAE</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Inicio Proceso EAE',          href: 'https://drive.google.com/file/d/1e-lVc4xAOuyUmq944GZRBpXF7pAEW44a/view' },
              { label: 'Decreto Alcaldicio N°1768',   href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Decreto-alcaldicio-N%C2%B0-1768-Inicio-Proceso-Evaluacion-Ambiental-117.pdf' },
            ]} />
          </Etapa>

          <Etapa numero="3" titulo="Anteproyecto" estado="Completada">
            <p style={{ fontSize: '0.875rem', color: '#555', margin: '1rem 0 0.5rem', lineHeight: 1.7 }}>
              Consulta pública: 12 de diciembre de 2023 al 11 de enero de 2024.<br />
              Audiencias públicas: 5 dic. (Escuela El Convento), 7 dic. (Colegio Bicentenario People Help People),
              11 dic. (Sede Vecinal San Enrique).
            </p>
            <SeccionTitulo>Documentos Anteproyecto</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Plano Zonificación',              href: 'https://drive.google.com/file/d/1XkMG4n3yucgeaGFQlrR5uHbjx0Pk2EoD/view' },
              { label: 'Plano Vialidad',                  href: 'https://drive.google.com/file/d/1PMKm4FLBJh2h34XznAkTbPUYCpo50dNJ/view' },
              { label: 'Plano El Convento',               href: 'https://drive.google.com/file/d/1Ij3iRFpul2aemwsZjUvgU3NcePAnPwE4/view' },
              { label: 'Plano San Enrique',               href: 'https://drive.google.com/file/d/1jUF8gauiqNgACaD6cknNrECqHwBYw9Dk/view' },
              { label: 'Ordenanza',                       href: 'https://drive.google.com/file/d/1VYiK4RKq2Xd8BHUDRtmZYoJMT1b8Wlx3/view' },
              { label: 'Memoria',                         href: 'https://drive.google.com/file/d/1RJ3p13Q9OvZemZUEtvwvsJ3sA3ZLjJax/view' },
              { label: 'Informe Ambiental',               href: 'https://drive.google.com/file/d/1E1VaurqXV7ZJ8OxLIQtf7QkgGh9glDXL/view' },
              { label: 'Estudio de Riesgo y Protección',  href: 'https://drive.google.com/file/d/1TJTwsqT7D7ZTwTYwg33NyF6XNljnJIVK/view' },
              { label: 'Estudio Vial',                    href: 'https://drive.google.com/file/d/1coLCNtSs_NcNfOK2xI4X0GM6-VGJ14X_/view' },
              { label: 'Factibilidad Sanitaria',          href: 'https://drive.google.com/file/d/1omDCUafnGvEmNGsFenta0pMWrdFv6i6t/view' },
              { label: 'Equipamiento',                    href: 'https://drive.google.com/file/d/15BIZ5q60x5rc7AsZUTrEaEN2BLI5Azzt/view' },
              { label: 'Patrimonio',                      href: 'https://drive.google.com/file/d/1LH4Aq1sWvTYNwtSBVFzWq3ki2YORhd5n/view' },
            ]} />
            <SeccionTitulo>Acuerdos de Concejo</SeccionTitulo>
            <DocGrid docs={[
              { label: 'Aprobación Anteproyecto (10 mayo 2024)', href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Acta-Sesion-Extraordinaria-N%C2%B0-029-10-mayo-2024-v.2-1.pdf' },
              { label: 'Oficio 2024-0228',                       href: 'https://santodomingo.cl/wp-content/uploads/2025/11/Oficio-2024-0228.pdf' },
            ]} />
          </Etapa>

          <Etapa numero="4" titulo="Aprobación SEREMI MINVU" estado="En tramitación">
            <p style={{ fontSize: '0.875rem', color: '#555', margin: '1rem 0', lineHeight: 1.7 }}>
              El proyecto fue aprobado por el Concejo Municipal en mayo de 2024 y se encuentra actualmente
              en proceso de revisión y aprobación por la Secretaría Regional Ministerial del MINVU.
            </p>
          </Etapa>

        </div>
      </div>

      <Footer />
    </IonContent>
  </IonPage>
);

export default PlanRegulador;
