import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/user/';
import authHeader from '../auth/auth-header.service';

class UserService {

    getUser() {

        return axios.get(API_URL + 'user', { headers: authHeader() });
    }
}

export default new UserService();