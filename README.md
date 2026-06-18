# Municipalidad de Santo Domingo — Plataforma Web y Móvil

Plataforma digital para la Municipalidad de Santo Domingo que permite a los ciudadanos acceder a trámites, noticias, información turística, reportar problemas en la comuna y recibir notificaciones al correo cuando su reporte es atendido. Los administradores municipales gestionan contenido y reportes desde un panel dedicado.

## Paralelo

ICI 4247 — Paralelo 1

---

## Integrantes

- Naomi Nuñez
- Robert Houter
- Anibal Aravena

---

## Enlaces del Proyecto

- **Repositorio:** [https://github.com/Naonunez/Muni-Santo-Domingo](https://github.com/Naonunez/Muni-Santo-Domingo)
- **Figma (Diseño):** [Ver diseño](https://www.figma.com/design/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=0-1&t=ZIbDiIUoXFRPuTRy-1)
- **Figma (Prototipo Web):** [Ver prototipo web](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=54-2&starting-point-node-id=54%3A2&t=yMJ40qVSxXDD8G3O-1)
- **Figma (Prototipo Móvil):** [Ver prototipo móvil](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=9-4&p=f&t=yXDnBhj1tTYoMy85-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A3&starting-point-node-id=9%3A4)

---

## Justificación del Problema

La web oficial de la Municipalidad de Santo Domingo presenta una estructura de navegación compleja y jerarquía visual confusa, lo que genera barreras para ciudadanos con baja alfabetización digital, especialmente adultos mayores. Esta plataforma rediseña la experiencia priorizando accesibilidad, simplicidad y tiempo de respuesta.

**Usuarios objetivo:**
- **Ciudadano (adulto mayor, 55+):** Nivel tecnológico básico. Necesita botones grandes, navegación simple y acceso directo a trámites y noticias.
- **Administrador municipal (25–50 años):** Nivel tecnológico intermedio-avanzado. Gestiona contenido, reportes y usuarios desde un panel ordenado.

---

## Herramientas Utilizadas

| Capa | Tecnología |
|------|-----------|
| Frontend | Ionic 8 + React 19 + TypeScript |
| Backend | Node.js + Express 5 |
| Base de Datos | MySQL 8.0 |
| Autenticación | JWT + bcryptjs |
| HTTP Client | Axios (interceptores JWT) |
| Mapas | Leaflet + OpenStreetMap |
| Email | Nodemailer (SMTP) |
| Seguridad frontend | DOMPurify |
| Seguridad backend | xss, Helmet, rate-limit, CORS |
| Despliegue | Docker + Docker Compose + Nginx |

---

## Requerimientos Funcionales

| # | Requerimiento | Rol |
|---|--------------|-----|
| RF1 | Visualizar noticias municipales publicadas | Ciudadano / Público |
| RF2 | Crear, editar y eliminar noticias | Administrador |
| RF3 | Crear reportes de problemas en la comuna (alumbrado, baches, etc.) | Ciudadano |
| RF4 | Revisar y cambiar estado de reportes (pendiente → en revisión → resuelto) | Administrador |
| RF5 | Registro de usuarios con RUT, correo, región y comuna | Ciudadano |
| RF6 | Inicio de sesión con diferenciación de roles (ciudadano / administrador) | Ambos |
| RF7 | Acceso a información de trámites municipales por dirección (Obras, DIMAO, Tránsito, etc.) | Público |
| RF8 | Consulta del Plan Regulador Comunal y ordenanzas | Público |
| RF9 | Guía turística interactiva (atractivos patrimoniales y naturales) | Público |
| RF10 | Ver perfil personal con datos de cuenta | Ciudadano |

## Requerimientos No Funcionales

| # | Requerimiento | Tipo |
|---|--------------|------|
| RNF1 | Autenticación segura con JWT (expiración 2h) y hash bcrypt para contraseñas | Seguridad |
| RNF2 | Rutas protegidas por rol en frontend y middleware de autorización en backend | Seguridad |
| RNF3 | Diseño responsive adaptado a móvil y web con Ionic (`IonSplitPane`) | Usabilidad |
| RNF4 | Tiempos de carga bajo 2 segundos para páginas informativas (caché localStorage) | Rendimiento |

---

## Estructura del Proyecto

```
Muni-Santo-Domingo/
├── frontend/                     # Frontend Ionic + React
│   ├── src/
│   │   ├── pages/                # 23+ vistas (Home, Tramites, Noticias, Dashboard, Admin…)
│   │   ├── components/           # Navbar, Footer, PrivateRoute, CarruselFotos, CarruselHumedal
│   │   ├── routes/               # AppRoutes.tsx (IonSplitPane + IonMenu por rol)
│   │   └── services/
│   │       ├── api.ts            # Axios + interceptores JWT (redirige a /login en 401)
│   │       └── notificaciones.ts # Detecta cambios de estado en reportes (localStorage)
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── ionic.config.json
│   ├── capacitor.config.ts
│   ├── nginx.conf                # Proxy /api/* → backend:5000
│   ├── Dockerfile                # Multi-stage Vite → Nginx
│   └── package.json
├── backend/                      # API REST Node.js + Express
│   ├── routes/                   # auth.js | noticias.js | reportes.js | usuarios.js
│   ├── middlewares/              # authMiddleware.js (JWT + roles)
│   ├── services/
│   │   └── email.js              # Nodemailer — envío de notificaciones por email
│   ├── db.js                     # Conexión MySQL
│   ├── index.js                  # Servidor principal
│   ├── schema.sql                # Esquema de base de datos + 6 índices de rendimiento
│   └── .env.example              # Variables de entorno de ejemplo
├── docker-compose.yml            # Orquesta db + backend + frontend
├── README.md
└── otros/
    ├── arquitectura_navegacion.md
    └── postman_collection.json   # Colección de pruebas de endpoints
```

---

## Instalación y Ejecución

> **Nota:** Para ejecutar con Docker, todos los comandos se corren desde la **raíz del proyecto** (`docker-compose up --build`). Para ejecución local manual, el frontend requiere `cd frontend` antes de instalar dependencias y levantar el servidor de desarrollo.

###  Ejecución local manual

#### Requisitos previos

- Node.js 18+
- MySQL Server (XAMPP, WampServer o MySQL Workbench)

#### 1. Clonar el repositorio

```bash
git clone https://github.com/Naonunez/Muni-Santo-Domingo.git
cd Muni-Santo-Domingo
```

#### 2. Configurar la Base de Datos

Abrir MySQL y ejecutar el archivo de esquema:

```sql
source backend/schema.sql
```

Esto crea la base de datos `muni_santo_domingo` con las tablas `usuarios`, `noticias` y `reportes`, más 6 índices de rendimiento.

#### 3. Configurar el Backend

```bash
cd backend
cp .env.example .env
```

Editar `.env` con tus credenciales:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=muni_santo_domingo
JWT_SECRET=un_secreto_seguro_minimo_32_chars
FRONTEND_URL=http://localhost:5173

# Opcional: notificaciones por email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password_16_chars
```

```bash
npm install
node index.js
# → Servidor en http://localhost:5000
```

#### 4. Configurar el Frontend

```bash
cd ../frontend
npm install
npm run dev
# → Aplicación en http://localhost:5173
```

#### 5. Crear un usuario administrador

Usar el endpoint de registro con Postman (ver `otros/postman_collection.json`) enviando `"rol": "administrador"` en el cuerpo de la petición, o registrarse normalmente en la app (el rol por defecto es `ciudadano`).

---

## Rutas de la Aplicación

### Rutas Públicas

| Ruta | Vista |
|------|-------|
| `/home` | Página principal |
| `/noticias` | Noticias municipales |
| `/noticias/:id` | Detalle de noticia |
| `/autoridades` | Autoridades y COSOC |
| `/contacto` | Información de contacto + mapa |
| `/login` | Inicio de sesión |
| `/register` | Registro de ciudadano |
| `/tramites` | Catálogo de trámites |
| `/tramites/direccion-obras` | Dirección de Obras |
| `/tramites/medio-ambiente` | DIMAO |
| `/tramites/transito` | Dirección de Tránsito |
| `/tramites/juzgado` | Juzgado de Policía Local |
| `/tramites/becas` | Becas Municipales |
| `/tramites/subsidios` | Subsidios |
| `/tramites/omil` | OMIL |
| `/tramites/pagos` | Pagos Municipales |
| `/tramites/certificados` | Certificados |
| `/turismo` | Turismo |
| `/turismo/patrimonial` | Atractivos Patrimoniales |
| `/turismo/naturales` | Atractivos Naturales |
| `/plan-regulador/comunal` | Plan Regulador Comunal |
| `/plan-regulador/ordenanzas` | Ordenanzas Municipales |
| `/plan-regulador/instrumentos` | Instrumentos de Planificación |
| `/direcciones` | Direcciones Municipales |

### Rutas Protegidas (requieren autenticación)

| Ruta | Rol | Vista |
|------|-----|-------|
| `/dashboard` | Ciudadano | Panel ciudadano + notificaciones |
| `/reportes` | Ciudadano | Gestión de reportes propios |
| `/perfil` | Ciudadano | Perfil personal |
| `/admin` | Administrador | Panel administrador |
| `/admin/noticias` | Administrador | Gestión de noticias (CRUD) |
| `/admin/usuarios` | Administrador | Listado de usuarios |
| `/admin/reportes` | Administrador | Gestión de todos los reportes |

> Si el usuario no está autenticado, es redirigido automáticamente a `/login`.

---

## Endpoints de la API

Base URL: `http://localhost:5000/api`

### Autenticación

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |

> Rate limit: 10 peticiones / 15 min por IP en rutas de autenticación.

### Noticias

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/noticias` | Listar noticias | No |
| GET | `/noticias/:id` | Obtener noticia por ID | No |
| POST | `/noticias` | Crear noticia | Admin |
| PUT | `/noticias/:id` | Actualizar noticia | Admin |
| DELETE | `/noticias/:id` | Eliminar noticia | Admin |

### Reportes

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/reportes` | Listar reportes (propios o todos si admin) | Sí |
| GET | `/reportes/:id` | Obtener reporte por ID | Sí |
| POST | `/reportes` | Crear reporte | Sí |
| PUT | `/reportes/:id/estado` | Cambiar estado (dispara email al ciudadano) | Admin |
| DELETE | `/reportes/:id` | Eliminar reporte | Sí |

### Usuarios

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| GET | `/usuarios/perfil` | Ver perfil propio | Sí |
| GET | `/usuarios` | Listar todos los usuarios | Admin |
| GET | `/usuarios/stats` | Estadísticas del panel admin | Admin |

> La colección completa de Postman con ejemplos y casos de error está en `otros/postman_collection.json`.

---

## Pruebas con Postman

1. Importar `otros/postman_collection.json` en Postman.
2. Ejecutar **"Iniciar sesión"** — el token JWT se guarda automáticamente en la variable `{{token}}`.
3. Los demás endpoints que requieren autenticación usarán ese token automáticamente.

---

## Seguridad Implementada

| Mecanismo | Descripción |
|-----------|-------------|
| **bcryptjs** | Hash de contraseñas con 10 rondas de salt |
| **JWT** | Tokens con expiración de 2 horas; validados en cada ruta protegida |
| **SQL parametrizado** | Prevención de inyección SQL en todas las consultas |
| **xss** (backend) | Sanitiza título, contenido, descripción y nombre antes de almacenar en BD |
| **DOMPurify** (frontend) | Sanitiza HTML al renderizar contenido de noticias |
| **CORS** | Configurado para aceptar solo el origen del frontend (`FRONTEND_URL`) |
| **Helmet.js** | Cabeceras HTTP seguras (X-Frame-Options, X-Content-Type-Options, etc.) |
| **Rate limiting** | 100 req/IP/15min general; 10 req/IP/15min en `/auth` |
| **Rutas protegidas** | `PrivateRoute` en frontend + `verificarToken`/`soloAdmin` en backend |

---

## Servicios Externos

### 1. Nodemailer — Notificaciones por Email

Cuando un administrador cambia el estado de un reporte, el sistema envía automáticamente un email HTML al ciudadano con el nuevo estado.

**Configuración SMTP (Gmail):**

1. Activar verificación en dos pasos en la cuenta de Gmail.
2. Generar una contraseña de aplicación en Seguridad → Contraseñas de aplicación.
3. Agregar al `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=contraseña_de_app_16_chars
```

> Si no se configura SMTP, el sistema funciona igualmente. El envío de email es **no bloqueante** y falla silenciosamente registrando el error en consola.

**Archivos relevantes:**
- `backend/services/email.js` — servicio Nodemailer reutilizable
- `backend/routes/reportes.js` — llamada al servicio en `PUT /reportes/:id/estado`

### 2. Leaflet + OpenStreetMap — Mapa Interactivo

Mapa de la ubicación de la municipalidad integrado en la página `/contacto`. Muestra un marcador con la dirección y permite navegación interactiva. Si los tiles de OpenStreetMap no cargan, se muestra un fallback visual con la dirección.

**Configuración:**

```env
# Opcional — por defecto usa OpenStreetMap
VITE_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

---

## Despliegue con Docker

El proyecto incluye configuración Docker completa para levantar los tres servicios (base de datos, backend, frontend) con un solo comando.

### Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo.

### Variables de entorno

Crear el archivo `.env` en la raíz del proyecto a partir del ejemplo:

```bash
cp backend/.env.example .env
```

Contenido mínimo requerido en `.env`:

```env
DB_USER=root
DB_PASSWORD=muni_password_2024
DB_NAME=muni_santo_domingo
JWT_SECRET=clave_jwt_super_segura_minimo_32_chars

# Opcional: notificaciones por email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password
```

### Levantar el proyecto

```bash
docker-compose up --build
```

**Salida esperada al iniciar correctamente:**

```
[+] Building 18.5s (24/24) FINISHED
[+] Running 3/3
 ✔ Container muni_db        Healthy
 ✔ Container muni_backend   Started
 ✔ Container muni_frontend  Started

muni_backend  | Servidor corriendo en http://localhost:5000
```

**URLs disponibles tras el despliegue:**

| Servicio | URL |
|----------|-----|
| Frontend (Nginx) | http://localhost |
| API REST | http://localhost:5000/api |
| Base de datos MySQL | localhost:3306 |

### Detener los servicios

```bash
docker-compose down
```

Para eliminar también los volúmenes (datos de la BD):

```bash
docker-compose down -v
```

### Arquitectura Docker

```
docker-compose.yml
├── db          → MySQL 8.0 (puerto 3306)
│                 healthcheck + volumen persistente
│                 init: backend/schema.sql (crea tablas e índices)
├── backend     → Node.js 18 Alpine (puerto 5000)
│                 depends_on: db (condición: healthy)
└── frontend    → Nginx Alpine (puerto 80)
                  multi-stage build: Vite → dist → Nginx
                  proxy /api/* → backend:5000
```

---

## Notificaciones en el Dashboard

El servicio `frontend/src/services/notificaciones.ts` detecta cambios de estado en los reportes del ciudadano entre visitas usando `localStorage`. Si un reporte cambia de estado desde la última vez que el usuario visitó el dashboard, se muestra un badge de notificación.

Los estados posibles de un reporte son: `pendiente` → `en revisión` → `resuelto`.
