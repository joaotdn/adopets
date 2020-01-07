import axios from 'axios';
import { getToken } from './auth';

const api: any = axios.create({
    baseURL: 'https://test.adopets.app/v1/',
    method: 'post'
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;