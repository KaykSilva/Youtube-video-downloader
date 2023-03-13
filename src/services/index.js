import axios from "axios";

const api = axios.create({
    baseURL: 'https://saipulanuar.ga/api/download/ytmp4?url='

});

export default api;