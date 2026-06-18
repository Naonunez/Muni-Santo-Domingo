import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const concejales = [
  { nombre: 'Felipe Soto Abarca', desc: 'Estilista con más de 25 años de trayectoria en la comuna de Santo Domingo.', email: 'fsoto@santodomingo.cl', img: '/images/felipe.jpeg' },
  { nombre: 'Carla González León', desc: 'Funcionaria pública. Ingeniera Comercial, Psicóloga y MBA por la Universidad Europea de Madrid.', email: 'cgonzalezl@santodomingo.cl', img: '/images/carla.jpeg' },
  { nombre: 'Fabiola Contreras Fuentes', desc: 'Dirigenta social por más de 10 años, madre de dos hijos y emprendedora.', email: 'fcontreras@santodomingo.cl', img: '/images/fabiola.jpeg' },
  { nombre: 'Germán Mayo De Goyeneche', desc: 'Ingeniero Civil industrial de la Universidad Católica, empresario, padre de cinco hijos.', email: 'gmayog@santodomingo.cl', img: '/images/german.jpeg' },
  { nombre: 'Claudio Núñez Agüero', desc: 'Funcionario público.', email: 'cnunez@santodomingo.cl', img: '/images/claudio.jpeg' },
  { nombre: 'Cristina Huerta Farías', desc: 'Administradora de empresas. Madre de dos hijos. Dirigenta social de larga trayectoria.', email: 'chuerta@santodomingo.cl', img: '/images/cristina.jpeg' },
];

const integrantes = [
  { nombre: 'Modesta Jeria Liberona', org: 'Junta de Vecinos Bucalemu.' },
  { nombre: 'Jorge Del Real Armas', org: 'Junta de Vecinos El Bosque.' },
  { nombre: 'Germán Correa Hidalgo', org: 'Junta de Vecinos El Convento.' },
  { nombre: 'Carlos Correa Álvarez', org: 'Junta de Vecinos El Vergel.' },
  { nombre: 'Jorge Marín Cerda', org: 'Junta de Vecinos Cuadrante Los Cipreses.' },
  { nombre: 'Catherine Ríos Reyes', org: 'Junta de Vecinos La Parroquia.' },
  { nombre: 'José Luis Salgado Villablanca', org: 'Junta de Vecinos Las Viñas.' },
  { nombre: 'Pedro Luis Gutiérrez Delgado', org: 'Junta de Vecinos Santa María del Mar.' },
  { nombre: 'Jorge Carreño Farías', org: 'Agrupación de Jardineros Santo Domingo.' },
  { nombre: 'Alejandra Andrea González González', org: 'Agrupación Turística de Santo Domingo.' },
  { nombre: 'Luis Adelio Gutiérrez Urrea', org: 'Comité de Seguridad Alto los Molles.' },
  { nombre: 'Carmen Gloria Rojas Bouey', org: 'Club de Adulto Mayor Intihuatana.' },
  { nombre: 'Raúl Bazan Ried', org: 'Corporación de Desarrollo de Rocas de Santo Domingo.' },
  { nombre: 'Juan Francisco Campino Bunster', org: 'Fundación Parque de la ciencia.' },
  { nombre: 'Nicolás Vicuña Fernández', org: 'Fundación Parque Tricao.' },
  { nombre: 'Ricardo Antonio Pardo Carrioli', org: 'Cámara de comercio detallista de la comuna de Santo Domingo.' },
];

const funcionesCOSOC = [
  'Pronunciarse, en el mes de marzo de cada año, sobre la cuenta pública que el Alcalde efectúe de su gestión anual y de la marcha general de la Municipalidad, según lo dispuesto en el artículo 67 de la Ley Nº 18.695, Orgánica Constitucional de Municipalidades.',
  'Pronunciarse, en el mes de marzo de cada año, sobre la cobertura y eficiencia de los servicios municipales, y las materias que hayan sido establecidas por el Consejo.',
  'Formular, cuando corresponda, observaciones a los informes que el Alcalde le presentará sobre los presupuestos de inversión, plan comunal de desarrollo y modificaciones al plan regulador.',
  'Informar al Alcalde su opinión acerca de las propuestas de asignación o modificación de la denominación de los bienes municipales.',
  'Solicitar al Concejo Municipal pronunciarse, a más tardar el 31 de marzo de cada año, sobre las materias de relevancia local.',
  'Informar al Concejo Municipal cuando éste deba pronunciarse respecto de modificaciones al presente Reglamento.',
  'Solicitar al Alcalde, previa ratificación de los dos tercios de los concejales en ejercicio, la realización de un plebiscito comunal.',
  'Interponer recurso de reclamación en contra de las resoluciones u omisiones ilegales de la Municipalidad.',
  'Elegir, de entre sus miembros, a su Vice Presidente, y Emitir su opinión sobre todas las materias.',
  'Reunirse por iniciativa del Presidente del Consejo o por 1/3 de los consejeros para estudiar o debatir materias de interés general.',
];

