import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Petición exitosa
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('Error de API:', error.response.data.error || 'Error desconocido');
            
            if (error.response.status === 401) {
                console.warn('Sesión expirada o inválida. Redirigiendo al login...');
                localStorage.removeItem('token');
                // Redirige a la ruta de inicio de sesión de Ionic
                window.location.href = '/login'; 
            }
        } else if (error.request) {
            console.error('Error de red: El servidor backend no responde. ¿Está encendido?');
        }
        return Promise.reject(error);
    }
);

export default api;
