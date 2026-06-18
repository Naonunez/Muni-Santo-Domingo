import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response) {
            const data = error.response.data as { error?: string };
            console.error('Error de API:', data?.error || 'Error desconocido');

            if (error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
        } else if (error.request) {
            console.error('Error de red: El servidor backend no responde.');
        }
        return Promise.reject(error);
    }
);

export default api;
