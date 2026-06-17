# Municipalidad de Santo Domingo — Plataforma Web y Móvil

Plataforma digital para la Municipalidad de Santo Domingo que permite a los ciudadanos acceder a trámites, noticias, información turística y reportar problemas en la comuna. Los administradores municipales pueden gestionar contenido y revisar reportes desde un panel dedicado.

## Paralelo
ICI 4247 — Paralelo 1

---
Integrantes:
  - Naomi Nuñez
  - Robert Houter
  - Anibal Aravena

Este proyecto corresponde a la del diseño y estructura inicial para la nueva plataforma de la Municipalidad de Santo Domingo. El objetivo principal es rediseñar y reimplementar la plataforma municipal como una aplicación móvil y web desarrollada con Ionic + React, priorizando la simplicidad, la accesibilidad y la claridad en la presentación de la información para los ciudadanos. 

## Enlaces del Proyecto

- **Repositorio:** [https://github.com/Naonunez/Muni-Santo-Domingo](https://github.com/Naonunez/Muni-Santo-Domingo)
- **Figma (Diseño):** [Ver diseño](https://www.figma.com/design/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=0-1&t=ZIbDiIUoXFRPuTRy-1)
- **Figma (Prototipo Web):** [Ver prototipo web](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=54-2&starting-point-node-id=54%3A2&t=yMJ40qVSxXDD8G3O-1)
- **Figma (Prototipo Móvil):** [Ver prototipo móvil](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=9-4&p=f&t=yXDnBhj1tTYoMy85-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A3&starting-point-node-id=9%3A4)

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Ionic 8 + React 19 + TypeScript |
| Backend | Node.js + Express 5 |
| Base de Datos | MySQL |
| Autenticación | JWT + bcryptjs |
| HTTP Client | Axios |
| Mobile | Capacitor |

---

## Justificación del Problema

La web oficial de la Municipalidad de Santo Domingo presenta una estructura de navegación compleja y jerarquía visual confusa, lo que genera barreras para ciudadanos con baja alfabetización digital, especialmente adultos mayores. Esta plataforma rediseña la experiencia priorizando accesibilidad, simplicidad y tiempo de respuesta.

**Usuarios objetivo:**
- **Ciudadano (adulto mayor, 55+):** Nivel tecnológico básico. Necesita botones grandes, navegación simple y acceso directo a trámites y noticias.
- **Administrador municipal (25–50 años):** Nivel tecnológico intermedio-avanzado. Gestiona contenido, reportes y usuarios desde un panel ordenado.

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
| RF7 | Acceso a información de trámites municipales por dirección (Obras, DIMAO) | Público |
| RF8 | Consulta del Plan Regulador Comunal y ordenanzas | Público |
| RF9 | Guía turística interactiva (atractivos patrimoniales y naturales) | Público |
| RF10 | Ver perfil personal con datos de cuenta | Ciudadano |

## Requerimientos No Funcionales

| # | Requerimiento | Tipo |
|---|--------------|------|
| RNF1 | Autenticación segura con JWT (expiración 2h) y hash bcrypt para contraseñas | Seguridad |
| RNF2 | Rutas protegidas por rol en frontend y middleware de autorización en backend | Seguridad |
| RNF3 | Diseño responsive adaptado a móvil y web con Ionic | Usabilidad |
| RNF4 | Tiempos de carga bajo 2 segundos para páginas informativas | Rendimiento |

---

## Estructura del Proyecto

```
Muni-Santo-Domingo/
├── src/                        # Frontend Ionic + React
│   ├── pages/                  # Vistas de la aplicación
│   ├── components/             # Navbar, Footer, PrivateRoute
│   ├── routes/                 # AppRoutes.tsx
│   └── services/               # api.ts (Axios + interceptores JWT)
├── backend/                    # API REST Node.js + Express
│   ├── routes/                 # auth.js | noticias.js | reportes.js | usuarios.js
│   ├── middlewares/            # authMiddleware.js (JWT + roles)
│   ├── db.js                   # Conexión MySQL
│   ├── index.js                # Servidor principal
│   ├── schema.sql              # Esquema de base de datos
│   └── .env.example            # Variables de entorno de ejemplo
└── otros/                      # Material adicional
    └── postman_collection.json # Colección de pruebas de endpoints
```

---

## Instalación y Ejecución

### Requisitos previos

- Node.js 18+
- MySQL Server (XAMPP, WampServer o MySQL Workbench)
- npm (incluido con Node.js)

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/Naonunez/Muni-Santo-Domingo.git
cd Muni-Santo-Domingo
```

---

### 2. Configurar la Base de Datos

1. Abrir MySQL y ejecutar el archivo de esquema:

```sql
source backend/schema.sql
```

O bien, copiar y pegar el contenido de `backend/schema.sql` en MySQL Workbench / phpMyAdmin.

2. Esto crea la base de datos `muni_santo_domingo` con las tablas: `usuarios`, `noticias` y `reportes`.

---

### 3. Configurar el Backend

```bash
cd backend
```

Crear el archivo `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

Editar `.env` con tus credenciales MySQL:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=muni_santo_domingo
JWT_SECRET=un_secreto_seguro
```

Instalar dependencias e iniciar el servidor:

```bash
npm install
node index.js
```

El servidor estará disponible en: `http://localhost:5000`

---

### 4. Configurar el Frontend

Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

---

### 5. Crear un usuario administrador

Para crear una cuenta con rol administrador, usar el endpoint de registro con Postman (ver colección en `otros/postman_collection.json`) o mediante la interfaz de la app enviando `"rol": "administrador"` en el cuerpo del registro.

---

## Rutas de la Aplicación

### Rutas Públicas

| Ruta | Vista |
|------|-------|
| `/home` | Página principal |
| `/noticias` | Noticias municipales |
| `/autoridades` | Autoridades y COSOC |
| `/contacto` | Información de contacto |
| `/login` | Inicio de sesión |
| `/register` | Registro de ciudadano |
| `/tramites/direccion-obras` | Dirección de Obras |
| `/tramites/medio-ambiente` | DIMAO |
| `/turismo/patrimonial` | Atractivos Patrimoniales |
| `/turismo/naturales` | Atractivos Naturales |
| `/plan-regulador/comunal` | Plan Regulador Comunal |
| `/plan-regulador/ordenanzas` | Ordenanzas Municipales |
| `/plan-regulador/instrumentos` | Instrumentos de Planificación |

### Rutas Protegidas (requieren autenticación)

| Ruta | Rol | Vista |
|------|-----|-------|
| `/dashboard` | Ciudadano | Panel ciudadano |
| `/reportes` | Ciudadano / Admin | Gestión de reportes |
| `/perfil` | Ciudadano | Perfil personal |
| `/admin` | Administrador | Panel administrador |

> Si el usuario no está autenticado, es redirigido automáticamente a `/login`.

---

## Endpoints de la API

Base URL: `http://localhost:5000/api`

### Autenticación

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |

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
| PUT | `/reportes/:id/estado` | Cambiar estado del reporte | Admin |
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
3. Los demás endpoints que requieren autenticación usarán ese token.

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

# Opcional: configuración SMTP para notificaciones por email
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
├── db          → MySQL 8.0 (puerto 3306) + healthcheck
│                 init: backend/schema.sql (crea tablas e índices)
├── backend     → Node.js 18 Alpine (puerto 5000)
│                 depende de db (condición: healthy)
└── frontend    → Nginx Alpine (puerto 80)
                  multi-stage build: Vite → dist → Nginx
                  proxy /api/* → backend:5000
```

---

## Seguridad Implementada

- Contraseñas encriptadas con **bcryptjs** (10 rondas de salt).
- Tokens **JWT** con expiración de 2 horas.
- Middleware de autorización que valida token y rol en cada ruta protegida.
- Consultas SQL **parametrizadas** — prevención de inyección SQL.
- Sanitización de inputs con **xss** en backend — prevención de XSS almacenado.
- Sanitización de contenido en frontend con **DOMPurify** al renderizar noticias.
- Variables de entorno mediante `.env` (credenciales fuera del código fuente).
- **CORS** configurado para aceptar solo el origen del frontend.
- **Helmet.js** — cabeceras HTTP seguras (X-Frame-Options, X-Content-Type-Options, etc.).
- **Rate limiting**: 100 req/IP/15min general; 10 req/IP/15min en `/auth`.
- **Notificaciones por email** (Nodemailer/SMTP) al ciudadano cuando un reporte cambia de estado.

---

## Servicio Externo: Notificaciones por Email (Nodemailer)

Cuando un administrador cambia el estado de un reporte, el sistema envía automáticamente un email HTML al ciudadano con el nuevo estado.

**Configuración:**

1. Crear una contraseña de aplicación en tu cuenta de Gmail (Seguridad → Contraseñas de aplicación).
2. Agregar las credenciales al archivo `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=contraseña_de_app_16_chars
```

3. Si no se configura SMTP, el sistema funciona igualmente — el envío de email es **no bloqueante** y falla silenciosamente registrando el error en consola.

**Archivos relevantes:**
- `backend/services/email.js` — servicio Nodemailer reutilizable.
- `backend/routes/reportes.js` — llamada al servicio en `PUT /reportes/:id/estado`.
