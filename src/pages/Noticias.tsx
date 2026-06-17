import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import DOMPurify from 'dompurify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  fecha_publicacion: string;
  autor: string;
}

const CACHE_KEY = 'noticias_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

function leerCache(): Noticia[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function guardarCache(data: Noticia[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // localStorage lleno — continuar sin cache
  }
}

const LADOS = ['derecha', 'izquierda'] as const;

const Noticias: React.FC = () => {
  const [noticias, setNoticias]   = useState<Noticia[]>([]);
  const [cargando, setCargando]   = useState(true);
  const [error, setError]         = useState(false);

  useEffect(() => {
    const cache = leerCache();
    if (cache) {
      setNoticias(cache);
      setCargando(false);
      return;
    }

    api.get<Noticia[]>('/noticias')
      .then((res) => {
        setNoticias(res.data);
        guardarCache(res.data);
      })
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, []);

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
          <div style={{ position: 'absolute', bottom: '50px', left: '60px', color: '#fff' }}>
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

        {/* Contenido */}
        <div style={{ padding: '40px 60px' }}>
          {cargando && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <IonSpinner name="crescent" />
            </div>
          )}

          {error && !cargando && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <p>No se pudieron cargar las noticias. Intenta más tarde.</p>
            </div>
          )}

          {!cargando && !error && noticias.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <p>No hay noticias publicadas aún.</p>
            </div>
          )}

          {!cargando && noticias.map((noticia, i) => {
            const lado = LADOS[i % 2];
            return (
              <div key={noticia.id} style={{
                display: 'flex',
                flexDirection: lado === 'izquierda' ? 'row' : 'row-reverse',
                gap: '40px',
                alignItems: 'flex-start',
                marginBottom: '60px',
                flexWrap: 'wrap',
              }}>
                {/* Texto */}
                <div style={{
                  flex: 1, minWidth: '280px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '16px',
                  padding: '40px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '30px', height: '2px', backgroundColor: '#e53935' }} />
                    <span style={{ color: '#e53935', fontSize: '13px', fontWeight: '600' }}>Noticias</span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#999', margin: '0 0 12px' }}>
                    {new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL')} — {noticia.autor}
                  </p>
                  <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', lineHeight: 1.4 }}>
                    {noticia.titulo}
                  </h2>
                  <div
                    style={{ color: '#444', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(noticia.contenido)
                    }}
                  />
                </div>

                {/* Imagen placeholder con inicial */}
                <div style={{
                  flex: 1, minWidth: '240px',
                  height: '260px',
                  borderRadius: lado === 'izquierda' ? '16px 16px 16px 60px' : '16px 16px 60px 16px',
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: lado === 'izquierda' ? '3px solid #1a237e' : 'none',
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '80px', fontWeight: '900' }}>
                    {noticia.titulo.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Noticias;
