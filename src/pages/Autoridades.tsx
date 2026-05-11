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
          position: 'relative', width: '100%', height: '400px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/autoridades.jpeg"
            alt="Autoridades Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '40px', left: '60px', color: '#fff'
          }}>
            <h1 style={{ fontSize: '48px', fontWeight: '900', margin: 0, lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Autoridades
            </h1>
            <h1 style={{ fontSize: '48px', fontWeight: '900', margin: 0, lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Municipales
            </h1>
            <p style={{ margin: '10px 0 0 0', fontSize: '16px', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Conozca nuestro municipio y autoridades.
            </p>
          </div>
        </div>

        {/* Alcalde */}
        <div style={{
          padding: '60px', display: 'flex', gap: '60px',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ flex: 1, maxWidth: '450px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Alcalde</h2>
            <p style={{ margin: '4px 0' }}><strong>Fernando Rodríguez Larraín</strong></p>
            <p style={{ color: '#555', margin: '4px 0' }}>Ingeniero Agrónomo.</p>
            <p style={{ color: '#555', margin: '12px 0' }}>
              Alcalde de Santo Domingo durante los años 2008 al 2021 y por el periodo actual 2024 – 2028
            </p>
            <p style={{ color: '#555', margin: '4px 0' }}>Padre de cinco hijos.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', maxWidth: '220px' }}>
              <button style={{
                backgroundColor: '#1a237e', color: '#fff', padding: '12px 20px',
                border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'left'
              }}>Cuenta Pública 2021 →</button>
              <button style={{
                backgroundColor: '#1a237e', color: '#fff', padding: '12px 20px',
                border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'left'
              }}>Cuenta Pública 2022 →</button>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/alcalde.jpeg"
              alt="Alcalde"
              style={{ width: '100%', maxWidth: '350px', borderRadius: '12px' }}
            />
          </div>
        </div>

        {/* Concejo Municipal */}
        <div style={{ padding: '40px 60px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '28px' }}>Concejo Municipal</h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px' }}>
            A continuación presentamos a nuestros concejales:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {concejales.map((c, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={c.img} alt={c.nombre}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3 style={{ margin: '12px 0 4px', fontSize: '16px' }}>{c.nombre}</h3>
                <p style={{ color: '#555', fontSize: '13px', margin: '4px 0' }}>{c.desc}</p>
                <p style={{ color: '#1a237e', fontSize: '13px', margin: '4px 0' }}>{c.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transmisión Concejo */}
        <div style={{ padding: '60px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '8px', fontSize: '28px' }}>Transmisión Concejo Municipal</h2>
          <p style={{ color: '#1a237e', fontWeight: 'bold', marginBottom: '20px' }}>
            Revisa el concejo online
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
            <button style={{
              backgroundColor: '#1a237e', color: '#fff', padding: '12px 24px',
              border: 'none', borderRadius: '4px', cursor: 'pointer'
            }}>Tabla De Concejos Municipales</button>
            <button style={{
              backgroundColor: '#1a237e', color: '#fff', padding: '12px 24px',
              border: 'none', borderRadius: '4px', cursor: 'pointer'
            }}>Ver Concejos Anteriores ▶</button>
          </div>

          {/* COSOC - imagen izquierda, texto derecha */}
          <div style={{
            backgroundColor: '#1a237e', color: '#fff',
            borderRadius: '12px', padding: '40px',
            display: 'flex', gap: '40px', alignItems: 'center',
            textAlign: 'left', maxWidth: '900px', margin: '0 auto'
          }}>
            <img src="/images/cosoc.jpeg" alt="COSOC"
              style={{ width: '220px', height: '160px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
            <div>
              <h3 style={{ marginBottom: '12px' }}>Consejo De Sociedad Civil</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.8' }}>
                Organismo de participación ciudadana de la Municipalidad de Santo Domingo que reemplaza
                al Consejo Económico Social Comunal (CESCO) y cuyo objetivo es asegurar la colaboración
                y participación de la comunidad local en el progreso económico, social y cultural de la comuna.
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.8', marginTop: '10px' }}>
                El Consejo Comunal de las Organizaciones de la Sociedad Civil será presidido por el Alcalde,
                desempeñándose como ministro de fe el Secretario Municipal.
              </p>
            </div>
          </div>
        </div>

        {/* Funciones COSOC */}
        <div style={{ padding: '60px', backgroundColor: '#fff' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '26px' }}>
            Funciones Del Consejo De Sociedad Civil COSOC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px' }}>
            {funcionesCOSOC.map((f, i) => (
              <p key={i} style={{ color: '#333', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{f}</p>
            ))}
          </div>
        </div>

        {/* Integrantes COSOC */}
        <div style={{ padding: '60px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '26px' }}>
            Integrantes Del Consejo De Sociedad Civil COSOC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 60px' }}>
            {integrantes.map((item, i) => (
              <p key={i} style={{ fontSize: '14px', margin: 0 }}>
                <strong>{item.nombre}:</strong> {item.org}
              </p>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button style={{
              backgroundColor: '#1a237e', color: '#fff', padding: '12px 24px',
              border: 'none', borderRadius: '4px', cursor: 'pointer'
            }}>Decreto Miembros COSOC Periodo 2022 Al 2026</button>
          </div>
        </div>

        {/* Funcionamiento Interno */}
        <div style={{ padding: '60px', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Funcionamiento Interno</h2>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <p style={{ flex: 1, color: '#555', fontSize: '14px', lineHeight: '1.7' }}>
              El objetivo de un buen funcionamiento interno municipal, es garantizar la eficiencia y la eficacia
              en la prestación de los servicios y desarrollo de actividades que se le entregan a la comunidad.
              Ordenamos este funcionamiento en el reglamento interno.
            </p>
            <button style={{
              backgroundColor: '#1a237e', color: '#fff', padding: '12px 24px',
              border: 'none', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap'
            }}>Reglamento Interno</button>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Autoridades;