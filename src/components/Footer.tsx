const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1565c0', color: '#fff', padding: '40px 60px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        marginBottom: '30px'
      }}>

        {/* Columna 1 - Info */}
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <img src="/images/transformadoras.jpeg" alt="Logo" style={{ height: '80px', borderRadius: '8px' }} />
          </div>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>
            <strong>Dirección:</strong> Avenida Santa Teresa Nº1.
          </p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>
            <strong>Horario de atención:</strong>
          </p>
          <p style={{ fontSize: '13px', margin: '2px 0' }}>– Lunes a Viernes: 08:45 am a 14:00 pm</p>
          <p style={{ fontSize: '13px', margin: '2px 0' }}>– Sábado: 09:30 am a 13:30 pm</p>
          <p style={{ fontSize: '13px', margin: '8px 0' }}>
            <strong>Emergencias 24 horas:</strong><br />
            +563 2238 1603 - +563 5220 4200
          </p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>Seguridad: 1458</p>
          <p style={{ fontSize: '13px', margin: '4px 0' }}>contacto@santodomingo.cl</p>
        </div>

        {/* Columna 2 - Transparencia */}
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>Transparencia</h4>
          {[
            { label: 'Plataforma Ley Lobby',                                          href: 'https://www.leylobby.gob.cl/instituciones/MU309' },
            { label: 'Solicitud Ley de Transparencia',                                href: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=725' },
            { label: 'Transparencia Activa',                                          href: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU309' },
            { label: 'Consejo Municipal en VIVO',                                     href: 'https://sites.google.com/santodomingo.cl/concejomunicipalsantodomingo/inicio', highlight: true },
            { label: 'Registro de Organizaciones Comunitarias',                       href: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU309&pagina=57519561' },
            { label: 'Constituciones y Elecciones Organizaciones Comunitarias',       href: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU309&pagina=57519347' },
            { label: 'Decretos',                                                       href: 'https://datastudio.google.com/u/0/reporting/ae44bf6d-9318-481f-8ec1-b897380a0eed/page/q5BIF' },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'block',
              fontSize: '13px',
              margin: '6px 0',
              color: item.highlight ? '#ffeb3b' : '#fff',
              textDecoration: 'none',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}
            >{item.label}</a>
          ))}
        </div>

        {/* Columna 3 - Links */}
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>Links</h4>
          {[
            { label: 'Geoportal / SIG', href: 'https://geoportal-santodomingo.hub.arcgis.com/' },
            { label: 'Subsidios',       href: '#' },
            { label: 'Beneficios',      href: '#' },
            { label: 'Pagos',           href: '#' },
            { label: 'Certificados',    href: '#' },
            { label: 'Web Anterior',      href: 'https://webanterior.santodomingo.cl/' },
            { label: 'Gestor Documental', href: 'https://santodomingo.api-ux.com/docux/' },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ display: 'block', fontSize: '13px', margin: '6px 0', color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none')}
            >{item.label}</a>
          ))}
        </div>

        {/* Columna 4 - Síguenos */}
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>Síguenos</h4>
          <p style={{ fontSize: '13px', marginBottom: '15px' }}>
            Siempre conectados! más info a través de nuestras redes sociales
          </p>
          <img src="/images/sumate.jpeg" alt="Súmate" style={{ width: '120px', borderRadius: '8px', marginBottom: '15px' }} />
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: 'cl-facebook',  label: 'Facebook',  href: 'https://web.facebook.com/santodomingocl' },
              { icon: 'cl-instagram', label: 'Instagram', href: 'https://www.instagram.com/santodomingocl/' },
              { icon: 'cl-youtube',   label: 'YouTube',   href: 'https://www.youtube.com/@santodomingopuntocl' },
              { icon: 'cl-twitter',   label: 'Twitter',   href: 'https://x.com/santodomingocl' },
            ].map((red, i) => (
              <a key={i} href={red.href} target="_blank" rel="noopener noreferrer" title={red.label}
                style={{
                  width: '38px', height: '38px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', textDecoration: 'none', fontSize: '18px',
                  transition: 'background-color 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.35)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.2)')}
              >
                <i className={`cl ${red.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.3)',
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px'
      }}>
        <span>Copyright © 2026 I. Municipalidad de Santo Domingo</span>
        <span>I. Municipalidad de Santo Domingo</span>
      </div>
    </footer>
  );
};

export default Footer;
