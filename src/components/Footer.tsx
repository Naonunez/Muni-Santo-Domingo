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
            'Plataforma Ley Lobby',
            'Solicitud Ley de Transparencia',
            'Transparencia Activa',
            'Consejo Municipal en VIVO',
            'Registro de Organizaciones Comunitarias',
            'Constituciones y Elecciones Organizaciones Comunitarias'
          ].map((item, i) => (
            <p key={i} style={{
              fontSize: '13px',
              margin: '6px 0',
              cursor: 'pointer',
              color: i === 3 ? '#ffeb3b' : '#fff'
            }}>{item}</p>
          ))}
        </div>

        {/* Columna 3 - Links */}
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>Links</h4>
          {[
            'Subsidios',
            'Beneficios',
            'Pagos',
            'Certificados',
            'Web Anterior',
            'Gestor Documental'
          ].map((item, i) => (
            <p key={i} style={{ fontSize: '13px', margin: '6px 0', cursor: 'pointer' }}>{item}</p>
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
            {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((red, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '6px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer'
              }}>{red[0]}</div>
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
