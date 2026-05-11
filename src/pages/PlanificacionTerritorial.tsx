import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InstrumentosPlanificacion: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '60px 80px' }}>

          <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#1a237e', textAlign: 'center', marginBottom: '40px', lineHeight: 1.2 }}>
            Instrumentos De Planificación Territorial
          </h1>

          {/* A. Plan Regulador Comunal Vigente */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a237e', marginBottom: '20px' }}>
            Plan Regulador Comunal Vigente
          </h2>

          <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
            - Publicación En El Diario Oficial Con Ordenanza
          </p>
          <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
            - Memoria Explicativa
          </p>
          <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
            - Planos
          </p>
          {['A) PRCSD 01_lamina A', 'B) PRCSD 01_lamina B', 'C) PRCSD 02', 'D) PRCSD 03'].map((item, i) => (
            <p key={i} style={{ fontSize: '14px', marginLeft: '20px', marginBottom: '6px', color: '#222' }}>
              {item}
            </p>
          ))}

          <div style={{ marginTop: '40px' }} />

          {/* B. Modificaciones */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a237e', marginBottom: '20px' }}>
            B. Modificaciones (Enmiendas)
          </h2>

          <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
            - Publicación En El Diario Oficial Con Ordenanza
          </p>
          {['Enmienda 1 (2006)', 'Enmienda 2 (2007)', 'Enmienda 3 (2008)', 'Enmienda 4 (2008)', 'Enmienda 5 (2008)', 'Enmienda 6 (2013)', 'Enmienda 7 (2022)'].map((item, i) => (
            <p key={i} style={{ fontSize: '14px', marginLeft: '20px', marginBottom: '6px', color: '#222' }}>
              {item}
            </p>
          ))}
          <p style={{ fontWeight: '700', fontSize: '15px', margin: '14px 0 10px' }}>
            - Memoria Explicativa
          </p>
          <p style={{ fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}>
            - Planos
          </p>

          <div style={{ marginTop: '40px' }} />

          {/* Proceso de Actualización */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a237e', marginBottom: '20px' }}>
            Proceso De Actualización Plan Regulador Comunal
          </h2>

          {[
            '1. Etapa Preparación Y/O Inicio',
            '2. Informa Aprobación IO Por Autoridad Para Publicación Y Exposición',
            '3. Acuerdo De Concejo Municipal Con Términos Para Elaborar Anteproyecto',
            '4. Publicación Anteproyecto E Inicio Consulta Pública',
            '5. Fecha Para Someter Anteproyecto Para Aprobación De Autoridad',
            '6. Aprobación De Anteproyecto Por Autoridad',
          ].map((item, i) => (
            <p key={i} style={{ fontSize: '14px', marginBottom: '8px', color: '#222' }}>
              {item}
            </p>
          ))}

        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default InstrumentosPlanificacion;