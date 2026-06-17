const express = require('express');
const router = express.Router();
const db = require('../db');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

// GET /api/usuarios — solo admin
router.get('/', verificarToken, soloAdmin, (req, res) => {
    const sql = 'SELECT id, nombre, rut, correo, region, comuna, rol, fecha_registro FROM usuarios ORDER BY fecha_registro DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener usuarios.' });
        res.status(200).json(results);
    });
});

// GET /api/usuarios/perfil — usuario ve su propio perfil
router.get('/perfil', verificarToken, (req, res) => {
    const sql = 'SELECT id, nombre, rut, correo, region, comuna, rol, fecha_registro FROM usuarios WHERE id = ?';
    db.query(sql, [req.usuario.id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener el perfil.' });
        if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado.' });
        res.status(200).json(results[0]);
    });
});

// GET /api/usuarios/stats — solo admin: conteos para el panel
router.get('/stats', verificarToken, soloAdmin, (req, res) => {
    const queries = {
        total_usuarios: 'SELECT COUNT(*) AS count FROM usuarios',
        reportes_pendientes: "SELECT COUNT(*) AS count FROM reportes WHERE estado = 'pendiente'",
        total_reportes: 'SELECT COUNT(*) AS count FROM reportes',
        total_noticias: 'SELECT COUNT(*) AS count FROM noticias',
    };

    const stats = {};
    const keys = Object.keys(queries);
    let completados = 0;

    keys.forEach((key) => {
        db.query(queries[key], (err, results) => {
            if (err) return res.status(500).json({ error: 'Error al obtener estadísticas.' });
            stats[key] = results[0].count;
            completados++;
            if (completados === keys.length) {
                res.status(200).json(stats);
            }
        });
    });
});

module.exports = router;
