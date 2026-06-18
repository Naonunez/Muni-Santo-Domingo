import React, { useEffect, useRef, useState } from 'react';

type FontSize = 'normal' | 'md' | 'lg';

interface AccPrefs {
  fontSize:  FontSize;
  contraste: boolean;
  grises:    boolean;
  enlaces:   boolean;
}

const STORAGE_KEY = 'acc_prefs';

const defaults: AccPrefs = {
  fontSize:  'normal',
  contraste: false,
  grises:    false,
  enlaces:   false,
};

function cargarPrefs(): AccPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
  } catch {
    return defaults;
  }
}

function aplicarClases(prefs: AccPrefs) {
  const html = document.documentElement;
  html.classList.remove('acc-fuente-md', 'acc-fuente-lg');
  if (prefs.fontSize === 'md') html.classList.add('acc-fuente-md');
  if (prefs.fontSize === 'lg') html.classList.add('acc-fuente-lg');
  html.classList.toggle('acc-contraste', prefs.contraste);
  html.classList.toggle('acc-grises',    prefs.grises);
  html.classList.toggle('acc-enlaces',   prefs.enlaces);
}

/* ─── Botón de opción del panel ──────────────────────── */
const OpcionBtn: React.FC<{
  activo: boolean;
  onClick: () => void;
  icono: string;   // clase gob-cl (ej: "cl-contrast")
  label: string;
}> = ({ activo, onClick, icono, label }) => (
  <button
    aria-label={label}
    aria-pressed={activo}
    onClick={onClick}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: activo ? '#1a237e' : '#f4f4f8',
      color: activo ? '#fff' : '#333',
      border: `1px solid ${activo ? '#1a237e' : '#ddd'}`,
      borderRadius: '8px',
      padding: '9px 12px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: activo ? 600 : 400,
      transition: 'all 0.15s',
      textAlign: 'left',
    }}
  >
    <i
      className={`cl ${icono}`}
      style={{ fontSize: '16px', minWidth: '20px', textAlign: 'center', color: activo ? '#fff' : '#555' }}
      aria-hidden="true"
    />
    {label}
  </button>
);

/* ─── Componente principal ────────────────────────────── */
const AccessibilityBar: React.FC = () => {
  const [prefs, setPrefs]     = useState<AccPrefs>(cargarPrefs);
  const [abierto, setAbierto] = useState(false);
  const panelRef              = useRef<HTMLDivElement>(null);

  useEffect(() => {
    aplicarClases(prefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  useEffect(() => { aplicarClases(cargarPrefs()); }, []);

  /* Cerrar al hacer clic fuera */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    if (abierto) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [abierto]);

  const toggle = (key: keyof Omit<AccPrefs, 'fontSize'>) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  const setFontSize = (size: FontSize) =>
    setPrefs((p) => ({ ...p, fontSize: size }));

  const resetAll = () => setPrefs(defaults);

  const fontLabels   = ['Normal', 'Mediano', 'Grande'];
  const fontSizes    = ['13px', '15px', '17px'];
  const fontClasses  = ['normal', 'md', 'lg'] as FontSize[];

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
      }}
    >
      {/* ── Botón disparador (derecha) ── */}
      <button
        aria-label={abierto ? 'Cerrar opciones de accesibilidad' : 'Abrir opciones de accesibilidad'}
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
        title="Opciones de accesibilidad"
        style={{
          background: '#1a237e',
          border: 'none',
          borderRadius: '10px 0 0 10px',
          padding: '14px 10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '-3px 0 10px rgba(0,0,0,0.25)',
          transition: 'background 0.2s',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#283593')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#1a237e')}
      >
        <i
          className="cl cl-accessibility"
          style={{ fontSize: '26px', color: '#fff', display: 'block' }}
          aria-hidden="true"
        />
      </button>

      {/* ── Panel de opciones (se despliega a la izquierda del botón) ── */}
      <div
        role="dialog"
        aria-label="Opciones de accesibilidad"
        style={{
          background: '#fff',
          borderRadius: '12px 0 0 12px',
          boxShadow: '-4px 4px 20px rgba(0,0,0,0.18)',
          padding: '20px 16px',
          width: '230px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          transition: 'transform 0.25s ease, opacity 0.2s ease',
          transform: abierto ? 'translateX(0)' : 'translateX(20px)',
          opacity: abierto ? 1 : 0,
          pointerEvents: abierto ? 'all' : 'none',
        }}
      >
        {/* Encabezado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <i className="cl cl-accessibility" style={{ fontSize: '20px', color: '#1a237e' }} aria-hidden="true" />
          <span style={{ fontWeight: 700, fontSize: '14px', color: '#1a237e' }}>
            Accesibilidad
          </span>
          <button
            aria-label="Cerrar panel"
            onClick={() => setAbierto(false)}
            style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              cursor: 'pointer', fontSize: '16px', color: '#999', lineHeight: 1, padding: 0,
            }}
          >
            <i className="cl cl-close" style={{ fontSize: '14px' }} aria-hidden="true" />
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: 0 }} />

        {/* Tamaño de texto */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 2px' }}>
          <i className="cl cl-increase-text" style={{ fontSize: '14px', color: '#666' }} aria-hidden="true" />
          <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Tamaño de texto
          </p>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {fontClasses.map((size, i) => (
            <button
              key={size}
              aria-label={`Texto ${fontLabels[i]}`}
              aria-pressed={prefs.fontSize === size}
              onClick={() => setFontSize(size)}
              style={{
                flex: 1,
                background: prefs.fontSize === size ? '#1a237e' : '#f4f4f8',
                color: prefs.fontSize === size ? '#fff' : '#333',
                border: `1px solid ${prefs.fontSize === size ? '#1a237e' : '#ddd'}`,
                borderRadius: '8px',
                padding: '6px 4px',
                cursor: 'pointer',
                fontSize: fontSizes[i],
                fontWeight: 700,
                transition: 'all 0.15s',
              }}
            >
              A
            </button>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: 0 }} />

        {/* Opciones de visualización */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 2px' }}>
          <i className="cl cl-contrast" style={{ fontSize: '14px', color: '#666' }} aria-hidden="true" />
          <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Visualización
          </p>
        </div>

        <OpcionBtn activo={prefs.contraste} onClick={() => toggle('contraste')} icono="cl-contrast"    label="Alto contraste" />
        <OpcionBtn activo={prefs.grises}    onClick={() => toggle('grises')}    icono="cl-img-preview" label="Escala de grises" />
        <OpcionBtn activo={prefs.enlaces}   onClick={() => toggle('enlaces')}   icono="cl-reading"     label="Subrayar enlaces" />

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: 0 }} />

        {/* Restablecer */}
        <button
          aria-label="Restablecer configuración de accesibilidad"
          onClick={resetAll}
          style={{
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '8px 12px',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#888',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#e53935';
            (e.currentTarget as HTMLButtonElement).style.color = '#e53935';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#ddd';
            (e.currentTarget as HTMLButtonElement).style.color = '#888';
          }}
        >
          <i className="cl cl-currency-cycle" style={{ fontSize: '14px' }} aria-hidden="true" />
          Restablecer todo
        </button>
      </div>
    </div>
  );
};

export default AccessibilityBar;
