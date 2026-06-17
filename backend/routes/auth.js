require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { nombre, rut, correo, region, comuna, contrasena, rol } = req.body;

    if (!nombre || !rut || !correo || !region || !comuna || !contrasena) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const rolFinal = rol === 'administrador' ? 'administrador' : 'ciudadano';

    try {
        const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);
        const sql = 'INSERT INTO usuarios (nombre, rut, correo, region, comuna, contrasena, rol) VALUES (?, ?, ?, ?, ?, ?, ?)';

        db.query(sql, [nombre, rut, correo, region, comuna, contrasenaEncriptada, rolFinal], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ error: 'El RUT o Correo ya están registrados.' });
                }
                return res.status(500).json({ error: 'Error al registrar usuario.' });
            }
            res.status(201).json({ mensaje: 'Usuario registrado con éxito.' });
        });
    } catch {
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

// POST /api/auth/login
router.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
        return res.status(400).json({ error: 'Correo y contraseña son obligatorios.' });
    }

    const sql = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(sql, [correo], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor.' });

        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        const usuario = results[0];
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!contrasenaValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta.' });
        }

        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso.',
            token,
            usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol },
        });
    });
});

module.exports = router;
