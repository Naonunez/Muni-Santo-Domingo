import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleMenuEnter = (menu: string) => setOpenMenu(menu);
  const handleMenuLeave = () => { setOpenMenu(null); setOpenSubmenu(null); };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '4px',
    minWidth: '220px',
    zIndex: 2000,
    padding: '8px 0'
  };

  const itemStyle: React.CSSProperties = {
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '13px',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const submenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderRadius: '4px',
    minWidth: '220px',
    zIndex: 2001,
    padding: '8px 0'
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Barra superior */}
      <div style={{
        backgroundColor: '#f5f5f5', color: '#333', padding: '6px 40px',
        display: 'flex', justifyContent: 'flex-end', gap: '20px',
        fontSize: '12px', borderBottom: '1px solid #ddd', flexWrap: 'wrap'
      }}>
        <span style={{ cursor: 'pointer' }}>Plataforma Ley Lobby</span>
        <span style={{ cursor: 'pointer' }}>Solicitud Ley de Transparencia</span>
        <span style={{ cursor: 'pointer' }}>Transparencia Activa</span>
        <span style={{ cursor: 'pointer' }}>Decretos</span>
        <span style={{ cursor: 'pointer', color: '#e53935', fontWeight: 'bold' }}>
          ▶ Consejo Municipal en VIVO
        </span>
      </div>

      {/* Navbar principal */}
      <div style={{
        backgroundColor: '#fff', padding: '8px 40px',
        display: 'flex', alignItems: 'center', gap: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderBottom: '3px solid #1565c0'
      }}>
        {/* Logo solo imagen */}
        <div style={{ cursor: 'pointer' }} onClick={() => history.push('/home')}>
          <img src="/images/municipalidad.png" alt="Logo" style={{ height: '60px' }} />
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginLeft: '10px', alignItems: 'center' }}>

          {/* Inicio */}
          <span onClick={() => history.push('/home')}
            style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
            Inicio
          </span>

          {/* Municipio */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMenuEnter('municipio')}
            onMouseLeave={handleMenuLeave}>
            <span style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
              Municipio ▾
            </span>
            {openMenu === 'municipio' && (
              <div style={dropdownStyle}>
                {[
                  { label: 'Autoridades', path: '/autoridades' },
                  { label: 'Direcciones', path: '/direcciones' },
                ].map((item, i) => (
                  <div key={i} style={itemStyle}
                    onClick={() => history.push(item.path)}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trámites */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMenuEnter('tramites')}
            onMouseLeave={handleMenuLeave}>
            <span style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
              Trámites ▾
            </span>
            {openMenu === 'tramites' && (
              <div style={dropdownStyle}>

                {/* Trámites por Dirección */}
                <div style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenSubmenu('direccion')}
                  onMouseLeave={() => setOpenSubmenu(null)}>
                  <div style={itemStyle}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    Trámites por Dirección <span>›</span>
                  </div>
                  {openSubmenu === 'direccion' && (
                    <div style={submenuStyle}>
                      {[
                        { label: 'Dirección de Obras', path: '/tramites/direccion-obras' },
                        { label: 'Dirección de Medio Ambiente, Aseo y Ornato', path: '/tramites/medio-ambiente' },
                        { label: 'Dirección de Tránsito', path: '/tramites/transito' },
                        { label: 'Juzgado de Policía Local', path: '/tramites/juzgado' },
                      ].map((item, i) => (
                        <div key={i} style={itemStyle}
                          onClick={() => history.push(item.path)}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Beneficios */}
                <div style={{ position: 'relative' }}
                  onMouseEnter={() => setOpenSubmenu('beneficios')}
                  onMouseLeave={() => setOpenSubmenu(null)}>
                  <div style={itemStyle}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    Beneficios <span>›</span>
                  </div>
                  {openSubmenu === 'beneficios' && (
                    <div style={submenuStyle}>
                      {[
                        { label: 'Becas', path: '/tramites/becas' },
                        { label: 'Subsidios', path: '/tramites/subsidios' },
                        { label: 'OMIL', path: '/tramites/omil' },
                      ].map((item, i) => (
                        <div key={i} style={itemStyle}
                          onClick={() => history.push(item.path)}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div style={itemStyle}
                  onClick={() => history.push('/tramites/pagos')}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  Pagos
                </div>
                <div style={itemStyle}
                  onClick={() => history.push('/tramites/certificados')}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  Certificados
                </div>
              </div>
            )}
          </div>

          {/* Noticias */}
          <span onClick={() => history.push('/noticias')}
            style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
            Noticias
          </span>

          {/* Turismo */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMenuEnter('turismo')}
            onMouseLeave={handleMenuLeave}>
            <span style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
              Turismo ▾
            </span>
            {openMenu === 'turismo' && (
              <div style={dropdownStyle}>
                {[
                  { label: 'Atractivos Patrimoniales y Culturales', path: '/turismo/patrimonial' },
                  { label: 'Atractivos Naturales', path: '/turismo/naturales' },
                ].map((item, i) => (
                  <div key={i} style={itemStyle}
                    onClick={() => history.push(item.path)}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Plan Regulador */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => handleMenuEnter('plan')}
            onMouseLeave={handleMenuLeave}>
            <span style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500' }}>
              Plan Regulador Comunal ▾
            </span>
            {openMenu === 'plan' && (
              <div style={dropdownStyle}>
                {[
                  { label: 'Plan Regulador Comunal', path: '/plan-regulador/comunal' },
                  { label: 'Ordenanzas Municipales', path: '/plan-regulador/ordenanzas' },
                  { label: 'Instrumentos de Planificación Territorial', path: '/plan-regulador/instrumentos' },
                ].map((item, i) => (
                  <div key={i} style={itemStyle}
                    onClick={() => history.push(item.path)}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Links simples */}
          {[
            { label: '🗺 SIG', path: '/sig' },
            { label: '✉ Contacto', path: '/contacto' },
            { label: '💬 OIRS', path: '/oirs' },
          ].map((item, i) => (
            <span key={i} onClick={() => history.push(item.path)}
              style={{ cursor: 'pointer', color: '#222', fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }}>
              {item.label}
            </span>
          ))}

        </nav>
      </div>
    </div>
  );
};

export default Navbar;