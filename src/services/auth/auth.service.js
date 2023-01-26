import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/auth/';

class AuthServices {
    login(data) {
        return axios
            .post(`${API_URL}login`, data)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('access_token', JSON.stringify(response.data));
                }
                return response.data.url_redirect;
            });
    }
    logout(data) {
        return axios
            .post(`${API_URL}logout`, data)
            .then(response => {
                if (response.data) {
                    localStorage.removeItem('access_token');
                }
                return response.data;
            });
    }
}

export default new AuthServices();