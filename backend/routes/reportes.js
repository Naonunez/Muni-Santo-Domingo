const express = require('express');
const router = express.Router();
const db = require('../db');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

// GET /api/reportes — admin ve todos, ciudadano ve los suyos
router.get('/', verificarToken, (req, res) => {
    let sql, params;

    if (req.usuario.rol === 'administrador') {
        sql = `SELECT r.*, u.nombre AS ciudadano_nombre
               FROM reportes r
               JOIN usuarios u ON r.ciudadano_id = u.id
               ORDER BY r.fecha_creacion DESC`;
        params = [];
    } else {
        sql = `SELECT r.*, u.nombre AS ciudadano_nombre
               FROM reportes r
               JOIN usuarios u ON r.ciudadano_id = u.id
               WHERE r.ciudadano_id = ?
               ORDER BY r.fecha_creacion DESC`;
        params = [req.usuario.id];
    }

    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener reportes.' });
        res.status(200).json(results);
    });
});

// GET /api/reportes/:id
router.get('/:id', verificarToken, (req, res) => {
    const sql = 'SELECT * FROM reportes WHERE id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener el reporte.' });
        if (results.length === 0) return res.status(404).json({ error: 'Reporte no encontrado.' });

        const reporte = results[0];
        if (req.usuario.rol !== 'administrador' && reporte.ciudadano_id !== req.usuario.id) {
            return res.status(403).json({ error: 'No tienes permiso para ver este reporte.' });
        }
        res.status(200).json(reporte);
    });
});

// POST /api/reportes — ciudadano crea reporte
router.post('/', verificarToken, (req, res) => {
    const { tipo_reporte, descripcion } = req.body;

    if (!tipo_reporte || !descripcion) {
        return res.status(400).json({ error: 'Tipo de reporte y descripción son obligatorios.' });
    }

    const sql = 'INSERT INTO reportes (tipo_reporte, descripcion, ciudadano_id) VALUES (?, ?, ?)';
    db.query(sql, [tipo_reporte, descripcion, req.usuario.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear el reporte.' });
        res.status(201).json({ mensaje: 'Reporte enviado con éxito.', id: result.insertId });
    });
});

// PUT /api/reportes/:id/estado — solo admin cambia estado
router.put('/:id/estado', verificarToken, soloAdmin, (req, res) => {
    const { estado } = req.body;
    const estadosValidos = ['pendiente', 'en_revision', 'resuelto'];

    if (!estado || !estadosValidos.includes(estado)) {
        return res.status(400).json({ error: `Estado inválido. Use: ${estadosValidos.join(', ')}` });
    }

    const sql = 'UPDATE reportes SET estado = ? WHERE id = ?';
    db.query(sql, [estado, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el estado.' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Reporte no encontrado.' });
        res.status(200).json({ mensaje: 'Estado actualizado con éxito.' });
    });
});

// DELETE /api/reportes/:id — ciudadano elimina el suyo, admin elimina cualquiera
router.delete('/:id', verificarToken, (req, res) => {
    const sqlCheck = 'SELECT * FROM reportes WHERE id = ?';
    db.query(sqlCheck, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al verificar el reporte.' });
        if (results.length === 0) return res.status(404).json({ error: 'Reporte no encontrado.' });

        const reporte = results[0];
        if (req.usuario.rol !== 'administrador' && reporte.ciudadano_id !== req.usuario.id) {
            return res.status(403).json({ error: 'No tienes permiso para eliminar este reporte.' });
        }

        db.query('DELETE FROM reportes WHERE id = ?', [req.params.id], (err2) => {
            if (err2) return res.status(500).json({ error: 'Error al eliminar el reporte.' });
            res.status(200).json({ mensaje: 'Reporte eliminado con éxito.' });
        });
    });
});

module.exports = router;
