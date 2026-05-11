
import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const noticias = [
  {
    titulo: 'Comité Ambiental Comunal De Santo Domingo Presentó Su Guía De La Parcela Rural',
    desc: 'En El Auditorio De La Municipalidad, Se Presentó La "Guía De La Parcela Rural", Consejos, Datos Y Propuestas Para Vivir En Armonía Con La Naturaleza Y Los Vecinos.',
    img: '/images/comite.jpeg',
    lado: 'derecha'
  },
  {
    titulo: 'Comenzó Puesta En Marcha De Nueva Forma De Atención A Pacientes Crónicos',
    desc: 'En Chile, Como En El Mundo, Las Enfermedades Crónicas No Transmisibles (ECNT) Son Un Problema En Aumento, Tanto En Magnitud Como En Complejidad. De Ahí Que El Ministerio De Salud Se Encuentra Implementando Un Nuevo Plan, Que Se Denomina ECICEP, Estrategia De Cuidado Integral Centrado En Las Personas.',
    img: '/images/pacientes_cronicos.jpeg',
    lado: 'izquierda'
  },
];

const Noticias: React.FC = () => {
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
            src="/images/noticias_front.jpeg"
            alt="Noticias"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '50px', left: '60px', color: '#fff'
          }}>
            <h1 style={{
              fontSize: '52px', fontWeight: '900', margin: 0,
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>Noticias</h1>
            <p style={{ fontSize: '15px', maxWidth: '400px', marginTop: '10px', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Entérate de lo que ocurre en la Comuna y comparte con tus vecinos
              toda la información de actividades y novedades comunales.
            </p>
          </div>
        </div>

        {/* Noticias */}
        <div style={{ padding: '40px 60px' }}>
          {noticias.map((noticia, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: noticia.lado === 'izquierda' ? 'row' : 'row-reverse',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '60px'
            }}>
              {/* Texto */}
              <div style={{
                flex: 1,
                backgroundColor: '#f0f0f0',
                borderRadius: '16px',
                padding: '40px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '30px', height: '2px', backgroundColor: '#e53935' }} />
                  <span style={{ color: '#e53935', fontSize: '13px', fontWeight: '600' }}>Noticias</span>
                </div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', lineHeight: 1.4 }}>
                  {noticia.titulo}
                </h2>
                <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  {noticia.desc}
                </p>
                <span style={{
                  color: '#e53935', fontSize: '13px', fontWeight: '600',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                }}>
                  VER MÁS ›
                </span>
              </div>

              {/* Imagen */}
              <div style={{ flex: 1 }}>
                <img
                  src={noticia.img}
                  alt={noticia.titulo}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: noticia.lado === 'izquierda' ? '16px 16px 16px 60px' : '16px 16px 60px 16px',
                    border: noticia.lado === 'izquierda' ? '3px solid #1a237e' : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Noticias;