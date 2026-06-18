import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import DOMPurify from 'dompurify';
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

const NoticiaDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [cargando, setCargando]  = useState(true);
  const [error, setError]        = useState(false);

  useEffect(() => {
    api.get<Noticia>(`/noticias/${id}`)
      .then(res => setNoticia(res.data))
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, [id]);

  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {cargando && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem 0' }}>
            <IonSpinner name="crescent" />
          </div>
        )}

        {error && !cargando && (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: '#666' }}>
            <p>No se pudo cargar la noticia.</p>
            <button onClick={() => history.push('/noticias')}
              style={{ marginTop: '1rem', backgroundColor: '#1565c0', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.625rem 1.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              ← Volver a Noticias
            </button>
          </div>
        )}

        {!cargando && !error && noticia && (
          <>
            {/* Hero con imagen o gradiente */}
            <div style={{ position: 'relative', width: '100%', height: '380px', overflow: 'hidden', borderBottomRightRadius: '60px' }}>
              {noticia.imagen ? (
                <img src={noticia.imagen} alt={noticia.titulo}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1565c0 0%, #1a237e 100%)' }} />
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.1) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '48px', left: '60px', right: '60px', color: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '1.5rem', height: '2px', backgroundColor: '#e53935' }} />
                  <span style={{ color: '#ff8a80', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Noticias</span>
                </div>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 900, margin: '0 0 0.75rem', lineHeight: 1.2, textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>
                  {noticia.titulo}
                </h1>
                <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.85 }}>
                  {new Date(noticia.fecha_publicacion).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
                  {noticia.autor ? ` — ${noticia.autor}` : ''}
                </p>
              </div>
            </div>

            {/* Contenido */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem' }}>
              <div
                style={{ fontSize: '1rem', color: '#333', lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(noticia.contenido) }}
              />

              <button onClick={() => history.push('/noticias')}
                style={{ marginTop: '2.5rem', backgroundColor: '#1565c0', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.625rem 1.5rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>
                ← Volver a Noticias
              </button>
            </div>
          </>
        )}

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default NoticiaDetalle;
