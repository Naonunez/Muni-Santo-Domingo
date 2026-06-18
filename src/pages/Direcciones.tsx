import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Persona = { cargo: string; nombre: string; email: string; telefono: string };
type Direccion = { nombre: string; horario?: string; personas: Persona[] };
type Grupo = { titulo: string; dirs: Direccion[] };

const GRUPOS: Grupo[] = [
  {
    titulo: 'Administración',
    dirs: [
      {
        nombre: 'Administración Municipal',
        personas: [
          { cargo: 'Administrador',     nombre: 'Diego Tobar Malhue',     email: 'dtobar@santodomingo.cl', telefono: '+56 32 238 1685' },
          { cargo: 'Sub Administrador', nombre: 'Cristián Acuña Pontigo', email: 'cacuna@santodomingo.cl', telefono: '' },
        ],
      },
      {
        nombre: 'Dirección de Administración y Finanzas',
        personas: [
          { cargo: 'Directora',                nombre: 'Liliana Riquelme',   email: 'lriquelme@santodomingo.cl',    telefono: '' },
          { cargo: 'Jefa Rentas y Patentes',    nombre: 'Mariela Céspedes',   email: 'mcespedes@santodomingo.cl',    telefono: '+56 32 238 1645' },
          { cargo: 'Derechos de Aseo',          nombre: 'Aldo Rocchiccioli', email: 'arocchiccioli@santodomingo.cl', telefono: '+56 32 238 1647' },
        ],
      },
      {
        nombre: 'Dirección de Recursos Humanos',
        personas: [
          { cargo: 'Directora', nombre: 'Fabiola Mesina Vargas', email: 'fmesina@santodomingo.cl', telefono: '+56 32 238 1603' },
        ],
      },
      {
        nombre: 'Secretaría Municipal (SECMU)',
        personas: [
          { cargo: 'Secretario',        nombre: 'Renzzo Rojas',  email: 'rrojas@santodomingo.cl', telefono: '+56 32 238 1620' },
          { cargo: 'Oficina de Partes', nombre: 'Arturo Malhue', email: 'partes@santodomingo.cl',  telefono: '+56 35 220 0625' },
        ],
      },
      {
        nombre: 'Secretaría Comunal de Planificación (SECPLA)',
        personas: [
          { cargo: 'Directora', nombre: 'Gianina Aracena León', email: 'garacena@santodomingo.cl', telefono: '+56 32 238 1603' },
        ],
      },
    ],
  },
  {
    titulo: 'Control y Jurídico',
    dirs: [
      {
        nombre: 'Dirección de Control Municipal',
        personas: [
          { cargo: 'Directora',          nombre: 'Daisy Ramos Cerda',      email: 'dramos@santodomingo.cl',    telefono: '+56 32 238 1653' },
          { cargo: 'Control Financiero', nombre: 'Samuel Toro Peña',       email: 'storo@santodomingo.cl',     telefono: '+56 32 238 1688' },
          { cargo: 'Auditoría Interna',  nombre: 'Natalie Laggiard Gómez', email: 'nlaggiard@santodomingo.cl', telefono: '+56 32 238 1689' },
        ],
      },
      {
        nombre: 'Dirección de Asesoría Jurídica',
        personas: [
          { cargo: 'Director', nombre: 'Pedro Pablo Campos', email: 'pcamposg@santodomingo.cl', telefono: '+56 32 238 1683' },
        ],
      },
    ],
  },
  {
    titulo: 'Servicios a la Comunidad',
    dirs: [
      {
        nombre: 'Dirección de Desarrollo Comunitario (DIDECO)',
        personas: [
          { cargo: 'Director',  nombre: 'Matías Rodríguez Bravo', email: 'mrodriguezb@santodomingo.cl', telefono: '+56 32 238 1635' },
          { cargo: 'Asistente', nombre: 'Cecilia Araya',          email: 'caraya@santodomingo.cl',      telefono: '' },
        ],
      },
      {
        nombre: 'DAEM — Depto. Administración de Educación Municipal',
        personas: [
          { cargo: 'Director',   nombre: 'Luis Vega M.',  email: 'lvega@santodomingo.cl', telefono: '' },
          { cargo: 'Secretaría', nombre: 'Erika Piña V.', email: 'daem@santodomingo.cl',  telefono: '+56 35 220 0625' },
        ],
      },
      {
        nombre: 'Dirección de Salud',
        personas: [
          { cargo: 'Directora',                        nombre: 'Camila Bertrand', email: 'cbertrand@santodomingo.cl', telefono: '' },
          { cargo: 'CESFAM Fernando Rodríguez Vicuña', nombre: '',                email: '',                          telefono: '+56 35 220 4500' },
        ],
      },
      {
        nombre: 'Dirección de Gestión Territorial',
        personas: [
          { cargo: 'Director',            nombre: 'Sergio Marambio',      email: 'smarambio@santodomingo.cl',   telefono: '' },
          { cargo: 'Fomento Productivo',  nombre: 'Consuelo Mira',        email: 'cmira@santodomingo.cl',       telefono: '+56 32 238 1640' },
          { cargo: 'Deportes',            nombre: 'Víctor Meneses',       email: 'vmeneses@santodomingo.cl',    telefono: '+56 32 238 1643' },
          { cargo: 'Cultura',             nombre: 'Constanza Monasterio', email: 'cmonasterio@santodomingo.cl', telefono: '+56 32 238 1641' },
        ],
      },
    ],
  },
  {
    titulo: 'Obras, Tránsito y Medio Ambiente',
    dirs: [
      {
        nombre: 'Dirección de Obras Municipales',
        personas: [
          { cargo: 'Directora',               nombre: 'Isabel Ampuero',         email: 'dom@santodomingo.cl',           telefono: '+56 32 238 1648' },
          { cargo: 'Revisor de Expedientes',  nombre: 'Gisvanny Alburquenque',  email: 'galburquenque@santodomingo.cl', telefono: '+56 32 238 1649' },
          { cargo: 'ITO Obras',               nombre: 'Carmen Gloria Miranda',  email: 'cmiranda@santodomingo.cl',      telefono: '+56 32 238 1650' },
        ],
      },
      {
        nombre: 'Dirección de Tránsito',
        horario: 'Lun–Vie 08:45–14:00 · Sáb 09:30–13:30',
        personas: [
          { cargo: 'Director',                nombre: 'Rodrigo Ovalle', email: 'rovalle@santodomingo.cl',       telefono: '' },
          { cargo: 'Licencias',               nombre: 'Carolina Pino',  email: 'licencias@santodomingo.cl',     telefono: '' },
          { cargo: 'Permisos de Circulación', nombre: 'Rosa Gómez',     email: 'pcirculacion@santodomingo.cl',  telefono: '' },
        ],
      },
      {
        nombre: 'Dirección de Medioambiente, Aseo y Ornato (DIMAO)',
        personas: [
          { cargo: 'Directora',             nombre: 'Mónica González', email: 'mgonzalez@santodomingo.cl', telefono: '+56 32 238 1670' },
          { cargo: 'Medio Ambiente',        nombre: 'Manuel Álvarez',  email: 'malvarez@santodomingo.cl',  telefono: '+56 32 238 1667' },
          { cargo: 'Residuos y Reciclaje',  nombre: 'Macarena Pozo',   email: 'mpozo@santodomingo.cl',     telefono: '+56 32 238 1663' },
          { cargo: 'Paisajismo',            nombre: 'Claudio Alarcón', email: 'calarcon@santodomingo.cl',  telefono: '+56 32 238 1665' },
          { cargo: 'Zoonosis',              nombre: 'Matías Silva',    email: 'msilvaa@santodomingo.cl',   telefono: '+56 32 238 1664' },
        ],
      },
    ],
  },
  {
    titulo: 'Seguridad y Gestión de Riesgos',
    dirs: [
      {
        nombre: 'Dirección de Seguridad Pública',
        personas: [
          { cargo: 'Director',             nombre: 'Patricio Reyes Zamorano', email: 'preyes@santodomingo.cl',  telefono: '' },
          { cargo: 'Gestión Comunitaria',  nombre: 'Paulina Donoso',          email: 'pdonoso@santodomingo.cl', telefono: '+56 32 238 1687' },
        ],
      },
      {
        nombre: 'Dirección de Gestión de Riesgos de Desastres',
        personas: [
          { cargo: 'Directora', nombre: 'Mercedes Martínez',  email: 'mmartinez@santodomingo.cl', telefono: '' },
          { cargo: 'Asistente', nombre: 'María Ester Bustos', email: 'mbustos@santodomingo.cl',   telefono: '+56 35 220 0657' },
        ],
      },
    ],
  },
  {
    titulo: 'Judicial y Operaciones',
    dirs: [
      {
        nombre: 'Juzgado de Policía Local',
        horario: 'Audiencias: Lun, Mié, Vie 10:00–13:00',
        personas: [
          { cargo: 'Jueza',      nombre: 'Pilar Herrera Acuña', email: '',                      telefono: '+56 32 238 1693' },
          { cargo: 'Secretaria', nombre: 'Claudia Urra Rojas',  email: 'curra@santodomingo.cl', telefono: '+56 32 238 1694' },
        ],
      },
      {
        nombre: 'Dirección de Operaciones y Apoyo Logístico',
        personas: [
          { cargo: 'Director', nombre: 'César Yantén', email: 'cyanten@santodomingo.cl', telefono: '+56 35 244 3171' },
        ],
      },
    ],
  },
];

