import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface ItemBusqueda {
  titulo: string;
  descripcion: string;
  ruta: string;
  categoria: string;
  palabrasClave?: string;
}

const ITEMS: ItemBusqueda[] = [
  /* ── Navegación ── */
  { titulo: 'Inicio', descripcion: 'Página principal de la municipalidad', ruta: '/home', categoria: 'Navegación', palabrasClave: 'home portada principal' },
  { titulo: 'Noticias', descripcion: 'Últimas noticias de la comuna', ruta: '/noticias', categoria: 'Navegación', palabrasClave: 'novedades comunicados prensa' },
  { titulo: 'Contacto', descripcion: 'Comunícate con la municipalidad', ruta: '/contacto', categoria: 'Navegación', palabrasClave: 'teléfono dirección correo email mapa' },
  { titulo: 'OIRS', descripcion: 'Oficina de Información, Reclamos y Sugerencias', ruta: '/oirs', categoria: 'Navegación', palabrasClave: 'reclamo sugerencia información oficina' },

  /* ── Municipio ── */
  { titulo: 'Autoridades', descripcion: 'Alcalde y concejales del municipio', ruta: '/autoridades', categoria: 'Municipio', palabrasClave: 'alcalde concejal gobierno municipal' },
  { titulo: 'Direcciones municipales', descripcion: 'Unidades y direcciones del municipio', ruta: '/direcciones', categoria: 'Municipio', palabrasClave: 'departamento unidad oficina' },

  /* ── Trámites ── */
  { titulo: 'Dirección de Obras', descripcion: 'Permisos de edificación, subdivisiones y recepciones', ruta: '/tramites/direccion-obras', categoria: 'Trámites', palabrasClave: 'construcción edificación permiso obra plano' },
  { titulo: 'Medio Ambiente, Aseo y Ornato', descripcion: 'Trámites de aseo, reciclaje y áreas verdes', ruta: '/tramites/medio-ambiente', categoria: 'Trámites', palabrasClave: 'basura reciclaje árbol jardín aseo ornato ambiental' },
  { titulo: 'Dirección de Tránsito', descripcion: 'Licencias de conducir y revisión técnica', ruta: '/tramites/transito', categoria: 'Trámites', palabrasClave: 'licencia conducir vehículo automóvil revisión técnica' },
  { titulo: 'Juzgado de Policía Local', descripcion: 'Infracciones, multas y mediación', ruta: '/tramites/juzgado', categoria: 'Trámites', palabrasClave: 'multa infracción parte juzgado policía' },
  { titulo: 'Becas municipales', descripcion: 'Postulación a becas de estudio', ruta: '/tramites/becas', categoria: 'Trámites', palabrasClave: 'beca estudio escolar universitario educación' },
  { titulo: 'Subsidios', descripcion: 'Subsidios y ayudas sociales', ruta: '/tramites/subsidios', categoria: 'Trámites', palabrasClave: 'subsidio ayuda social beneficio asistencia' },
  { titulo: 'OMIL', descripcion: 'Oficina Municipal de Intermediación Laboral', ruta: '/tramites/omil', categoria: 'Trámites', palabrasClave: 'trabajo empleo laboral oferta capacitación' },
  { titulo: 'Pagos en línea', descripcion: 'Pago de patentes, contribuciones y derechos', ruta: '/tramites/pagos', categoria: 'Trámites', palabrasClave: 'pago patente contribución derecho deuda' },
  { titulo: 'Certificados', descripcion: 'Solicitud de certificados municipales', ruta: '/tramites/certificados', categoria: 'Trámites', palabrasClave: 'certificado residencia domicilio acreditación' },

  /* ── Turismo ── */
  { titulo: 'Atractivos Patrimoniales y Culturales', descripcion: 'Patrimonio histórico y cultura local', ruta: '/turismo/patrimonial', categoria: 'Turismo', palabrasClave: 'patrimonio historia cultura iglesia monumento' },
  { titulo: 'Atractivos Naturales', descripcion: 'Playas, cerros y paisajes de Santo Domingo', ruta: '/turismo/naturales', categoria: 'Turismo', palabrasClave: 'playa mar cerro naturaleza paisaje campo' },

  /* ── Plan Regulador ── */
  { titulo: 'Plan Regulador Comunal', descripcion: 'Normativa de uso de suelo y zonificación', ruta: '/plan-regulador/comunal', categoria: 'Plan Regulador', palabrasClave: 'suelo zonificación terreno uso zona norma' },
  { titulo: 'Ordenanzas Municipales', descripcion: 'Ordenanzas y reglamentos vigentes', ruta: '/plan-regulador/ordenanzas', categoria: 'Plan Regulador', palabrasClave: 'ordenanza reglamento normativa ley municipal' },
  { titulo: 'Instrumentos de Planificación Territorial', descripcion: 'Documentos de planificación del territorio', ruta: '/plan-regulador/instrumentos', categoria: 'Plan Regulador', palabrasClave: 'planificación territorio mapa plano catastro' },

  /* ── Transparencia ── */
  { titulo: 'Transparencia Activa', descripcion: 'Información pública de la municipalidad', ruta: '/home', categoria: 'Transparencia', palabrasClave: 'transparencia pública información acceso documentos presupuesto' },
  { titulo: 'Ley de Lobby', descripcion: 'Plataforma Ley Lobby', ruta: '/home', categoria: 'Transparencia', palabrasClave: 'lobby audiencias gestiones' },
  { titulo: 'Decretos municipales', descripcion: 'Decretos y actos administrativos', ruta: '/home', categoria: 'Transparencia', palabrasClave: 'decreto acto administrativo resolución' },
];

