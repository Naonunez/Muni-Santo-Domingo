const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const etiquetaEstado = {
    pendiente:   'Pendiente',
    en_revision: 'En revisión',
    resuelto:    'Resuelto',
};

const colorEstado = {
    pendiente:   '#e53935',
    en_revision: '#f59e0b',
    resuelto:    '#16a34a',
};

async function enviarNotificacionEstado({ correo, nombre, tipoReporte, nuevoEstado }) {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return;

    const etiqueta = etiquetaEstado[nuevoEstado] || nuevoEstado;
    const color    = colorEstado[nuevoEstado]    || '#1a237e';

    try {
        await transporter.sendMail({
            from: `"Municipalidad de Santo Domingo" <${process.env.SMTP_USER}>`,
            to: correo,
            subject: `Actualización de tu reporte: ${tipoReporte}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
                    <div style="background:#1a237e;padding:24px 32px;">
                        <h1 style="color:#fff;margin:0;font-size:20px;">Municipalidad de Santo Domingo</h1>
                    </div>
                    <div style="padding:32px;">
                        <p style="color:#333;font-size:15px;">Hola <strong>${nombre}</strong>,</p>
                        <p style="color:#555;font-size:14px;">
                            El estado de tu reporte <strong>"${tipoReporte}"</strong> ha sido actualizado.
                        </p>
                        <div style="background:#f5f5f5;border-radius:8px;padding:16px 24px;margin:24px 0;text-align:center;">
                            <span style="background:${color};color:#fff;padding:6px 20px;border-radius:20px;font-size:14px;font-weight:600;">
                                ${etiqueta}
                            </span>
                        </div>
                        <p style="color:#555;font-size:13px;">
                            Puedes revisar el detalle iniciando sesión en el portal ciudadano.
                        </p>
                        <p style="color:#999;font-size:12px;margin-top:32px;">
                            Este correo fue enviado automáticamente. Por favor no respondas a este mensaje.
                        </p>
                    </div>
                </div>
            `,
        });
    } catch (err) {
        console.error('Error al enviar email de notificación:', err.message);
    }
}

module.exports = { enviarNotificacionEstado };
