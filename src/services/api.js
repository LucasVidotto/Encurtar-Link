import axios from 'axios';

export const key = "2a3190395672c4536ba3e6384dd772f5db291fba";

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers:{
        'Authorization': `Bearer ${key}`/*passando a chave*/
    }
})

export default api;
