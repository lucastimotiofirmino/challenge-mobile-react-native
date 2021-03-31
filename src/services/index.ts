import Axios from 'axios';

const api =
    Axios.create({
        baseURL: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=eb663aab17fa471fd0aa32048bbd3b7e&hash=5675b22bdfba0285192dd20e930e9d98'
    });


export default api;

