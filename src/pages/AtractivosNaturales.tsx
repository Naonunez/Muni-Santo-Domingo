import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AtractivosNaturales: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
          <img src="/images/Atractivos_fondos.jpeg" alt="Atractivos Naturales" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.75) 45%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '500px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Atractivos Naturales
            </h1>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', margin: 0 }}>
              Santo Domingo es denominada Comuna Parque, generando un diálogo entre el ser humano y el medioambiente. La naturaleza generosa le ha dado a sus comunidades un campo fértil en el cual desarrollar sus actividades agro-productivas.
            </p>
          </div>
        </div>

        {/* 1. Parque Humedal */}
        <div style={{ padding: '5rem 3.75rem', display: 'flex', gap: '2.5rem', alignItems: 'center', backgroundColor: '#f5f7fa' }}>
          {/* Texto con círculo */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '360px', height: '360px', borderRadius: '50%', backgroundColor: '#e8edf8', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a237e' }}>
                1. Parque Humedal Río Maipo
              </h2>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Fue creado el año 2002 por la Municipalidad de Santo Domingo en la desembocadura del río Maipo, a fin de proteger su biodiversidad.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                En 2014 comenzó a contar con el apoyo de Fundación Cosmos para su manejo y gestión, bajo estándares adecuados de conservación.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                En el año 2020 el Parque Humedal Río Maipo fue declarado <strong>Santuario de la Naturaleza</strong>. Cuenta con infraestructura de acceso, señalética y espacios destinados al turismo especializado en la observación de aves.
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/images/Humedal.jpeg" alt="Parque Humedal" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: '#1a237e', color: '#fff', borderRadius: '8px', padding: '16px 20px', maxWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <i className="cl cl-call-info" style={{ fontSize: '1rem', flexShrink: 0 }} />
                <strong style={{ fontSize: '0.875rem' }}>Información</strong>
              </div>
              <a href="mailto:contacto@humedalriomaipo.cl" style={{ display: 'block', fontSize: '0.75rem', color: '#90caf9', textDecoration: 'underline', margin: '4px 0' }}>
                contacto@humedalriomaipo.cl
              </a>
              <p style={{ fontSize: '0.75rem', margin: '4px 0', lineHeight: 1.4 }}>+569 3864 5441</p>
              <a href="https://humedalriomaipo.cl" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: '#90caf9', textDecoration: 'underline' }}>
                humedalriomaipo.cl
              </a>
            </div>
          </div>
        </div>

        {/* 2. Reserva Nacional El Yali */}
        <div style={{ padding: '5rem 3.75rem', display: 'flex', gap: '2.5rem', alignItems: 'center', backgroundColor: '#fff' }}>
          {/* Imagen */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="/images/flamengos.jpeg" alt="Reserva Nacional El Yali" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }} />
            <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#1a237e', color: '#fff', borderRadius: '8px', padding: '16px 20px', maxWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <i className="cl cl-call-info" style={{ fontSize: '1rem', flexShrink: 0 }} />
                <strong style={{ fontSize: '0.875rem' }}>Información</strong>
              </div>
              <p style={{ fontSize: '0.75rem', margin: '4px 0', lineHeight: 1.4 }}>Avda. Litoral 296, Santo Domingo.</p>
              <p style={{ fontSize: '0.75rem', margin: '4px 0', lineHeight: 1.4 }}>+563 5244 2772 (con 48 hrs de anticipación, lunes a jueves)</p>
            </div>
          </div>

          {/* Texto con círculo */}
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '360px', height: '360px', borderRadius: '50%', backgroundColor: '#e8edf8', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1a237e' }}>
                2. Reserva Nacional El Yali
              </h2>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Esta reserva está comprendida dentro del sistema complejo de humedal que involucra no solo el área protegida por el Estado, sino que también integra distintas localidades de Santo Domingo con lagunas, vegas, esteros y pantanos.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Su clima templado mediterráneo hace que visitar este lugar sea un panorama agradable para tener contacto directo con la naturaleza.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                Su riqueza es tal que alberga a <strong>176 especies de seres vivos</strong>, de las cuales 115 son especies de aves, razón que lo ha llevado a una categoría de sitio RAMSAR.
              </p>
            </div>
          </div>
        </div>

        {/* Botón */}
        <div style={{ padding: '3rem 3.75rem 3.75rem', textAlign: 'center', backgroundColor: '#f5f7fa' }}>
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

export default AtractivosNaturales;
