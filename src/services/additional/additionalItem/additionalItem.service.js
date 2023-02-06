import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/v1/additional/';
import authHeader from '../../auth/auth-header.service';

class AdditionalItemService {

    create(data){
      return  axios({method:'POST', url:API_URL + 'storageAdditionalItem',headers: authHeader(), data:data})
    }
    delete(data){
      return  axios({method:'DELETE', url:API_URL + 'deleteItemAdditional',headers: authHeader(), data:{id:data}})
    }
    update(data){
      return  axios({method:'PUT', url:API_URL + 'updateItemAdditional',headers: authHeader(), data:data})
    }
}

export default new AdditionalItemService();