# Arquitectura de Navegación — Municipalidad de Santo Domingo

## 1. Rutas Principales y Secundarias

```
/                          → Redirect a /home
/home                      → Página principal (Hero + servicios)
/noticias                  → Feed de noticias municipales
/autoridades               → Alcalde, concejales y COSOC
/contacto                  → Información de contacto + mapa interactivo
/login                     → Inicio de sesión
/register                  → Registro de ciudadano

/tramites/
  direccion-obras          → Dirección de Obras Municipales
  medio-ambiente           → Dirección de Medio Ambiente (DIMAO)

/turismo/
  patrimonial              → Atractivos Patrimoniales (Intihuatana, Parque Ciencia)
  naturales                → Atractivos Naturales (Humedal, Reserva El Yali)

/plan-regulador/
  comunal                  → Plan Regulador Comunal
  ordenanzas               → Ordenanzas Municipales
  instrumentos             → Instrumentos de Planificación

── Protegidas (requieren sesión activa) ──────────────────────────────
/dashboard                 → Panel ciudadano
/reportes                  → Reportes del ciudadano (CRUD)
/perfil                    → Perfil personal del ciudadano

/admin                     → Panel administrador (solo rol admin)
/admin/noticias            → Gestión de noticias (CRUD)
/admin/usuarios            → Lista de ciudadanos registrados
/admin/reportes            → Gestión de reportes (cambio de estado)
```

---

## 2. Jerarquía de Vistas

```
App
├── Rutas Públicas (Navbar + Footer)
│   ├── Home
│   ├── Noticias
│   ├── Autoridades
│   ├── Contacto (con mapa Leaflet)
│   ├── Login
│   ├── Register
│   ├── Trámites
│   │   ├── Dirección de Obras
│   │   └── Medio Ambiente
│   ├── Turismo
│   │   ├── Patrimonial
│   │   └── Naturales
│   └── Plan Regulador
│       ├── Comunal
│       ├── Ordenanzas
│       └── Instrumentos
│
└── Rutas Protegidas (IonHeader + IonBackButton)
    ├── Rol: ciudadano
    │   ├── Dashboard (hub principal)
    │   ├── Reportes (listado + modal crear)
    │   └── Perfil
    └── Rol: administrador
        ├── Admin (hub con estadísticas reales)
        ├── Admin/Noticias (CRUD)
        ├── Admin/Usuarios (búsqueda)
        └── Admin/Reportes (gestión de estado)
```

---

## 3. Diferenciación de Acceso por Roles

| Ruta | Público | Ciudadano | Administrador |
|------|---------|-----------|---------------|
| `/home`, `/noticias`, `/contacto` | ✅ | ✅ | ✅ |
| `/login`, `/register` | ✅ | ✅ | ✅ |
| `/dashboard`, `/reportes`, `/perfil` | ❌ | ✅ | ❌ |
| `/admin`, `/admin/*` | ❌ | ❌ | ✅ |

El componente `PrivateRoute` verifica el token JWT en `localStorage`. Si no existe, redirige a `/login`. Si el rol no coincide, redirige a `/home`.

---

## 4. Flujo de Tareas Principal (Task Flow)

### Ciudadano — Enviar un reporte

```
Login → /dashboard → /reportes → Clic "+" → Modal → Seleccionar tipo + descripción → Enviar → Lista actualizada
```

### Administrador — Gestionar un reporte

```
Login → /admin → /admin/reportes → Seleccionar estado en dropdown → Actualización inmediata
```

### Administrador — Publicar noticia

```
Login → /admin → /admin/noticias → Clic "+" → Modal → Título + Contenido → Publicar → Lista actualizada
```

---

## 5. Puntos Críticos de Interacción

| Punto | Descripción |
|-------|-------------|
| Login con error de credenciales | Toast de error visible 3 segundos, no expone detalles internos |
| Sesión expirada (JWT vencido) | Interceptor Axios detecta 401 y redirige automáticamente a `/login` |
| Acceso a ruta protegida sin sesión | `PrivateRoute` redirige a `/login` antes de renderizar |
| Acceso a `/admin` con rol ciudadano | `PrivateRoute` redirige a `/home` |
| Formularios con campos vacíos | Validación en frontend (Toast) + validación en backend (400) |

---

## 6. Coherencia entre Dispositivos

| Elemento | Web | Móvil |
|----------|-----|-------|
| Navegación principal | Navbar con menús dropdown | Navbar simplificada |
| Páginas públicas | Hero 500px + tarjetas en grid | Stack vertical |
| Paneles (Dashboard/Admin) | Grid de 2 columnas (IonGrid) | Grid de 2 columnas adaptado |
| Modales | IonModal pantalla completa | IonModal pantalla completa |
| Botón volver | IonBackButton en header | IonBackButton en header |

---

## 7. Justificación Técnica

- **IonReactRouter + IonRouterOutlet**: permite las animaciones de transición nativas de Ionic entre pantallas, coherentes en web y móvil.
- **PrivateRoute como HOC**: centraliza el control de acceso en un solo componente, evitando repetir lógica en cada página.
- **Rutas planas (sin anidamiento profundo)**: facilita la navegación con IonBackButton y evita el stack de historial complejo en Capacitor.
- **Separación ciudadano/admin en rutas distintas**: permite escalar los paneles de forma independiente sin afectar las rutas públicas.
