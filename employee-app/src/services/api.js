import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://rocketseat-node.herokuapp.com/api',
    baseURL: 'http://192.168.0.108:3001/api',
});

export default api;
