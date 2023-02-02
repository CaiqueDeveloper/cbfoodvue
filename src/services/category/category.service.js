import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/v1/category/';
import authHeader from '../auth/auth-header.service';

class CategoryService {

    getAll() {
        return axios.get(API_URL + 'getAllCategory', { headers: authHeader() });
    }
    create(data){
      return  axios({method:'post', url:API_URL + 'storageCategory',headers: authHeader(), data:data})
    }
}

export default new CategoryService();