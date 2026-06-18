CREATE DATABASE IF NOT EXISTS muni_santo_domingo;
USE muni_santo_domingo;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    rut VARCHAR(12) UNIQUE NOT NULL, 
    correo VARCHAR(150) UNIQUE NOT NULL, 
    region VARCHAR(100) NOT NULL,
    comuna VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL, 
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('ciudadano', 'administrador')), 
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    contenido TEXT NOT NULL,
    imagen VARCHAR(500) DEFAULT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    administrador_id INT NOT NULL,
    CONSTRAINT fk_noticias_admin
        FOREIGN KEY (administrador_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);

-- Migración para bases de datos existentes:
-- ALTER TABLE noticias ADD COLUMN imagen VARCHAR(500) DEFAULT NULL;

CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_reporte VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    estado VARCHAR(20) DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'en_revision', 'resuelto')),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ciudadano_id INT NOT NULL,
    CONSTRAINT fk_reportes_ciudadano
        FOREIGN KEY (ciudadano_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);

-- Índices para mejorar rendimiento en consultas frecuentes
CREATE INDEX idx_noticias_admin    ON noticias(administrador_id);
CREATE INDEX idx_noticias_fecha    ON noticias(fecha_publicacion DESC);
CREATE INDEX idx_reportes_ciudadano ON reportes(ciudadano_id);
CREATE INDEX idx_reportes_estado   ON reportes(estado);
CREATE INDEX idx_reportes_fecha    ON reportes(fecha_creacion DESC);
CREATE INDEX idx_usuarios_correo   ON usuarios(correo);
