import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SUBSIDIOS = [
  {
    titulo: 'Subsidio Único Familiar (SUF)',
    desc: 'Beneficio económico del Estado orientado al apoyo de familias con hijos menores de edad en situación de vulnerabilidad.',
    icono: 'cl-give-letter',
    poblacion: 'Familias con hijos menores',
    requisitos: [
      'Certificado de nacimiento del menor',
      'Fotocopia del carné de control de niño sano vigente (menores de 6 años)',
      'Certificado de matrícula (mayores de 6 años)',
      'Fotocopia de cédula de identidad de la madre (para subsidio maternal)',
    ],
    nota: null,
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
    pendiente: false,
  },
  {
    titulo: 'Aporte Previsional Solidario (APS)',
    desc: 'Beneficio estatal para personas que cotizaron en AFP durante su vida activa y cuyo ahorro puede financiar una pensión base igual o inferior al umbral máximo.',
    icono: 'cl-currency-cycle',
    poblacion: '60% de menores ingresos',
    requisitos: [
      'Pertenecer al 60% de la población de menores ingresos a nivel nacional',
      'Haber cotizado en una AFP durante la vida laboral activa',
      'Que el ahorro previsional pueda financiar una pensión base igual o inferior al umbral máximo establecido',
    ],
    nota: null,
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
    pendiente: false,
  },
  {
    titulo: 'Pensión Básica Solidaria (PBS)',
    desc: 'Pensión del Estado para adultos mayores sin derecho a pensión en ningún sistema previsional, pertenecientes al 60% más vulnerable.',
    icono: 'cl-reading',
    poblacion: 'Adultos mayores de 65 años',
    requisitos: [
      'Tener 65 años o más al momento de la solicitud',
      'No tener derecho a pensión en ningún otro sistema previsional',
      'Puntaje de Focalización Previsional igual o inferior a 1.206',
      'Acreditar 20 años de residencia en Chile (continuos o discontinuos, desde los 20 años)',
      'Haber vivido en el país al menos 4 de los últimos 5 años',
    ],
    nota: null,
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
    pendiente: false,
  },
  {
    titulo: 'Subsidio por Discapacidad Mental para Menores de 18 Años',
    desc: 'Beneficio para familias con menores que presentan discapacidad mental, orientado a apoyar su cuidado y desarrollo.',
    icono: 'cl-document-verified',
    poblacion: 'Menores de 18 años',
    requisitos: [
      'El menor debe tener diagnóstico de discapacidad mental acreditado',
      'Agendar hora para atención en la Dirección de Desarrollo Comunitario',
    ],
    nota: 'Para agendar hora: +56 32 238 1669',
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
    pendiente: false,
  },
  {
    titulo: 'Subsidio de Agua Potable y Alcantarillado',
    desc: 'Apoyo económico para que familias vulnerables puedan costear el servicio de agua potable y alcantarillado en su domicilio.',
    icono: 'cl-touch-screen',
    poblacion: 'Jefes de hogar RSH',
    requisitos: [
      'Residir en la comuna de Santo Domingo',
      'Estar inscrito/a en el Registro Social de Hogares (RSH)',
      'Ser jefe/a de hogar',
      'Estar al día en los pagos del servicio o presentar convenio de pago vigente',
    ],
    nota: null,
    link: 'https://santodomingo.cerofilas.gob.cl',
    linkLabel: 'Postular en línea',
    pendiente: false,
  },
  {
    titulo: 'Bonos de Gas',
    desc: 'Beneficio para familias de menores ingresos destinado a subsidiar el costo del gas de uso domiciliario.',
    icono: 'cl-currency-cycle',
    poblacion: null,
    requisitos: [],
    nota: null,
    link: null,
    linkLabel: null,
    pendiente: true,
  },
];

const Subsidios: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/direccion_de_obras.jpeg" alt="Subsidios Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Subsidios Municipales
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Programas de apoyo económico del Estado disponibles para los vecinos de Santo Domingo según su situación socioeconómica.
            </p>
          </div>
        </div>

        {/* Barra informativa */}
        <div style={{ backgroundColor: '#1565c0', padding: '1.25rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icono: 'cl-document-verified', label: 'Programas disponibles', valor: '6 tipos de subsidios' },
              { icono: 'cl-reading',           label: 'Postulación',           valor: 'En línea y presencial' },
              { icono: 'cl-give-letter',       label: 'Contacto',              valor: 'contacto@santodomingo.cl' },
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

        {/* Subsidios */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', marginBottom: '0.5rem', fontSize: '1.375rem' }}>Programas de Subsidios</h2>
          <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Consulta los requisitos de cada programa y postula en línea a través del portal municipal o de forma presencial en la municipalidad.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {SUBSIDIOS.map((sub, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', borderLeft: `4px solid ${sub.pendiente ? '#bdbdbd' : '#1565c0'}`, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}>

                {/* Cabecera */}
                <div style={{ padding: '1.375rem 1.5rem', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: sub.pendiente ? '#f5f5f5' : '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <i className={`cl ${sub.icono}`} style={{ fontSize: '1.125rem', color: sub.pendiente ? '#9e9e9e' : '#1565c0' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.375rem' }}>
                      <h3 style={{ color: sub.pendiente ? '#9e9e9e' : '#1a237e', margin: 0, fontSize: '0.9375rem', fontWeight: 800 }}>{sub.titulo}</h3>
                      {sub.pendiente && (
                        <span style={{ backgroundColor: '#f5f5f5', color: '#757575', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 600, border: '1px solid #e0e0e0' }}>
                          Información próximamente
                        </span>
                      )}
                      {sub.poblacion && !sub.pendiente && (
                        <span style={{ backgroundColor: '#e8edf8', color: '#1565c0', padding: '0.15rem 0.625rem', borderRadius: '20px', fontSize: '0.6875rem', fontWeight: 600 }}>
                          {sub.poblacion}
                        </span>
                      )}
                    </div>
                    <p style={{ color: sub.pendiente ? '#9e9e9e' : '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{sub.desc}</p>
                  </div>
                </div>

                {/* Requisitos */}
                {sub.requisitos.length > 0 && (
                  <div style={{ padding: '1.125rem 1.5rem', flex: 1 }}>
                    <p style={{ color: '#1a237e', fontWeight: 700, margin: '0 0 0.625rem', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <i className="cl cl-document-verified" style={{ fontSize: '0.8125rem', color: '#1565c0' }} /> Requisitos
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {sub.requisitos.map((req, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#1565c0', marginTop: '7px', flexShrink: 0 }} />
                          <p style={{ color: '#444', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{req}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pie */}
                {!sub.pendiente && (
                  <div style={{ padding: '0.875rem 1.5rem', backgroundColor: '#f5f7fa', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {sub.nota && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <i className="cl cl-call-info" style={{ fontSize: '0.8125rem', color: '#1565c0', flexShrink: 0 }} />
                        <p style={{ color: '#555', margin: 0, fontSize: '0.75rem' }}>{sub.nota}</p>
                      </div>
                    )}
                    {sub.link && (
                      <a href={sub.link} target="_blank" rel="noopener noreferrer"
                        style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.45rem 1.125rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
                        <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> {sub.linkLabel}
                      </a>
                    )}
                  </div>
                )}
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

export default Subsidios;
