import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/v1/category/';
import authHeader from '../auth/auth-header.service';

class CategoryService {

    getAll() {
        return axios.get(API_URL + 'getAllCategory', { headers: authHeader() });
    }
    create(data){
      return  axios({method:'POST', url:API_URL + 'storageCategory',headers: authHeader(), data:data})
    }
    delete(data){
      return  axios({method:'DELETE', url:API_URL + 'deleteCategory',headers: authHeader(), data:{id:data}})
    }
    update(data){
      return  axios({method:'PUT', url:API_URL + 'updateCategory',headers: authHeader(), data:data})
    }
}

export default new CategoryService();