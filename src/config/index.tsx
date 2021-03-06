import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default api