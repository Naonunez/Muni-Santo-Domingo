import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BECAS = [
  {
    titulo: 'Beca Presidente de la República',
    desc: 'Aporte económico del Estado para alumnos de educación media y superior de escasos recursos con buen rendimiento académico.',
    monto: null,
    periodo: null,
    entidad: 'JUNAEB',
    color: '#1565c0',
    requisitos: [
      'Nota final mínima: 6,0',
      'Pertenecer al 60% de estudiantes de menor renta y mayor vulnerabilidad',
      'Estar matriculado/a en educación media o superior',
    ],
    documentos: [
      'Certificado de notas finales',
      'Certificado de alumno regular',
      'Liquidaciones de sueldo oct–dic del jefe de hogar y todos los integrantes que perciban ingresos',
      'Fotocopia de cédula de identidad del postulante',
      'Identificación del grupo familiar',
      'Certificados de alumno regular de hermanos/as (si aplica)',
      'Certificados médicos de familiares con enfermedades (si aplica)',
    ],
    nota: 'La municipalidad orienta y gestiona las postulaciones, pero es JUNAEB quien determina la selección final y la asignación de cupos.',
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
  },
  {
    titulo: 'Beca Residencia Familiar Estudiantil',
    desc: 'Programa que facilita alojamiento y alimentación a estudiantes rurales que deben trasladarse para continuar sus estudios en otro lugar.',
    monto: null,
    periodo: null,
    entidad: 'JUNAEB',
    color: '#1565c0',
    requisitos: [
      'Residir en sectores rurales o de difícil acceso',
      'Estar matriculado/a en 7° u 8° básico o en enseñanza media científico-humanista',
      'Asistir a establecimiento municipal, particular subvencionado o de administración delegada',
      'Necesidad de traslado para continuar estudios',
      'Edad mínima: 12 años al momento de la postulación',
      'Estar inscrito/a en el Registro Social de Hogares',
    ],
    documentos: [
      'Certificado de residencia',
      'Certificado de alumno regular',
      'Confirmación de familia de acogida identificada',
      'Fotocopia de cédula de identidad',
      'Cartolas del Registro Social de Hogares',
      'Formulario de postulación completado en www.junaeb.cl (sección Residencias Estudiantiles)',
    ],
    nota: null,
    link: 'https://www.junaeb.cl',
    linkLabel: 'Postular en JUNAEB',
  },
  {
    titulo: 'Beca Transporte Escolar',
    desc: 'Apoyo económico mensual para financiar el transporte de estudiantes rurales que se trasladan diariamente a establecimientos educacionales.',
    monto: '$40.000',
    periodo: 'Marzo – Noviembre',
    entidad: 'DDCO Municipal',
    color: '#1565c0',
    requisitos: [
      'Haber utilizado el transporte escolar el año anterior con subsidio municipal',
      'Residir en Zona Rural Extrema de Santo Domingo',
      'Estar matriculado/a en un establecimiento educacional urbano o rural',
    ],
    documentos: [
      'Certificado de alumno regular',
      'Cartola del Registro Social de Hogares',
    ],
    nota: 'Los documentos deben presentarse en la Dirección de Desarrollo Comunitario (DDCO) de la municipalidad.',
    link: null,
    linkLabel: null,
  },
];

const BecasMunicipales: React.FC = () => {
  const [openDocs, setOpenDocs] = useState<number | null>(null);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Becas Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Becas Municipales
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Programas de apoyo económico para estudiantes de Santo Domingo que buscan continuar y financiar su educación.
            </p>
          </div>
        </div>

        {/* Barra informativa */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-document-verified', label: 'Programas disponibles', valor: '3 tipos de becas' },
              { icono: 'cl-reading', label: 'Entidades gestoras', valor: 'JUNAEB y DDCO Municipal' },
              { icono: 'cl-give-letter', label: 'Contacto', valor: 'contacto@santodomingo.cl' },
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

        {/* Becas */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Programas de Becas</h2>
            <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: 0, lineHeight: 1.7 }}>
              Postula a los programas de apoyo escolar disponibles para los estudiantes de la comuna de Santo Domingo.
            </p>
          </div>

          {BECAS.map((beca, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '8px', borderLeft: '4px solid #1565c0', boxShadow: '0 1px 6px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
              {/* Cabecera */}
              <div style={{ padding: '1.5rem 1.75rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <i className="cl cl-reading" style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#1a237e', margin: '0 0 0.375rem', fontSize: '1.0625rem', fontWeight: 800 }}>{beca.titulo}</h3>
                    <p style={{ color: '#555', margin: 0, fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '560px' }}>{beca.desc}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
                  {beca.monto && (
                    <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '0.3rem 0.875rem', borderRadius: '20px', fontSize: '0.8125rem', fontWeight: 700 }}>
                      {beca.monto}/mes
                    </span>
                  )}
                  {beca.periodo && (
                    <span style={{ backgroundColor: '#e8edf8', color: '#1565c0', padding: '0.3rem 0.875rem', borderRadius: '20px', fontSize: '0.8125rem', fontWeight: 600 }}>
                      {beca.periodo}
                    </span>
                  )}
                  <span style={{ backgroundColor: '#f5f7fa', color: '#555', padding: '0.3rem 0.875rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, border: '1px solid #e0e0e0' }}>
                    {beca.entidad}
                  </span>
                </div>
              </div>

              {/* Cuerpo: requisitos + documentos */}
              <div style={{ padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Requisitos */}
                <div>
                  <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.75rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="cl cl-document-verified" style={{ fontSize: '0.875rem', color: '#1565c0' }} /> Requisitos
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {beca.requisitos.map((req, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#1565c0', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ color: '#444', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{req}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentos */}
                <div>
                  <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.75rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="cl cl-give-letter" style={{ fontSize: '0.875rem', color: '#1565c0' }} /> Documentos requeridos
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {(openDocs === i ? beca.documentos : beca.documentos.slice(0, 3)).map((doc, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#1565c0', marginTop: '7px', flexShrink: 0 }} />
                        <p style={{ color: '#444', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{doc}</p>
                      </div>
                    ))}
                    {beca.documentos.length > 3 && (
                      <button onClick={() => setOpenDocs(openDocs === i ? null : i)}
                        style={{ background: 'none', border: 'none', color: '#1565c0', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: '0.125rem 0', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <i className={`cl ${openDocs === i ? 'cl-m-arrow-up' : 'cl-m-arrow-down'}`} style={{ fontSize: '0.75rem' }} />
                        {openDocs === i ? 'Ver menos' : `Ver ${beca.documentos.length - 3} más`}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta */}
              {(beca.nota || beca.link) && (
                <div style={{ padding: '1rem 1.75rem', backgroundColor: '#f5f7fa', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  {beca.nota && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flex: 1 }}>
                      <i className="cl cl-call-info" style={{ fontSize: '0.875rem', color: '#1565c0', flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ color: '#555', margin: 0, fontSize: '0.75rem', lineHeight: 1.6 }}>{beca.nota}</p>
                    </div>
                  )}
                  {beca.link && (
                    <a href={beca.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.5rem 1.375rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
                      <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> {beca.linkLabel}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
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
                <i className="cl cl-give-letter" style={{ fontSize: '1rem', color: '#fff' }} />
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.875rem' }}>Contacto</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.8125rem', lineHeight: 1.5 }}>contacto@santodomingo.cl</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default BecasMunicipales;
