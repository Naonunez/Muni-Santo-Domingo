import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  slides: string[];
  alts?: string[];
  itemW?: number;
  itemH?: number;
  visible?: number;
  intervalo?: number;
  label?: string;
}

const CarruselFotos: React.FC<Props> = ({
  slides,
  alts = [],
  itemW = 310,
  itemH = 260,
  visible = 3,
  intervalo = 4000,
  label = 'Carrusel de imágenes',
}) => {
  const [actual, setActual]         = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const timerRef                    = useRef<ReturnType<typeof setInterval> | null>(null);
  const GAP                         = 20;

  const maxIdx    = Math.max(0, slides.length - visible);
  const viewportW = visible * itemW + (visible - 1) * GAP;
  const trackW    = slides.length * itemW + (slides.length - 1) * GAP;

  const ir        = useCallback((i: number) => setActual(Math.max(0, Math.min(i, maxIdx))), [maxIdx]);
  const siguiente = useCallback(() => setActual((c) => (c >= maxIdx ? 0 : c + 1)), [maxIdx]);
  const anterior  = useCallback(() => setActual((c) => (c <= 0 ? maxIdx : c - 1)), [maxIdx]);

  const iniciarTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(siguiente, intervalo);
  }, [siguiente, intervalo]);

  useEffect(() => {
    iniciarTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [iniciarTimer]);

  const pausar   = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const reanudar = () => iniciarTimer();
  const translateX = -(actual * (itemW + GAP));

  const btnBase: React.CSSProperties = {
    background: 'rgba(21,101,192,0.10)',
    border: '1px solid rgba(21,101,192,0.25)',
    borderRadius: '50%',
    width: '40px', height: '40px', flexShrink: 0,
    cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    color: '#1565c0', transition: 'background 0.2s',
  };

  return (
    <>
      {/* Lightbox */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setSelectedImg(null)}
            style={{
              position: 'absolute', top: '1rem', right: '1.25rem',
              background: 'rgba(255,255,255,0.15)', border: 'none',
              color: '#fff', fontSize: '1.75rem', cursor: 'pointer',
              width: '2.5rem', height: '2.5rem', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
          <img
            src={selectedImg}
            alt="Imagen ampliada"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '8px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      )}

      <div
        onMouseEnter={pausar}
        onMouseLeave={reanudar}
        role="region"
        aria-label={label}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

          <button aria-label="Anterior" onClick={anterior} style={btnBase}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(21,101,192,0.20)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(21,101,192,0.10)')}
          >
            <i className="cl cl-m-arrow-left" style={{ fontSize: '18px' }} aria-hidden="true" />
          </button>

          <div style={{ width: `${viewportW}px`, overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{
              display: 'flex', gap: `${GAP}px`,
              width: `${trackW}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            }}>
              {slides.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImg(src)}
                  style={{
                    width: `${itemW}px`, height: `${itemH}px`, flexShrink: 0,
                    borderRadius: '8px', overflow: 'hidden',
                    backgroundColor: '#eef1f8',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'zoom-in', transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(21,101,192,0.25)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src={src}
                    alt={alts[i] || `Imagen ${i + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button aria-label="Siguiente" onClick={siguiente} style={btnBase}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(21,101,192,0.20)')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(21,101,192,0.10)')}
          >
            <i className="cl cl-m-arrow-right" style={{ fontSize: '18px' }} aria-hidden="true" />
          </button>
        </div>

        {maxIdx > 0 && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} aria-label={`Grupo ${i + 1}`} onClick={() => ir(i)}
                style={{
                  width: i === actual ? '24px' : '10px', height: '10px',
                  borderRadius: '5px', border: 'none',
                  background: i === actual ? '#1565c0' : 'rgba(21,101,192,0.25)',
                  cursor: 'pointer', padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CarruselFotos;
