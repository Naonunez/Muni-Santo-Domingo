# Municipalidad de Santo Domingo - Plataforma Web y Móvil

Integrantes:
  - Naomi Nuñez
  - Robert Houter
  - Anibal Aravena

Este proyecto corresponde a la del diseño y estructura inicial para la nueva plataforma de la Municipalidad de Santo Domingo. El objetivo principal es rediseñar y reimplementar la plataforma municipal como una aplicación móvil y web desarrollada con Ionic + React, priorizando la simplicidad, la accesibilidad y la claridad en la presentación de la información para los ciudadanos. 

## Enlaces del Proyecto
* **Figma :** [Ver aquí](https://www.figma.com/design/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=0-1&t=ZIbDiIUoXFRPuTRy-1)
* **Figma (Prototipo Web):** [Ver aquí](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=54-2&starting-point-node-id=54%3A2&t=yMJ40qVSxXDD8G3O-1) 
* **Figma (Prototipo Móvil):** [Ver aquí](https://www.figma.com/proto/QW5Ckz607QPEtqWt8j32HG/Muni-Santo-Domingo?node-id=9-4&p=f&t=yXDnBhj1tTYoMy85-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A3&starting-point-node-id=9%3A4)

## Justificación y Usuarios
La web oficial actual presenta una estructura de navegación compleja y una jerarquía visual confusa, lo cual genera barreras significativas, especialmente para adultos mayores y personas con baja alfabetización digital. El rediseño busca que cualquier ciudadano encuentre la información en pocos pasos. 

**Perfiles de Usuario:**
* **Ciudadano General (Adulto Mayor):** Usuario de 55 años o más, con nivel tecnológico básico, que busca trámites, noticias e información de contacto mediante una interfaz simple y con botones grandes. 
* **Administrador Municipal:** Usuario de 25-50 años, con nivel tecnológico intermedio-avanzado, encargado de gestionar contenido, consultas y usuarios desde un panel ordenado. 

## Requerimientos Implementados
**Funcionales (RF):**
1. Gestión de trámites centralizada por unidades (Obras, DIMAO, Tránsito, Juzgado). 
2. Trámites de beneficios (intermediario hacia dominio gubernamental). 
3. Trámites de pago indexados de forma directa y legible. 
4. Centralización de trámites de certificación. 
5. Repositorio de información y transparencia municipal. 
6. Guía turística interactiva adaptada a móviles. 
7. Feed de noticias dinámico con ajuste visual. 
8. Consulta del Plan Regulador Comunal (PRC). 
9. Buscador global de contenidos con predicción. 

**No Funcionales (RNF):**
* **Seguridad:** Uso de JWT y validación de enlaces externos (.gob.cl) para evitar Phishing. 
* **UI/UX:** Diseño adaptable (PC y Móvil) y panel de accesibilidad con Modo Oscuro y Escalado de Texto. 
* **Rendimiento:** Tiempos de carga bajo los 2 segundos para páginas informativas y optimización de caché. 

## Tecnologías y Arquitectura
El proyecto fue inicializado con **Ionic + React + TypeScript**. 
* **React Router:** Implementado mediante `IonReactRouter` e `IonRouterOutlet` para gestionar rutas públicas y protegidas de forma segura. 
* **Autenticación (JWT):** Estándar seguro para el manejo de sesiones y gestión de roles (Ciudadano/Administrador). 
* **Accesibilidad y UX:** Uso de hero images con texto grande, tipografía escalada en móviles (botones mínimo de 48px), y paleta institucional (#1a237e azul y blanco). 

## Estructura del Proyecto
El código cuenta con una estructura modular para separar responsabilidades: 
* **src/pages/:** Contiene las vistas principales implementadas (Home, Noticias, Trámites, Login, Register, etc.).
* **src/components/:** Componentes reutilizables como Navbar, Footer y PrivateRoute.
* **src/routes/:** Contiene AppRoutes.tsx para la gestión centralizada de rutas y control de acceso.
* **src/services/:** Lógica centralizada para autenticación y consumo de API, incluyendo la configuración de Axios y los interceptores globales.
* **backend/:** Directorio raíz del servidor Node.js que gestiona la API REST, la conexión a la base de datos MySQL y la lógica de seguridad (encriptación con bcryptjs y generación de tokens JWT).

## Rutas Principales
La navegación permite diferenciar los accesos según el rol y la autenticación: 
* **Rutas Públicas:** `/home`, `/noticias`, `/contacto`, `/autoridades`, módulos de `/turismo`, `/tramites` y `/plan-regulador`, además de `/login` y `/register`. 
* **Rutas Protegidas:** `/dashboard` (requiere rol Ciudadano) y `/admin` (requiere rol Administrador). 
* **Redirección:** Si no hay sesión activa, el sistema redirige automáticamente a `/login` al intentar acceder a vistas protegidas. 

## Requisitos Previos
Asegúrate de tener instalado y configurado el siguiente entorno antes de ejecutar la aplicación:
* **Node.js**: Versión 18 o superior recomendada (requerida tanto para el servidor backend como para el frontend).
* **npm**: Gestor de paquetes incluido con la instalación de Node.js.
* **MySQL Server**: Motor de base de datos necesario para la persistencia de usuarios, noticias y reportes. Puedes utilizar herramientas como XAMPP, WampServer o MySQL Workbench.
* **Ionic CLI**: Utilizado para la gestión del frontend. Si no lo tienes instalado, puedes hacerlo globalmente ejecutando el siguiente comando en tu terminal:

  ```bash
  npm install -g @ionic/cli