const Direcciones: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Navbar />

        {/* Hero — mismo estilo que Autoridades */}
        <div style={{
          position: 'relative', width: '100%', height: '420px',
          overflow: 'hidden', borderBottomRightRadius: '60px',
        }}>
          <img
            src="/images/autoridades.jpeg"
            alt="Direcciones Municipales"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,20,80,0.72) 40%, rgba(10,20,80,0.15) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '50px', left: '60px', color: '#fff', maxWidth: '520px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem', lineHeight: 1.1, textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
              Direcciones Municipales
            </h1>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6, textShadow: '1px 1px 4px rgba(0,0,0,0.4)', opacity: 0.9 }}>
              En esta sección encontrará toda la información de nuestras direcciones
            </p>
          </div>
        </div>

        {/* Grupos de direcciones */}
        <div style={{ padding: '50px 60px', backgroundColor: '#f9f9f9' }}>
          {GRUPOS.map((grupo, gi) => (
            <div key={gi} style={{ marginBottom: gi < GRUPOS.length - 1 ? '48px' : 0 }}>

              {/* Título del grupo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '4px', height: '28px', backgroundColor: '#1565c0', borderRadius: '2px', flexShrink: 0 }} />
                <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 800, color: '#1a237e', letterSpacing: '0.3px' }}>
                  {grupo.titulo}
                </h2>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#dde1ef' }} />
              </div>

              {/* Tarjetas de este grupo */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '20px',
              }}>
                {grupo.dirs.map((dir, di) => (
                  <div key={di} style={{
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: '1px solid #e4e8f0',
                    overflow: 'hidden',
                  }}>
                    {/* Cabecera */}
                    <div style={{ backgroundColor: '#1565c0', padding: '12px 18px' }}>
                      <h3 style={{ margin: 0, color: '#fff', fontSize: '0.875rem', fontWeight: 700, lineHeight: 1.4 }}>
                        {dir.nombre}
                      </h3>
                      {dir.horario && (
                        <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                          🕐 {dir.horario}
                        </p>
                      )}
                    </div>

                    {/* Personas */}
                    <div style={{ padding: '6px 0' }}>
                      {dir.personas.map((p, pi) => (
                        <div key={pi} style={{
                          padding: '9px 18px',
                          borderBottom: pi < dir.personas.length - 1 ? '1px solid #f0f2f8' : 'none',
                        }}>
                          <p style={{ margin: '0 0 2px', fontSize: '0.6875rem', color: '#1565c0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {p.cargo}
                          </p>
                          {p.nombre && (
                            <p style={{ margin: '0 0 4px', fontSize: '0.875rem', fontWeight: 600, color: '#1a1a2e' }}>
                              {p.nombre}
                            </p>
                          )}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '2px' }}>
                            {p.email && (
                              <a href={`mailto:${p.email}`} style={{ fontSize: '0.75rem', color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#1565c0')}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#555')}>
                                ✉ {p.email}
                              </a>
                            )}
                            {p.telefono && (
                              <a href={`tel:${p.telefono.replace(/\s/g, '')}`} style={{ fontSize: '0.75rem', color: '#555', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#1565c0')}
                                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#555')}>
                                📞 {p.telefono}
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Direcciones;
