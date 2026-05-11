import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AtractivosNaturales: React.FC = () => {
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
            src="/images/Atractivos_fondos.jpeg"
            alt="Atractivos Naturales"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '60px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0 0 16px 0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}>
              Atractivos Naturales
            </h1>
            <p style={{ fontSize: '14px', lineHeight: '1.7', textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>
              Santo Domingo es denominada Comuna Parque, generando un diálogo entre
              el ser humano y el medioambiente.<br />
              La naturaleza generosa le ha dado a sus comunidades un campo fértil,
              en el cual desarrollar sus actividades agro-productivas. A lo largo del
              territorio destacan distintos atractivos turísticos, así como su geografía
              e historia.
            </p>
          </div>
        </div>

        {/* Parque Humedal */}
        <div style={{ padding: '80px 60px', display: 'flex', gap: '60px', alignItems: 'flex-start', backgroundColor: '#fff' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              1. Parque Humedal Río Maipo
            </h2>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
              Fue creado el año 2002 por la Municipalidad de Santo Domingo
              en la desembocadura del río Maipo, a fin de proteger su biodiversidad.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
              En 2014 comenzó a contar con el apoyo de Fundación Cosmos
              para su manejo y gestión, bajo estándares adecuados de conservación.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
              Tras asumir la gestión y administración del parque, Fundación
              Cosmos ha puesto en marcha un plan de desarrollo estratégico
              para fortalecer las visitas y la protección de este importante
              ecosistema, de tal forma que todos puedan acceder a él,
              conocerlo y valorarlo, sin afectar su integridad.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8' }}>
              Cuenta con infraestructura de acceso, señalética y espacios
              destinados al turismo especializado en la observación de aves.
              Gracias a la gestión realizada a través del tiempo, en el año 2020
              el Parque Humedal Río Maipo fue declarado Santuario de la Naturaleza.
            </p>
          </div>

          <div style={{ flex: 1, position: 'relative' }}>
            <img
              src="/images/Humedal.jpeg"
              alt="Parque Humedal"
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }}
            />
            {/* Info card */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px',
              backgroundColor: '#1a237e', color: '#fff',
              borderRadius: '8px', padding: '16px 20px', maxWidth: '260px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '18px' }}>ℹ</span>
                <strong style={{ fontSize: '14px' }}>Información</strong>
              </div>
              <p style={{ fontSize: '12px', margin: '4px 0' }}>contacto@humedalriomaipo.cl</p>
              <p style={{ fontSize: '12px', margin: '4px 0' }}>+569 3864 5441</p>
              <p style={{ fontSize: '12px', margin: '4px 0' }}>https://humedalriomaipo.cl/</p>
            </div>
          </div>
        </div>

        {/* Reserva Nacional El Yali */}
        <div style={{ padding: '80px 60px', display: 'flex', gap: '60px', alignItems: 'flex-start', backgroundColor: '#f9f9f9' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <img
              src="/images/flamengos.jpeg"
              alt="Reserva Nacional El Yali"
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px' }}
            />
            {/* Info card */}
            <div style={{
              position: 'absolute', top: '20px', left: '20px',
              backgroundColor: '#1a237e', color: '#fff',
              borderRadius: '8px', padding: '16px 20px', maxWidth: '260px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '18px' }}>ℹ</span>
                <strong style={{ fontSize: '14px' }}>Información</strong>
              </div>
              <p style={{ fontSize: '12px', margin: '4px 0' }}>Avda. Litoral 296, Santo Domingo.</p>
              <p style={{ fontSize: '12px', margin: '4px 0' }}>Teléfono: +563 5244 2772 con 48 horas de anticipación, en días hábiles de lunes a jueves.</p>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>
              2. Reserva Nacional El Yali
            </h2>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
              Esta reserva está comprendida dentro del sistema complejo de
              humedal que involucra no solo el área protegida por el Estado, sino
              que también integra distintas localidades de Santo Domingo; las
              cuales poseen lagunas, vegas, esteros y pantanos.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
              Su clima templado mediterráneo hace que visitar este lugar sea un
              panorama agradable y una grata experiencia para tener contacto
              directo con la naturaleza.
            </p>
            <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8' }}>
              Su riqueza es tal que alberga a 176 especies de seres vivos de las
              cuales 115 son especies de aves, razón que lo ha llevado a una
              categoría de sitio RAMSAR. En el humedal también es posible
              encontrar diversos tipos de animales, fósiles y vestigios de culturas
              precolombinas.
            </p>
          </div>
        </div>

        {/* Botón descargar */}
        <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#fff' }}>
          <button style={{
            backgroundColor: '#1a237e', color: '#fff',
            padding: '16px 40px', border: 'none',
            borderRadius: '4px', cursor: 'pointer',
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

export default AtractivosNaturales;
