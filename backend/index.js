require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const noticiasRoutes = require('./routes/noticias');
const reportesRoutes = require('./routes/reportes');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 5000;

// Seguridad: cabeceras HTTP seguras
app.use(helmet());

// CORS restringido al origen del frontend
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10kb' }));

// Rate limiting global: 100 peticiones por IP cada 15 minutos
const limiterGeneral = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Rate limiting estricto para autenticación: 10 intentos por IP cada 15 minutos
const limiterAuth = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Demasiados intentos de autenticación. Intenta de nuevo en 15 minutos.' },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiterGeneral);

app.get('/', (req, res) => {
    res.json({ estado: 'OK', mensaje: 'API Municipalidad de Santo Domingo funcionando.' });
});

app.use('/api/auth', limiterAuth, authRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/reportes', reportesRoutes);
app.use('/api/usuarios', usuariosRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada.' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
