import React, { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Fix para los íconos del marcador en Leaflet con Vite
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MUNI_LAT = -33.6457;
const MUNI_LNG = -71.6147;
const TILE_URL = import.meta.env.VITE_MAP_TILE_URL || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const Contacto: React.FC = () => {
  const [mapaError, setMapaError] = useState(false);

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
            src="/images/Contacto.jpeg"
            alt="Contacto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '60px', left: '60px', color: '#fff', maxWidth: '500px'
          }}>
            <h1 style={{
              fontSize: '48px', fontWeight: '900', margin: '0',
              lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
            }}>
              Contacto
            </h1>
          </div>
        </div>

        {/* Contáctanos */}
        <div style={{ padding: '60px 80px', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111', marginBottom: '40px' }}>
            Contáctanos
          </h2>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Dirección */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>📍</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Dirección</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                Municipalidad de Santo Domingo,<br />
                Av. Santa Teresa de Los Andes N° 1
              </p>
            </div>

            {/* Llámanos */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>📞</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Llámanos</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                Fono de Seguridad: 1458<br />
                + 563 2238 1603<br />
                + 563 5220 4200
              </p>
            </div>

            {/* Email */}
            <div style={{
              flex: '1', minWidth: '220px', maxWidth: '300px',
              backgroundColor: '#fff', borderRadius: '12px',
              padding: '30px 24px', textAlign: 'left',
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '24px', color: '#1a237e', marginBottom: '12px' }}>✉️</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '12px' }}>Email</h3>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                contacto@santodomingo.cl
              </p>
            </div>

          </div>
        </div>

        {/* Mapa interactivo */}
        <div style={{ padding: '0 80px 60px', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#111', marginBottom: '24px', textAlign: 'center' }}>
            Encuéntranos
          </h2>
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', height: '420px' }}>
            {mapaError ? (
              <div style={{
                height: '100%', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: '#f5f5f5', color: '#555', gap: '12px'
              }}>
                <span style={{ fontSize: '32px' }}>🗺️</span>
                <p style={{ margin: 0, fontSize: '14px' }}>No se pudo cargar el mapa.</p>
                <p style={{ margin: 0, fontSize: '13px', color: '#888' }}>
                  Av. Santa Teresa de Los Andes N° 1, Santo Domingo
                </p>
              </div>
            ) : (
              <MapContainer
                center={[MUNI_LAT, MUNI_LNG]}
                zoom={15}
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
                    Av. Santa Teresa de Los Andes N° 1<br />
                    Santo Domingo, Región de Valparaíso
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
