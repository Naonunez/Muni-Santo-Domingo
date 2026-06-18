import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarruselHero from '../components/CarruselHero';
import CarruselHumedal from '../components/CarruselHumedal';
import CarruselFotos from '../components/CarruselFotos';
import BuscadorGlobal from '../components/BuscadorGlobal';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent scrollEvents>
        <Navbar />

        {/* Hero: frontis de fondo con carrusel de afiches encima */}
        <div style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden' }}>
          <img
            src="/images/frontis.jpeg"
            alt="Municipalidad Santo Domingo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.55) 0%, rgba(10,20,80,0.2) 100%)', zIndex: 1 }} />

          {/* Carrusel de afiches centrado sobre el hero */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.5))',
          }}>
            <CarruselHero />
          </div>
        </div>

        {/* Buscador centrado */}
        <div style={{
          background: '#f0f2f8',
          padding: '28px 20px',
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #dde1ef',
        }}>
          <BuscadorGlobal />
        </div>

        {/* Sección servicios */}
        <div style={{ padding: '2.5rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '1.875rem', fontSize: '1.375rem' }}>
            Servicios Municipales
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }}>
            {[
              { titulo: 'Trámites',  desc: 'Realiza tus trámites municipales en línea',         ruta: '/tramites' },
              { titulo: 'Noticias',  desc: 'Mantente informado de la comuna',                    ruta: '/noticias' },
              { titulo: 'Turismo',   desc: 'Descubre Santo Domingo',                             ruta: '/turismo' },
              { titulo: 'Geoportal', desc: 'Accede al Sistema de Información Geográfica',        href: 'https://geoportal-santodomingo.hub.arcgis.com/' },
              { titulo: 'Contacto',  desc: 'Comunícate con nosotros',                            ruta: '/contacto' },
              { titulo: 'OIRS',      desc: 'Oficina de Información y Reclamos',                  href: 'https://santodomingo.cerofilas.gob.cl/tramites/informativo/235' },
            ].map((item: { titulo: string; desc: string; ruta?: string; href?: string }, i) => {
              const cardStyle: React.CSSProperties = {
                padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px',
                textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s',
                backgroundColor: '#f9f9f9', textDecoration: 'none', display: 'flex',
                flexDirection: 'column', justifyContent: 'center',
              };
              const contenido = (
                <>
                  <h3 style={{ color: '#1a237e', margin: '0 0 0.5rem', fontSize: '1rem' }}>{item.titulo}</h3>
                  <p style={{ color: '#555', margin: 0, fontSize: '0.875rem' }}>{item.desc}</p>
                </>
              );
              const hover = {
                enter: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#e8eaf6';
                  (e.currentTarget as HTMLElement).style.borderColor = '#1a237e';
                },
                leave: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#f9f9f9';
                  (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0';
                },
              };
              if (item.href) {
                return (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    style={cardStyle} onMouseEnter={hover.enter} onMouseLeave={hover.leave}>
                    {contenido}
                  </a>
                );
              }
              return (
                <div key={i} style={cardStyle} onClick={() => history.push(item.ruta!)}
                  onMouseEnter={hover.enter} onMouseLeave={hover.leave}>
                  {contenido}
                </div>
              );
            })}
          </div>
        </div>

        {/* Avisos informativos */}
        <div style={{ padding: '2.5rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.375rem' }}>
            Avisos e Información Municipal
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { src: 'https://santodomingo.cl/wp-content/uploads/2026/04/Licencias-de-conducir-online-1024x130.png',                          alt: 'Licencias de Conducir Online',     href: 'https://agendaenlinea.santodomingo.cl/',                                                      external: true },
              { src: 'https://santodomingo.cl/wp-content/uploads/2026/04/talleres-deportivos-2026-banner-web_page-0001-1024x130.jpg',         alt: 'Talleres Deportivos 2026',         href: 'https://santodomingo.cl/wp-content/uploads/2026/03/Programa-Deportivo-Anual-2026.pdf',       external: true },
              { src: 'https://santodomingo.cl/wp-content/uploads/2025/01/Banner-sitio-web-1-1024x130.png',                                   alt: 'Trámites de Patentes Municipales', href: '/tramites/pagos',                                                                               external: false },
              { src: 'https://santodomingo.cl/wp-content/uploads/2025/12/banner-web-manual-jardineria-v2.jpg',                               alt: 'Guía Práctica para la Mantención', href: 'https://santodomingo.cl/wp-content/uploads/2025/12/guia-jardines-v3-low.pdf',                  external: true },
            ].map((aviso, i) => (
              <a key={i} href={aviso.href} {...(aviso.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ display: 'block', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.10)', transition: 'box-shadow 0.2s, transform 0.2s', lineHeight: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(26,35,126,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <img src={aviso.src} alt={aviso.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Lo que puede pasar si tu perro entra al humedal */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Lo que Puede Pasar si tu Perro Entra al Humedal
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            El Parque Humedal Río Maipo es un Santuario de la Naturaleza. Los perros sin control pueden causar daño irreversible a la fauna y flora del ecosistema.
          </p>
          <CarruselHumedal />
          <div style={{ marginTop: '1.5rem', maxWidth: '960px', margin: '1.5rem auto 0', background: '#fff3e0', borderLeft: '4px solid #e65100', borderRadius: '6px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <i className="cl cl-call-info" style={{ fontSize: '1.125rem', color: '#e65100', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ color: '#444', margin: 0, fontSize: '0.875rem', lineHeight: 1.7 }}>
              El Parque Humedal Río Maipo fue declarado <strong>Santuario de la Naturaleza en 2020</strong>. Ingresar con mascotas sin control pone en riesgo a las más de <strong>115 especies de aves</strong> y la biodiversidad del humedal. Mantén a tu perro con correa y respeta la señalética del parque.
            </p>
          </div>
        </div>

        {/* Información relevante para toda la comunidad */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Información Relevante para Toda la Comunidad
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Para acceder al contenido completo de la auditoría, haz clic sobre la gráfica.
          </p>
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <a href="https://santodomingo.cl/wp-content/uploads/2025/11/Informe-Final-Auditoria-Municipalidad-de-Santo-Domingo-23_08_2025-2.pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.12)', transition: 'box-shadow 0.2s, transform 0.2s', lineHeight: 0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(26,35,126,0.18)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
            >
              <img src="https://santodomingo.cl/wp-content/uploads/2025/12/Copia-de-comunicado-rrss-oficial-1229x1536.png"
                alt="Información relevante para toda la comunidad"
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </a>
          </div>
        </div>

        {/* Carrusel Calendario de Reciclaje en Casa */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Calendario de Reciclaje en Casa
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Consulta los turnos de reciclaje domiciliario para tu sector. Haz clic en una imagen para ampliarla.
          </p>
          <CarruselFotos
            slides={[
              'https://santodomingo.cl/wp-content/uploads/2026/03/01rrss-turnos-reciclaje-marzo2026-240x300.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/02rrss-turnos-reciclaje-marzo2026-240x300.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/03rrss-turnos-reciclaje-marzo2026-240x300.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/04rrss-turnos-reciclaje-marzo2026-240x300.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/05rrss-turnos-reciclaje-marzo2026-240x300.jpg',
            ]}
            itemW={210}
            itemH={265}
            visible={3}
            intervalo={5000}
            label="Calendario de reciclaje en casa"
          />
        </div>

        {/* Recolección de Residuos Sólidos */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Recolección de Residuos Sólidos
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Turnos y sectores del servicio de recolección de basura domiciliaria. Haz clic en una imagen para ampliarla.
          </p>
          <CarruselFotos
            slides={[
              'https://santodomingo.cl/wp-content/uploads/2026/03/01rrss-turnos-residuos-rsd-feb2026.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/02rrss-turnos-residuos-rsd-feb2026.jpg',
              'https://santodomingo.cl/wp-content/uploads/2026/03/03rrss-turnos-residuos-rsd-feb2026.jpg',
            ]}
            itemW={290}
            itemH={210}
            visible={2}
            intervalo={5000}
            label="Turnos recolección de residuos sólidos"
          />
        </div>

        {/* Servicios a la Comunidad */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#fff' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Servicios a la Comunidad
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Accede a los principales servicios y recursos disponibles para los vecinos de Santo Domingo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {([
              { titulo: 'Pagos Municipales',         desc: 'Patentes, permisos y derechos municipales en línea.',                     icono: 'cl-currency-cycle',   href: '/tramites/pagos',       externo: false },
              { titulo: 'Estadísticas OIRS',          desc: 'Consulta el registro de solicitudes de información y reclamos.',          icono: 'cl-document-verified', href: 'https://santodomingo.cl/estadisticas-oirs/', externo: true },
              { titulo: 'Licitaciones Públicas',      desc: 'Ofertas y contratos del mercado público municipal.',                      icono: 'cl-reading',           href: 'https://www.mercadopublico.cl/Portal/FeedOrg.aspx?qs=Ny2kJv9iEv7PNVaVXhQ8bg%3d%3d', externo: true },
              { titulo: 'Manual de Especies Hídricas',desc: 'Guía de especies vegetales de bajo requerimiento hídrico para jardines.', icono: 'cl-reading',           href: 'https://santodomingo.cl/wp-content/uploads/2023/12/manual-especies-bajo-requerimiento-hidrico-REVISADO-RDY-y-DAZ-v3.pdf', externo: true },
              { titulo: 'Recorrido de Buses 2025',    desc: 'Plano del recorrido de transporte público disponible en la comuna.',      icono: 'cl-touch-screen',      href: 'https://santodomingo.cl/wp-content/uploads/2025/01/Recorrido-2025.pdf', externo: true },
              { titulo: 'Subsidios',                  desc: 'SUF, APS, PBS y otros programas de apoyo social.',                        icono: 'cl-give-letter',       href: '/tramites/subsidios',   externo: false },
            ] as { titulo: string; desc: string; icono: string; href: string; externo: boolean }[]).map((item, i) => {
              const contenido = (
                <>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e8edf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.625rem' }}>
                    <i className={`cl ${item.icono}`} style={{ fontSize: '1.125rem', color: '#1565c0' }} />
                  </div>
                  <h3 style={{ color: '#1a237e', margin: '0 0 0.375rem', fontSize: '0.9375rem', fontWeight: 700 }}>{item.titulo}</h3>
                  <p style={{ color: '#555', margin: 0, fontSize: '0.8125rem', lineHeight: 1.6 }}>{item.desc}</p>
                </>
              );
              const cardStyle: React.CSSProperties = {
                background: '#fff', borderRadius: '8px', borderTop: '3px solid #1565c0',
                padding: '1.375rem', boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
                display: 'flex', flexDirection: 'column', cursor: 'pointer',
                transition: 'box-shadow 0.2s, transform 0.2s', textDecoration: 'none',
              };
              const hoverIn  = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(26,35,126,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; };
              const hoverOut = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 6px rgba(0,0,0,0.07)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; };
              return item.externo
                ? <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{contenido}</a>
                : <a key={i} href={item.href} style={cardStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{contenido}</a>;
            })}
          </div>
        </div>

        {/* Plano de Evacuación ante Amenaza de Tsunami */}
        <div style={{ padding: '3rem 3.75rem', backgroundColor: '#f5f7fa' }}>
          <h2 style={{ color: '#1a237e', textAlign: 'center', marginBottom: '0.5rem', fontSize: '1.375rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Plano de Evacuación ante Amenaza de Tsunami
          </h2>
          <p style={{ color: '#555', textAlign: 'center', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Conoce las rutas y zonas de evacuación ante una amenaza de tsunami en la comuna de Santo Domingo.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}>
              <img
                src="https://santodomingo.cl/wp-content/uploads/2024/10/DJI_0331-1024x621.jpg"
                alt="Vista aérea Santo Domingo - plano de evacuación tsunami"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, margin: 0 }}>
                La Municipalidad de Santo Domingo ha elaborado un mapa oficial de evacuación con las rutas y zonas seguras ante una amenaza de tsunami en el borde costero de la comuna.
              </p>
              <p style={{ color: '#444', fontSize: '0.9375rem', lineHeight: 1.8, margin: 0 }}>
                Es fundamental que todos los vecinos y visitantes de la zona costera conozcan las vías de evacuación y los puntos de encuentro establecidos por Defensa Civil.
              </p>
              <a
                href="https://santodomingo.cl/wp-content/uploads/2024/10/SANTO-DOMINGO-mapa-evacuacion-tsunami.pdf"
                target="_blank" rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1565c0', color: '#fff', padding: '0.625rem 1.75rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
              >
                <i className="cl cl-document-verified" style={{ fontSize: '0.875rem' }} />
                Descargar mapa de evacuación
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociales + Estaciones Meteorológicas */}
        <div style={{ backgroundColor: '#1a237e', padding: '3rem 3.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '960px', margin: '0 auto' }}>

            {/* Redes Sociales */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Redes Sociales
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Síguenos en nuestras redes sociales para mantenerte informado de las últimas noticias y actividades de la Municipalidad de Santo Domingo.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icono: 'cl-facebook',  label: 'Facebook',  sub: '/santodomingocl', href: 'https://www.facebook.com/santodomingocl' },
                  { icono: 'cl-instagram', label: 'Instagram', sub: '@santodomingocl', href: 'https://www.instagram.com/santodomingocl/' },
                  { icono: 'cl-youtube',   label: 'YouTube',   sub: '@santodomingopuntocl', href: 'https://www.youtube.com/@santodomingopuntocl' },
                ].map((red, i) => (
                  <a key={i} href={red.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem 1rem', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.15)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.08)')}
                  >
                    <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`cl ${red.icono}`} style={{ fontSize: '1.125rem', color: '#fff' }} />
                    </div>
                    <div>
                      <p style={{ color: '#fff', margin: 0, fontWeight: 700, fontSize: '0.875rem' }}>{red.label}</p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.75rem' }}>{red.sub}</p>
                    </div>
                    <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Estaciones Meteorológicas */}
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Estaciones Meteorológicas
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Consulta las condiciones climáticas en tiempo real en los distintos sectores de la comuna.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                {['Mostazal', 'Bucalemito', 'San Guillermo', 'San Enrique', 'Bucalemu', 'El Convento', 'Las Salinas'].map((s) => (
                  <span key={s} style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', padding: '0.2rem 0.625rem', borderRadius: '20px', fontSize: '0.75rem' }}>{s}</span>
                ))}
              </div>
              <a href="https://www.ecowitt.net/home/share?authorize=052NRG" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}
              >
                <i className="cl cl-arrow-right" style={{ fontSize: '0.75rem' }} /> Ver datos en tiempo real
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
