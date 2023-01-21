import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/api/v1/requestYourDemo/';

class RequestFreeDemoService {
    registerUser(data) {
        return axios
            .post(`${API_URL}storageUser`, data)
            .then(response => {

                return response.data;
            });
    }
    registerCompany(data) {
        return axios
            .post(`${API_URL}storageCompany`, data)
            .then(response => {

                return response.data;
            });
    }
}

export default new RequestFreeDemoService();