import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  imagen?: string;
  fecha_publicacion: string;
  autor: string;
}

const CACHE_KEY = 'noticias_cache';
const CACHE_TTL = 5 * 60 * 1000;

function leerCache(): Noticia[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return data;
  } catch { return null; }
}

function guardarCache(data: Noticia[]) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() })); }
  catch { /* localStorage lleno */ }
}

function extractText(html: string, maxLen = 160): string {
  const plain = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return plain.length > maxLen ? plain.slice(0, maxLen) + '…' : plain;
}

/* ── Estilos de tarjeta ── */
const cardBase: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow 0.2s, transform 0.2s',
};

const Noticias: React.FC = () => {
  const history = useHistory();
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError]       = useState(false);

  useEffect(() => {
    const cache = leerCache();
    if (cache) { setNoticias(cache); setCargando(false); return; }
    api.get<Noticia[]>('/noticias')
      .then(res => { setNoticias(res.data); guardarCache(res.data); })
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
          overflow: 'hidden', borderBottomRightRadius: '60px',
        }}>
          <img
            src="/images/noticias_front.jpeg"
            alt="Noticias"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.72) 40%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Noticias
            </h1>
            <p style={{ fontSize: '1rem', margin: 0, lineHeight: 1.6, opacity: 0.9, textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>
              Entérate de lo que ocurre en la Comuna y comparte con tus vecinos
              toda la información de actividades y novedades comunales.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#f9f9f9' }}>

          {cargando && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <IonSpinner name="crescent" />
            </div>
          )}

          {error && !cargando && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#666', fontSize: '0.9375rem' }}>
              <p>No se pudieron cargar las noticias. Intenta más tarde.</p>
            </div>
          )}

          {!cargando && !error && noticias.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#666', fontSize: '0.9375rem' }}>
              <p>No hay noticias publicadas aún.</p>
            </div>
          )}

          {!cargando && !error && noticias.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {noticias.map(noticia => (
                <div
                  key={noticia.id}
                  style={{ ...cardBase, cursor: 'pointer' }}
                  onClick={() => history.push(`/noticias/${noticia.id}`)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.14)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                >
                  {/* Imagen o placeholder */}
                  <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                    {noticia.imagen ? (
                      <img
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                      />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, #1565c0 0%, #1a237e 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '4rem', fontWeight: 900 }}>
                          {noticia.titulo.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Cuerpo */}
                  <div style={{ padding: '1.25rem 1.375rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '1.5rem', height: '2px', backgroundColor: '#e53935' }} />
                      <span style={{ color: '#e53935', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Noticias</span>
                      <span style={{ marginLeft: 'auto', color: '#999', fontSize: '0.75rem' }}>
                        {new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL')}
                      </span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, color: '#1a1a2e' }}>
                      {noticia.titulo}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#555', lineHeight: 1.65, flex: 1 }}>
                      {extractText(noticia.contenido)}
                    </p>
                    <span style={{ marginTop: '0.5rem', color: '#1565c0', fontSize: '0.875rem', fontWeight: 600 }}>
                      Ver más →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Noticias;
