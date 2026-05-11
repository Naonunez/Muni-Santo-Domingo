import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TurismoPatrimonial: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '450px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/Frontis_atractivos.jpeg"
            alt="Atractivos Patrimoniales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0 0 16px 0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>
              Atractivos Patrimoniales<br />Culturales
            </h1>
            <p style={{ fontSize: '15px', lineHeight: '1.6', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Ya sea en invierno o verano Santo Domingo siempre es una excelente
              opción para pasear y disfrutar en familia. Playa, campo, paisajes y
              panoramas; siempre con la tranquilidad y seguridad que caracteriza a la
              Comuna Parque.
            </p>
          </div>
        </div>

        {/* A. Piedra Intihuatana */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '40px',
          padding: '80px 60px', backgroundColor: '#fff'
        }}>
          {/* Texto con fondo circular */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-40px', left: '-40px',
              width: '350px', height: '350px', borderRadius: '50%',
              backgroundColor: '#f0f4ff', zIndex: 0
            }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>
                A. Piedra Intihuatana
              </h2>
              <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8' }}>
                Ubicado en el sector balneario de la comuna, es uno de los
                testimonios más antiguos del territorio. Se presume de origen
                precolombino, pues su estructura es similar a algunos hitos
                astronómicos-calendáricos de los incas.
              </p>
              <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginTop: '10px' }}>
                Este vestigio que aún se conserva ante la mirada de los
                visitantes, tiene como fondo la Playa de los Enamorados.
              </p>
            </div>
          </div>

          {/* Imagen con card de información */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img
              src="/images/Piedra_Intihuatana.jpeg"
              alt="Piedra Intihuatana"
              style={{
                width: '100%', height: '350px', objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
            {/* Card Información */}
            <div style={{
              position: 'absolute', bottom: '20px', right: '20px',
              backgroundColor: '#1a237e', color: '#fff',
              borderRadius: '12px', padding: '16px 20px',
              maxWidth: '220px', display: 'flex', gap: '10px', alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '18px' }}>ℹ</span>
              <div>
                <p style={{ fontWeight: '700', margin: '0 0 4px 0', fontSize: '14px' }}>Información</p>
                <p style={{ fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                  Se encuentra ubicada en el sector balneario de la comuna.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* B. Parque De La Ciencia */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '40px',
          padding: '60px', backgroundColor: '#fff'
        }}>
          {/* Imagen con card de información */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img
              src="/images/Parque_Ciencia.jpeg"
              alt="Parque de la Ciencia"
              style={{
                width: '100%', height: '400px', objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
            {/* Card Información */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px',
              backgroundColor: '#1a237e', color: '#fff',
              borderRadius: '12px', padding: '16px 20px',
              maxWidth: '260px', display: 'flex', gap: '10px', alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '18px' }}>ℹ</span>
              <div>
                <p style={{ fontWeight: '700', margin: '0 0 4px 0', fontSize: '14px' }}>Información</p>
                <p style={{ fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                  Ubicado en Av. Arturo Phillips 101, Santo Domingo<br />
                  www.parquedelaciencia.cl
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>
              B. Parque De La Ciencia
            </h2>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>
              Organización sin fines de lucro que busca educar en los ámbitos
              de las ciencias y nuevas tecnologías, preocupándose de crear
              conciencia de la importancia del cuidado del medioambiente; y
              difundir el uso de energías renovables, reciclaje y hábitos
              sustentables.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>
              Las diversas actividades que se realizan en el parque colaboran a
              una formación integral de los jóvenes, por lo que constituyen un
              real complemento para la labor docente.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>
              Uno de sus objetivos es la formación de líderes positivos, por lo
              que se trabaja en el desarrollo de la autoestima, confianza y
              capacidad de análisis del entorno en el cual se desenvuelven.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8' }}>
              La idea nació de su fundador y actual director, el ingeniero civil
              Juan Campino Bunster; la que comenzó a concretarse durante el
              año 2016, iniciando su funcionamiento en abril del 2017.
            </p>
          </div>
        </div>

        {/* Botón descargar */}
        <div style={{ textAlign: 'center', padding: '20px 0 60px 0' }}>
          <button style={{
            backgroundColor: '#1a237e', color: '#fff', padding: '14px 32px',
            border: 'none', borderRadius: '4px', cursor: 'pointer',
            fontSize: '14px', fontWeight: '600', letterSpacing: '1px'
          }}>
            DESCARGAR TRÍPTICO COMPLETO TURISMO
          </button>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default TurismoPatrimonial;