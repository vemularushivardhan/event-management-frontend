import axios from 'axios';

const rawBaseUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
// Normalize baseURL: strip trailing slashes, ensure /api suffix
let cleanBaseUrl = rawBaseUrl.replace(/\/+$/, '');
if (!cleanBaseUrl.endsWith('/api')) {
  cleanBaseUrl += '/api';
}

const api = axios.create({
  baseURL: cleanBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach JWT Bearer Token if present (except on public auth endpoints)
api.interceptors.request.use(
  (config) => {
    const isAuthEndpoint = config.url && (config.url.includes('/auth/login') || config.url.includes('/auth/register'));
    const token = localStorage.getItem('token');
    if (token && !isAuthEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Format error messages & handle 401 session expiry
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with an error code
      const status = error.response.status;
      if (status === 401) {
        // Clear token if expired or unauthorized
        const isAuthEndpoint = error.config.url.includes('/auth/login') || error.config.url.includes('/auth/register');
        if (!isAuthEndpoint) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
