const express = require('express');
const router = express.Router();
const db = require('../db');
const xss = require('xss');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

// GET /api/noticias — público
router.get('/', (req, res) => {
    const sql = 'SELECT n.*, u.nombre AS autor FROM noticias n JOIN usuarios u ON n.administrador_id = u.id ORDER BY n.fecha_publicacion DESC';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener noticias.' });
        res.status(200).json(results);
    });
});

// GET /api/noticias/:id — público
router.get('/:id', (req, res) => {
    const sql = 'SELECT n.*, u.nombre AS autor FROM noticias n JOIN usuarios u ON n.administrador_id = u.id WHERE n.id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener la noticia.' });
        if (results.length === 0) return res.status(404).json({ error: 'Noticia no encontrada.' });
        res.status(200).json(results[0]);
    });
});

// POST /api/noticias — solo admin
router.post('/', verificarToken, soloAdmin, (req, res) => {
    const titulo   = xss(req.body.titulo   || '').trim();
    const contenido = xss(req.body.contenido || '').trim();
    const imagen   = xss(req.body.imagen   || '').trim() || null;

    if (!titulo || !contenido) {
        return res.status(400).json({ error: 'Título y contenido son obligatorios.' });
    }

    const sql = 'INSERT INTO noticias (titulo, contenido, imagen, administrador_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [titulo, contenido, imagen, req.usuario.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear la noticia.' });
        res.status(201).json({ mensaje: 'Noticia creada con éxito.', id: result.insertId });
    });
});

// PUT /api/noticias/:id — solo admin
router.put('/:id', verificarToken, soloAdmin, (req, res) => {
    const titulo   = xss(req.body.titulo   || '').trim();
    const contenido = xss(req.body.contenido || '').trim();
    const imagen   = xss(req.body.imagen   || '').trim() || null;

    if (!titulo || !contenido) {
        return res.status(400).json({ error: 'Título y contenido son obligatorios.' });
    }

    const sql = 'UPDATE noticias SET titulo = ?, contenido = ?, imagen = ? WHERE id = ?';
    db.query(sql, [titulo, contenido, imagen, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar la noticia.' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Noticia no encontrada.' });
        res.status(200).json({ mensaje: 'Noticia actualizada con éxito.' });
    });
});

// DELETE /api/noticias/:id — solo admin
router.delete('/:id', verificarToken, soloAdmin, (req, res) => {
    const sql = 'DELETE FROM noticias WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar la noticia.' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Noticia no encontrada.' });
        res.status(200).json({ mensaje: 'Noticia eliminada con éxito.' });
    });
});

module.exports = router;
