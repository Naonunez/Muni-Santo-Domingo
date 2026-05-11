import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlanRegulador: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '500px',
          overflow: 'hidden', borderBottomRightRadius: '60px'
        }}>
          <img
            src="/images/Plan_Regulador.jpeg"
            alt="Plan Regulador Comunal"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '60px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0 0 16px 0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}>
              Plan Regulador Comunal
            </h1>
            <p style={{ fontSize: '14px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>
              Es el instrumento de planificación territorial de escala comunal y de carácter normativo
              definido por la Ley General de Urbanismo y Construcciones. Su elaboración es función
              privativa del Municipio y debe regirse por las disposiciones de los Instrumentos de
              Planificación Territorial de escala intercomunal y/o regional, en caso de haberlos.
              Sus competencias recaen exclusivamente sobre suelo urbano.
            </p>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default PlanRegulador;