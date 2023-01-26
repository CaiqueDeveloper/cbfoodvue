import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/v1/user/';
import authHeader from '../auth/auth-header.service';

class UserService {

    getUser(id) {
        if(id != null){
            console.log('is here')
            return axios.get(API_URL + 'getUser', { headers: authHeader(), params:{id:id}});
        }else{
            return axios.get(API_URL + 'getUser', { headers: authHeader() });
        }
    }
}

export default new UserService();