import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TurismoPatrimonial: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/Frontis_atractivos.jpeg" alt="Atractivos Patrimoniales" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Atractivos Patrimoniales y Culturales
            </h1>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, textShadow: '1px 1px 4px rgba(0,0,0,0.5)', margin: 0 }}>
              Ya sea en invierno o verano Santo Domingo siempre es una excelente opción para pasear y disfrutar en familia. Playa, campo, paisajes y panoramas; siempre con la tranquilidad y seguridad que caracteriza a la Comuna Parque.
            </p>
          </div>
        </div>

        {/* A. Piedra Intihuatana */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', padding: '5rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          {/* Texto con fondo circular */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '360px', height: '360px', borderRadius: '50%', backgroundColor: '#e8edf8', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a237e' }}>
                A. Piedra Intihuatana
              </h2>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Ubicado en el sector balneario de la comuna, es uno de los testimonios más antiguos del territorio. Se presume de origen precolombino, pues su estructura es similar a algunos hitos astronómicos-calendáricos de los incas.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Este vestigio que aún se conserva ante la mirada de los visitantes, tiene como fondo la Playa de los Enamorados.
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/images/Piedra_Intihuatana.jpeg" alt="Piedra Intihuatana" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', backgroundColor: '#1a237e', color: '#fff', borderRadius: '12px', padding: '16px 20px', maxWidth: '220px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <i className="cl cl-call-info" style={{ fontSize: '1rem', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: '0.875rem' }}>Información</p>
                <p style={{ fontSize: '0.75rem', margin: 0, lineHeight: 1.5 }}>Sector balneario de Santo Domingo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* B. Parque De La Ciencia */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', padding: '5rem 3.75rem', backgroundColor: '#fff' }}>
          {/* Imagen */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/images/Parque_Ciencia.jpeg" alt="Parque de la Ciencia" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: '#1a237e', color: '#fff', borderRadius: '12px', padding: '16px 20px', maxWidth: '260px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <i className="cl cl-call-info" style={{ fontSize: '1rem', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 700, margin: '0 0 4px', fontSize: '0.875rem' }}>Información</p>
                <p style={{ fontSize: '0.75rem', margin: '0 0 4px', lineHeight: 1.5 }}>Av. Arturo Phillips 101, Santo Domingo</p>
                <a href="https://www.parquedelaciencia.cl" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: '#90caf9', textDecoration: 'underline' }}>
                  www.parquedelaciencia.cl
                </a>
              </div>
            </div>
          </div>

          {/* Texto con fondo circular */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '360px', height: '360px', borderRadius: '50%', backgroundColor: '#e8edf8', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a237e' }}>
                B. Parque De La Ciencia
              </h2>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Organización sin fines de lucro que busca educar en los ámbitos de las ciencias y nuevas tecnologías, preocupándose de crear conciencia de la importancia del cuidado del medioambiente.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Las diversas actividades que se realizan en el parque colaboran a una formación integral de los jóvenes, constituyendo un real complemento para la labor docente.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Inició su funcionamiento en abril de 2017 bajo la dirección del ingeniero civil Juan Campino Bunster.
              </p>
            </div>
          </div>
        </div>

        {/* Botón */}
        <div style={{ textAlign: 'center', padding: '3rem 0 3.75rem', backgroundColor: '#f5f7fa' }}>
          <a
            href="https://santodomingo.cl/wp-content/uploads/2023/07/triptico-turismo-2022-v6.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#1a237e', color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', textDecoration: 'none' }}
          >
            DESCARGAR TRÍPTICO COMPLETO TURISMO
          </a>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default TurismoPatrimonial;
