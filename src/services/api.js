import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-qualquer.herokuapp.com'
});

export default api;