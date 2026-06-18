import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu]       = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleMenuEnter = (menu: string) => setOpenMenu(menu);
  const handleMenuLeave = () => { setOpenMenu(null); setOpenSubmenu(null); };

  /* ── Estilos reutilizables ── */
  const navLinkStyle: React.CSSProperties = {
    cursor: 'pointer',
    color: '#222',
    fontSize: '14.5px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 2px',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    lineHeight: 1,
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '4px',
    minWidth: '230px',
    zIndex: 2000,
    padding: '6px 0',
  };

  const dropItemStyle: React.CSSProperties = {
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '13px',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    lineHeight: 1.4,
  };

  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '4px',
    minWidth: '260px',
    zIndex: 2001,
    padding: '6px 0',
  };

  const hoverOn  = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.backgroundColor = '#f0f0f0');
  const hoverOff = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.backgroundColor = 'transparent');

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, fontSize: '16px' }}>

      {/* ── Barra superior ── */}
      <div style={{
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        padding: '0 40px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}>
        {[
          { label: 'Plataforma Ley Lobby',           href: 'https://www.leylobby.gob.cl/instituciones/MU309' },
          { label: 'Solicitud Ley de Transparencia',  href: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=725' },
          { label: 'Transparencia Activa',            href: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU309' },
          { label: 'Decretos',                        href: 'https://datastudio.google.com/u/0/reporting/ae44bf6d-9318-481f-8ec1-b897380a0eed/page/q5BIF' },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '12px', color: '#555', textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#1565c0')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#555')}>
            {item.label}
          </a>
        ))}
        <a href="https://sites.google.com/santodomingo.cl/concejomunicipalsantodomingo/inicio"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', color: '#e53935', fontWeight: 700, textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap' }}>
          ▶ Consejo Municipal en VIVO
        </a>
      </div>

      {/* ── Navbar principal ── */}
      <div style={{
        backgroundColor: '#fff',
        padding: '0 40px',
        height: '76px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderBottom: '3px solid #1565c0',
      }}>
        {/* Logo */}
        <div style={{ cursor: 'pointer' }} onClick={() => history.push('/home')}>
          <img src="/images/municipalidad.png" alt="Logo Municipalidad" style={{ height: '58px', display: 'block' }} />
        </div>

        {/* Nav links — centrados */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', height: '100%', flexWrap: 'nowrap' }}>

          {/* Inicio */}
          <button style={navLinkStyle} onClick={() => history.push('/home')}>Inicio</button>

          {/* Municipio ▾ */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => handleMenuEnter('municipio')} onMouseLeave={handleMenuLeave}>
            <button style={navLinkStyle}>Municipio ▾</button>
            {openMenu === 'municipio' && (
              <div style={dropdownStyle}>
                {[{ label: 'Autoridades', path: '/autoridades' }, { label: 'Direcciones', path: '/direcciones' }]
                  .map((item, i) => (
                    <div key={i} style={dropItemStyle} onClick={() => history.push(item.path)}
                      onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{item.label}</div>
                  ))}
              </div>
            )}
          </div>

          {/* Trámites ▾ — clic navega a /tramites */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => handleMenuEnter('tramites')} onMouseLeave={handleMenuLeave}>
            <button style={navLinkStyle} onClick={() => history.push('/tramites')}>Trámites ▾</button>
            {openMenu === 'tramites' && (
              <div style={dropdownStyle}>
                {/* Trámites por Dirección */}
                <div style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenSubmenu('direccion')} onMouseLeave={() => setOpenSubmenu(null)}>
                  <div style={dropItemStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    Trámites por Dirección <span>›</span>
                  </div>
                  {openSubmenu === 'direccion' && (
                    <div style={submenuStyle}>
                      {[
                        { label: 'Dirección de Obras',                         path: '/tramites/direccion-obras' },
                        { label: 'Dirección de Medio Ambiente, Aseo y Ornato', path: '/tramites/medio-ambiente' },
                        { label: 'Dirección de Tránsito',                      path: '/tramites/transito' },
                        { label: 'Juzgado de Policía Local',                   path: '/tramites/juzgado' },
                      ].map((item, i) => (
                        <div key={i} style={dropItemStyle} onClick={() => history.push(item.path)}
                          onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{item.label}</div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Beneficios */}
                <div style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenSubmenu('beneficios')} onMouseLeave={() => setOpenSubmenu(null)}>
                  <div style={dropItemStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    Beneficios <span>›</span>
                  </div>
                  {openSubmenu === 'beneficios' && (
                    <div style={submenuStyle}>
                      {[
                        { label: 'Becas',     path: '/tramites/becas' },
                        { label: 'Subsidios', path: '/tramites/subsidios' },
                        { label: 'OMIL',      path: '/tramites/omil' },
                      ].map((item, i) => (
                        <div key={i} style={dropItemStyle} onClick={() => history.push(item.path)}
                          onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{item.label}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={dropItemStyle} onClick={() => history.push('/tramites/pagos')}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Pagos</div>
                <div style={dropItemStyle} onClick={() => history.push('/tramites/certificados')}
                  onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Certificados</div>
              </div>
            )}
          </div>

          {/* Noticias */}
          <button style={navLinkStyle} onClick={() => history.push('/noticias')}>Noticias</button>

          {/* Turismo ▾ — clic navega a /turismo */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => handleMenuEnter('turismo')} onMouseLeave={handleMenuLeave}>
            <button style={navLinkStyle} onClick={() => history.push('/turismo')}>Turismo ▾</button>
            {openMenu === 'turismo' && (
              <div style={dropdownStyle}>
                {[
                  { label: 'Atractivos Patrimoniales y Culturales', path: '/turismo/patrimonial' },
                  { label: 'Atractivos Naturales',                  path: '/turismo/naturales' },
                ].map((item, i) => (
                  <div key={i} style={dropItemStyle} onClick={() => history.push(item.path)}
                    onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{item.label}</div>
                ))}
              </div>
            )}
          </div>

          {/* Plan Regulador ▾ */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => handleMenuEnter('plan')} onMouseLeave={handleMenuLeave}>
            <button style={navLinkStyle}>Plan Regulador ▾</button>
            {openMenu === 'plan' && (
              <div style={dropdownStyle}>
                {[
                  { label: 'Plan Regulador Comunal',                    path: '/plan-regulador/comunal' },
                  { label: 'Ordenanzas Municipales',                    path: '/plan-regulador/ordenanzas' },
                  { label: 'Instrumentos de Planificación Territorial', path: '/plan-regulador/instrumentos' },
                ].map((item, i) => (
                  <div key={i} style={dropItemStyle} onClick={() => history.push(item.path)}
                    onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{item.label}</div>
                ))}
              </div>
            )}
          </div>


        </nav>

        {/* Grupo SIG / Contacto / OIRS — columna derecha */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px', height: '100%', paddingLeft: '24px', borderLeft: '1px solid #ddd' }}>
          <a href="https://geoportal-santodomingo.hub.arcgis.com/" target="_blank" rel="noopener noreferrer"
            style={{ ...navLinkStyle, gap: '5px' }}>
            <i className="cl cl-touch-screen" style={{ fontSize: '16px' }} />
            SIG
          </a>

          <button style={{ ...navLinkStyle, gap: '5px' }} onClick={() => history.push('/contacto')}>
            <i className="cl cl-give-letter" style={{ fontSize: '16px' }} />
            Contacto
          </button>

          <a href="https://santodomingo.cerofilas.gob.cl/tramites/informativo/235" target="_blank" rel="noopener noreferrer"
            style={{ ...navLinkStyle, gap: '5px' }}>
            <i className="cl cl-question" style={{ fontSize: '16px' }} />
            OIRS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