function destacar(texto: string, query: string) {
  if (!query.trim()) return <>{texto}</>;
  const idx = texto.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{texto}</>;
  return (
    <>
      {texto.slice(0, idx)}
      <mark style={{ background: '#ffd54f', color: '#000', borderRadius: '2px', padding: '0 1px' }}>
        {texto.slice(idx, idx + query.length)}
      </mark>
      {texto.slice(idx + query.length)}
    </>
  );
}

const BuscadorGlobal: React.FC = () => {
  const [query, setQuery]           = useState('');
  const [resultados, setResultados] = useState<ItemBusqueda[]>([]);
  const [activo, setActivo]         = useState(-1);
  const [abierto, setAbierto]       = useState(false);
  const wrapRef                     = useRef<HTMLDivElement>(null);
  const inputRef                    = useRef<HTMLInputElement>(null);
  const history                     = useHistory();

  /* Filtrado predictivo */
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResultados([]); setAbierto(false); return; }
    const found = ITEMS.filter(
      (item) =>
        item.titulo.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q) ||
        (item.palabrasClave ?? '').toLowerCase().includes(q)
    ).slice(0, 8);
    setResultados(found);
    setAbierto(found.length > 0);
    setActivo(-1);
  }, [query]);

  /* Cerrar al hacer clic fuera */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const ir = (ruta: string) => {
    setQuery('');
    setAbierto(false);
    history.push(ruta);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!abierto) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActivo((v) => Math.min(v + 1, resultados.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActivo((v) => Math.max(v - 1, 0));
    } else if (e.key === 'Enter' && activo >= 0) {
      ir(resultados[activo].ruta);
    } else if (e.key === 'Escape') {
      setAbierto(false);
    }
  };

  /* Agrupar por categoría para mostrar */
  const porCategoria = resultados.reduce<Record<string, ItemBusqueda[]>>((acc, item) => {
    (acc[item.categoria] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%', maxWidth: '620px' }}>

      {/* ── Input ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: abierto && resultados.length > 0 ? '12px 12px 0 0' : '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        padding: '0 18px',
        gap: '10px',
        transition: 'border-radius 0.15s',
      }}>
        <i className="cl cl-search" style={{ fontSize: '20px', color: '#1a237e', flexShrink: 0 }} aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => { if (resultados.length > 0) setAbierto(true); }}
          placeholder="¿Qué estás buscando? Trámites, noticias, turismo…"
          aria-label="Buscador global de contenidos"
          aria-autocomplete="list"
          aria-expanded={abierto}
          autoComplete="off"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            padding: '16px 0',
            background: 'transparent',
            color: '#1a237e',
            minWidth: 0,
          }}
        />
        {query && (
          <button
            aria-label="Limpiar búsqueda"
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#999', lineHeight: 1, flexShrink: 0 }}
          >
            <i className="cl cl-close" style={{ fontSize: '14px' }} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* ── Dropdown de sugerencias ── */}
      {abierto && resultados.length > 0 && (
        <div
          role="listbox"
          aria-label="Sugerencias de búsqueda"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
            zIndex: 100,
            overflow: 'hidden',
            maxHeight: '360px',
            overflowY: 'auto',
          }}
        >
          {Object.entries(porCategoria).map(([categoria, items]) => (
            <div key={categoria}>
              {/* Encabezado de categoría */}
              <div style={{
                padding: '6px 16px 4px',
                fontSize: '10px',
                fontWeight: 700,
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                background: '#f8f8f8',
                borderTop: '1px solid #f0f0f0',
              }}>
                {categoria}
              </div>

              {items.map((item, i) => {
                const globalIdx = resultados.indexOf(item);
                const estaActivo = globalIdx === activo;
                return (
                  <div
                    key={i}
                    role="option"
                    aria-selected={estaActivo}
                    onClick={() => ir(item.ruta)}
                    onMouseEnter={() => setActivo(globalIdx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 16px',
                      cursor: 'pointer',
                      background: estaActivo ? '#e8eaf6' : '#fff',
                      borderLeft: estaActivo ? '3px solid #1a237e' : '3px solid transparent',
                      transition: 'background 0.1s',
                    }}
                  >
                    <i className="cl cl-search" style={{ fontSize: '14px', color: estaActivo ? '#1a237e' : '#bbb', flexShrink: 0 }} aria-hidden="true" />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a237e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {destacar(item.titulo, query)}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {destacar(item.descripcion, query)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Pie del dropdown */}
          <div style={{ padding: '8px 16px', fontSize: '11px', color: '#aaa', background: '#fafafa', borderTop: '1px solid #f0f0f0', textAlign: 'center' }}>
            {resultados.length} resultado{resultados.length !== 1 ? 's' : ''} · ↑↓ navegar · Enter seleccionar · Esc cerrar
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscadorGlobal;