const Autoridades: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '420px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/autoridades.jpeg"
            alt="Autoridades Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.72) 40%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Autoridades Municipales
            </h1>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', opacity: 0.9 }}>
              Conozca nuestro municipio y autoridades.
            </p>
          </div>
        </div>

        {/* Alcalde */}
        <div style={{ backgroundColor: '#fff', padding: '4rem 5rem' }}>
          <div style={{
            maxWidth: '960px', margin: '0 auto',
            display: 'flex', gap: '4rem', alignItems: 'flex-start',
          }}>

            {/* Imagen */}
            <div style={{ flex: '0 0 auto', position: 'relative' }}>
              <img
                src="/images/alcalde.jpeg"
                alt="Alcalde Fernando Rodríguez Larraín"
                style={{
                  width: '280px', height: '360px',
                  objectFit: 'cover', objectPosition: 'center center',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(21,101,192,0.18)',
                  display: 'block',
                }}
              />
              {/* Badge sobre la imagen */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#1565c0', color: '#fff',
                padding: '6px 18px', borderRadius: '20px',
                fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap',
                letterSpacing: '0.5px',
              }}>
                Alcalde 2024 – 2028
              </div>
            </div>

            {/* Texto */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '0.75rem', fontWeight: 700, color: '#1565c0',
                letterSpacing: '1.5px', textTransform: 'uppercase',
                margin: '0 0 0.5rem',
              }}>
                Autoridad Municipal
              </p>

              <h2 style={{
                fontSize: '2.25rem', fontWeight: 900, lineHeight: 1.1,
                color: '#1a237e', margin: '0 0 0.25rem',
              }}>
                Alcalde
              </h2>

              <h3 style={{
                fontSize: '1.25rem', fontWeight: 700, color: '#222',
                margin: '0 0 1.25rem', lineHeight: 1.3,
              }}>
                Fernando Rodríguez Larraín
              </h3>

              <div style={{ width: '48px', height: '3px', backgroundColor: '#1565c0', borderRadius: '2px', marginBottom: '1.25rem' }} />

              <p style={{ color: '#444', margin: '0 0 0.6rem', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                <strong>Profesión:</strong> Ingeniero Agrónomo.
              </p>
              <p style={{ color: '#444', margin: '0 0 0.6rem', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                <strong>Trayectoria:</strong> Alcalde de Santo Domingo durante los años 2008 al 2021 y por el periodo actual 2024 – 2028.
              </p>
              <p style={{ color: '#444', margin: '0 0 1.75rem', fontSize: '0.9375rem', lineHeight: 1.75 }}>
                Padre de cinco hijos.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://santodomingo.cl/wp-content/uploads/2023/06/cuenta_publica_sd_2021.pdf"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#1565c0', color: '#fff',
                    padding: '0.625rem 1.25rem', borderRadius: '4px',
                    fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '1rem' }} />
                  Cuenta Pública 2021
                </a>
                <a href="https://santodomingo.cl/wp-content/uploads/2023/06/cuenta-publica-2022.pdf"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#1565c0', color: '#fff',
                    padding: '0.625rem 1.25rem', borderRadius: '4px',
                    fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                  <i className="cl cl-document-verified" style={{ fontSize: '1rem' }} />
                  Cuenta Pública 2022
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Concejo Municipal */}
        <div style={{ padding: '60px 80px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.75rem', color: '#1a237e' }}>Concejo Municipal</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
            A continuación presentamos a nuestros concejales:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {concejales.map((c, i) => (
              <div key={i} style={{ textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.07)' }}>
                <img src={c.img} alt={c.nombre}
                  style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 6px', fontSize: '0.9375rem', fontWeight: 700, color: '#1a237e' }}>{c.nombre}</h3>
                  <p style={{ color: '#555', fontSize: '0.8125rem', margin: '0 0 6px', lineHeight: 1.5 }}>{c.desc}</p>
                  <p style={{ color: '#1565c0', fontSize: '0.8125rem', margin: 0 }}>{c.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transmisión Concejo */}
        <div style={{ padding: '3.75rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '1.75rem', color: '#1a237e' }}>Transmisión Concejo Municipal</h2>
          <a href="https://sites.google.com/santodomingo.cl/concejomunicipalsantodomingo/inicio"
            target="_blank" rel="noopener noreferrer"
            style={{ color: '#1565c0', fontWeight: 700, marginBottom: '24px', display: 'inline-block', fontSize: '0.9375rem', textDecoration: 'none' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}>
            Revisa el concejo online →
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <a href="https://sites.google.com/santodomingo.cl/concejomunicipalsantodomingo/inicio"
              target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#1565c0', color: '#fff', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600 }}>
              <i className="cl cl-youtube" style={{ fontSize: '1.125rem' }} />
              Tabla De Concejos Municipales
            </a>
            <a href="https://www.youtube.com/@concejomunicipalsantodomingo/streams"
              target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#1565c0', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <i className="cl cl-document-verified" style={{ fontSize: '1.125rem' }} />
              Ver Concejos Anteriores
            </a>
          </div>

          {/* COSOC - imagen izquierda, texto derecha */}
          <div style={{
            backgroundColor: '#1a237e', color: '#fff',
            borderRadius: '12px', padding: '40px',
            display: 'flex', gap: '40px', alignItems: 'center',
            textAlign: 'left', maxWidth: '900px', margin: '0 auto'
          }}>
            <img src="/images/cosoc.jpeg" alt="COSOC"
              style={{ width: '13.75rem', height: '10rem', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
            <div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>Consejo De Sociedad Civil</h3>
              <p style={{ fontSize: '0.8125rem', lineHeight: '1.8', margin: 0 }}>
                Organismo de participación ciudadana de la Municipalidad de Santo Domingo que reemplaza
                al Consejo Económico Social Comunal (CESCO) y cuyo objetivo es asegurar la colaboración
                y participación de la comunidad local en el progreso económico, social y cultural de la comuna.
              </p>
              <p style={{ fontSize: '0.8125rem', lineHeight: '1.8', marginTop: '0.625rem', marginBottom: 0 }}>
                El Consejo Comunal de las Organizaciones de la Sociedad Civil será presidido por el Alcalde,
                desempeñándose como ministro de fe el Secretario Municipal.
              </p>
            </div>
          </div>
        </div>

        {/* Funciones COSOC */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.875rem', fontSize: '1.625rem', color: '#1a237e' }}>
            Funciones Del Consejo De Sociedad Civil COSOC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem 2.5rem' }}>
            {funcionesCOSOC.map((f, i) => (
              <p key={i} style={{ color: '#333', fontSize: '0.875rem', lineHeight: '1.7', margin: 0 }}>{f}</p>
            ))}
          </div>
        </div>

        {/* Integrantes COSOC */}
        <div style={{ padding: '3.75rem', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.875rem', fontSize: '1.625rem', color: '#1a237e' }}>
            Integrantes Del Consejo De Sociedad Civil COSOC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 3.75rem' }}>
            {integrantes.map((item, i) => (
              <p key={i} style={{ fontSize: '0.875rem', margin: 0, lineHeight: 1.6 }}>
                <strong>{item.nombre}:</strong> {item.org}
              </p>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.875rem' }}>
            <a href="https://santodomingo.cl/wp-content/uploads/2023/06/decreto_2022_2025-COSOC.pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#1565c0', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
              <i className="cl cl-document-verified" style={{ fontSize: '1rem' }} />
              Decreto Miembros COSOC Periodo 2022 Al 2026
            </a>
          </div>
        </div>

        {/* Funcionamiento Interno */}
        <div style={{ padding: '3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: '#1a237e' }}>Funcionamiento Interno</h2>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
            <p style={{ flex: 1, color: '#555', fontSize: '0.9375rem', lineHeight: '1.7', margin: 0 }}>
              El objetivo de un buen funcionamiento interno municipal, es garantizar la eficiencia y la eficacia
              en la prestación de los servicios y desarrollo de actividades que se le entregan a la comunidad.
              Ordenamos este funcionamiento en el reglamento interno.
            </p>
            <a href="https://santodomingo.cl/wp-content/uploads/2023/07/reglamento-interno-2019-decreto-alcaldicio-No27_01.pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#1565c0', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              <i className="cl cl-document-verified" style={{ fontSize: '1rem' }} />
              Reglamento Interno
            </a>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Autoridades;