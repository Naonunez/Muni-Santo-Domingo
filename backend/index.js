const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'muni_secreto_123'; 


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '2005', 
    database: 'muni_santo_domingo' 
});


db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.message);
        return;
    }
    console.log('¡Conectado exitosamente a la base de datos MySQL de la Muni!');
});


app.get('/', (req, res) => {
    res.json({
        estado: 'Éxito',
        mensaje: '¡El servidor de la Municipalidad de Santo Domingo está corriendo!'
    });
});


app.post('/api/auth/register', async (req, res) => {
    const { nombre, rut, correo, region, comuna, contrasena, rol } = req.body;

    try {
        const saltos = 10;
        const contrasenaEncriptada = await bcrypt.hash(contrasena, saltos);

        const sql = 'INSERT INTO usuarios (nombre, rut, correo, region, comuna, contrasena, rol) VALUES (?, ?, ?, ?, ?, ?, ?)';
        
        db.query(sql, [nombre, rut, correo, region, comuna, contrasenaEncriptada, rol], (err, result) => {
            if (err) {
                console.error('Error al registrar usuario:', err);
                return res.status(500).json({ error: 'Error al registrar. Es posible que el RUT o Correo ya existan.' });
            }
            res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor al encriptar' });
    }
});


app.post('/api/auth/login', (req, res) => {
    const { correo, contrasena } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(sql, [correo], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor' });
        
        // Validar si el correo existe
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuario = results[0];

        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!contrasenaValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Generar Token JWT (EP 2.5)
        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol }, 
            SECRET_KEY, 
            { expiresIn: '2h' } 
        );

        // Devolver el token al Frontend
        res.status(200).json({ 
            mensaje: 'Inicio de sesión exitoso', 
            token: token, 
            usuario: { 
                id: usuario.id, 
                nombre: usuario.nombre, 
                rol: usuario.rol 
            } 
        });
    });
});


app.get('/api/noticias', (req, res) => {
    const sql = 'SELECT * FROM noticias ORDER BY fecha_publicacion DESC';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al consultar noticias:', err);
            return res.status(500).json({ error: 'Error interno del servidor al obtener las noticias' }); 
        }
        res.status(200).json(results); 
    });
});

app.post('/api/noticias', (req, res) => {
    const { titulo, contenido, administrador_id } = req.body; 
    const sql = 'INSERT INTO noticias (titulo, contenido, administrador_id) VALUES (?, ?, ?)';
    
    db.query(sql, [titulo, contenido, administrador_id], (err, result) => {
        if (err) {
            console.error('Error al insertar noticia:', err);
            return res.status(500).json({ error: 'Error interno del servidor al crear la noticia' });
        }
        res.status(201).json({ 
            mensaje: 'Noticia creada con éxito', 
            id_noticia: result.insertId 
        });
    });
});

app.put('/api/noticias/:id', (req, res) => {
    const { id } = req.params; 
    const { titulo, contenido } = req.body;
    const sql = 'UPDATE noticias SET titulo = ?, contenido = ? WHERE id = ?';
    
    db.query(sql, [titulo, contenido, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar noticia:', err);
            return res.status(500).json({ error: 'Error interno del servidor al actualizar la noticia' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.status(200).json({ mensaje: 'Noticia actualizada con éxito' });
    });
});

app.delete('/api/noticias/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM noticias WHERE id = ?';
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar noticia:', err);
            return res.status(500).json({ error: 'Error interno del servidor al eliminar la noticia' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.status(200).json({ mensaje: 'Noticia eliminada con éxito' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
