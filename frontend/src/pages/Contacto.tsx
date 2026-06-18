import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MUNI_LAT  = -33.645088;
const MUNI_LNG  = -71.6241485;
const TILE_URL  = import.meta.env.VITE_MAP_TILE_URL || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const GMAPS_URL = `https://www.google.com/maps?q=${MUNI_LAT},${MUNI_LNG}`;

const TARJETAS = [
  {
    icon: 'cl-touch-screen',
    titulo: 'Dirección',
    contenido: (
      <>
        <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: '#444', lineHeight: 1.7 }}>
          Avenida Santa Teresa N° 1<br />
          Santo Domingo, Región de Valparaíso
        </p>
        <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.8125rem', color: '#1565c0', textDecoration: 'none', fontWeight: 600 }}>
          Ver en Google Maps →
        </a>
      </>
    ),
  },
  {
    icon: 'cl-telephone',
    titulo: 'Teléfonos',
    contenido: (
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#444', lineHeight: 1.9 }}>
        <a href="tel:+56322381603" style={{ color: '#444', textDecoration: 'none' }}>+56 3 2238 1603</a><br />
        <a href="tel:+56352204200" style={{ color: '#444', textDecoration: 'none' }}>+56 3 5220 4200</a><br />
        Seguridad: 1458
      </p>
    ),
  },
  {
    icon: 'cl-give-letter',
    titulo: 'Correo Electrónico',
    contenido: (
      <a href="mailto:contacto@santodomingo.cl"
        style={{ fontSize: '0.875rem', color: '#1565c0', textDecoration: 'none' }}>
        contacto@santodomingo.cl
      </a>
    ),
  },
  {
    icon: 'cl-reading',
    titulo: 'Horario de Atención',
    contenido: (
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#444', lineHeight: 1.9 }}>
        Lunes a Viernes<br />
        <strong>08:45 – 14:00 hrs</strong><br />
        Sábados<br />
        <strong>09:30 – 13:30 hrs</strong><br />
        Emergencias 24/7
      </p>
    ),
  },
];

const Contacto: React.FC = () => {
  const [mapaError, setMapaError] = useState(false);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero */}
        <div style={{
          position: 'relative', width: '100%', height: '400px',
          overflow: 'hidden', borderBottomRightRadius: '60px',
        }}>
          <img src="/images/Contacto.jpeg" alt="Contacto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.72) 40%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3.75rem', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Contacto
            </h1>
            <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9 }}>
              Estamos disponibles para atenderte. Visítanos o escríbenos.
            </p>
          </div>
        </div>

        {/* Tarjetas */}
        <div style={{ padding: '3.75rem 3.75rem 2.5rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', marginBottom: '2rem', textAlign: 'center' }}>
            Información de Contacto
          </h2>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {TARJETAS.map((t) => (
              <div key={t.titulo} style={{
                flex: '1', minWidth: '200px', maxWidth: '260px',
                backgroundColor: '#fff', borderRadius: '8px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                borderTop: '3px solid #1565c0',
              }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  backgroundColor: '#1565c0', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1rem',
                }}>
                  <i className={`cl ${t.icon}`} style={{ fontSize: '1.125rem', color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1a237e', margin: '0 0 0.625rem' }}>
                  {t.titulo}
                </h3>
                {t.contenido}
              </div>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <div style={{ padding: '0 3.75rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', marginBottom: '1.5rem', textAlign: 'center' }}>
            Encuéntranos
          </h2>
          <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.1)', height: '460px' }}>
            {mapaError ? (
              <div style={{
                height: '100%', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: '#eef1f5', color: '#555', gap: '0.75rem',
              }}>
                <i className="cl cl-touch-screen" style={{ fontSize: '2.5rem', color: '#1565c0' }} />
                <p style={{ margin: 0, fontSize: '0.875rem' }}>No se pudo cargar el mapa.</p>
                <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.875rem', color: '#1565c0', fontWeight: 600 }}>
                  Abrir en Google Maps →
                </a>
              </div>
            ) : (
              <MapContainer
                center={[MUNI_LAT, MUNI_LNG]}
                zoom={16}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url={TILE_URL}
                  eventHandlers={{ tileerror: () => setMapaError(true) }}
                />
                <Marker position={[MUNI_LAT, MUNI_LNG]} icon={markerIcon}>
                  <Popup>
                    <strong>Municipalidad de Santo Domingo</strong><br />
                    Av. Santa Teresa N° 1<br />
                    Santo Domingo, Región de Valparaíso<br />
                    <a href={GMAPS_URL} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
            )}
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Contacto;
