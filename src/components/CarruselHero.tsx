import React, { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = [
  { src: '/images/afiche1-768x960.png', alt: 'Afiche municipal 1', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfxLvzYAgFeGPxmMVfjwM4-uYFAU19mgRV1X6OHoRmSh75k8A/viewform' },
  { src: '/images/afiche2-768x960.png', alt: 'Afiche municipal 2', href: 'https://sites.google.com/santodomingo.cl/cine/inicio' },
  { src: '/images/afiche3-768x960.jpg', alt: 'Afiche municipal 3', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeez0ZjcYToOYMsulqNhuJrwOo35a4AgVkGWC6we48TdDmm_A/viewform' },
  { src: '/images/afiche4-768x960.jpg', alt: 'Afiche municipal 4', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd2w5g4L-dZQUuEfypUYFmaysp9SwD5rAcDfdXbzDNJLrVFRQ/viewform' },
];

const ITEM_W    = 300;   // ancho de cada afiche en px
const ITEM_H    = 375;   // alto (ratio 4:5 ≈ 768:960)
const GAP       = 40;    // espacio entre afiches
const VISIBLE   = 3;
const MAX_IDX   = SLIDES.length - VISIBLE;   // 1
const INTERVALO = 5000;

const CarruselHero: React.FC = () => {
  const [actual, setActual] = useState(0);
  const timerRef            = useRef<ReturnType<typeof setInterval> | null>(null);

  const viewportW = VISIBLE * ITEM_W + (VISIBLE - 1) * GAP;   // 190*3 + 32*2 = 634
  const trackW    = SLIDES.length * ITEM_W + (SLIDES.length - 1) * GAP;

  const ir = useCallback((idx: number) => {
    setActual(Math.max(0, Math.min(idx, MAX_IDX)));
  }, []);

  const siguiente = useCallback(() => setActual((c) => (c >= MAX_IDX ? 0 : c + 1)), []);
  const anterior  = useCallback(() => setActual((c) => (c <= 0 ? MAX_IDX : c - 1)), []);

  const iniciarTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(siguiente, INTERVALO);
  }, [siguiente]);

  useEffect(() => {
    iniciarTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [iniciarTimer]);

  const pausar   = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const reanudar = () => iniciarTimer();

  const translateX = -(actual * (ITEM_W + GAP));

  return (
    <div
      onMouseEnter={pausar}
      onMouseLeave={reanudar}
      role="region"
      aria-label="Carrusel de afiches"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
      }}
    >
      {/* Contenedor principal con flechas */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

        {/* Flecha izquierda */}
        <button
          aria-label="Afiches anteriores"
          onClick={anterior}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '50%',
            width: '40px', height: '40px', flexShrink: 0,
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#fff', backdropFilter: 'blur(4px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.35)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.2)')}
        >
          <i className="cl cl-m-arrow-left" style={{ fontSize: '18px' }} aria-hidden="true" />
        </button>

        {/* Viewport — recorta el track */}
        <div style={{
          width: `${viewportW}px`,
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
          {/* Track deslizable */}
          <div style={{
            display: 'flex',
            gap: `${GAP}px`,
            width: `${trackW}px`,
            transform: `translateX(${translateX}px)`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            {SLIDES.map((slide, i) => (
              <a
                key={i}
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: `${ITEM_W}px`,
                  height: `${ITEM_H}px`,
                  flexShrink: 0,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.7)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)'; }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          aria-label="Afiches siguientes"
          onClick={siguiente}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '50%',
            width: '40px', height: '40px', flexShrink: 0,
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#fff', backdropFilter: 'blur(4px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.35)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.2)')}
        >
          <i className="cl cl-m-arrow-right" style={{ fontSize: '18px' }} aria-hidden="true" />
        </button>
      </div>

      {/* Puntos indicadores */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {Array.from({ length: MAX_IDX + 1 }).map((_, i) => (
          <button
            key={i}
            aria-label={`Ver afiches desde el ${i + 1}`}
            onClick={() => ir(i)}
            style={{
              width: i === actual ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px', border: 'none',
              background: i === actual ? '#fff' : 'rgba(255,255,255,0.45)',
              cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarruselHero;
