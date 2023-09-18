import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:8080'
    baseURL: 'https://goat-native-simply.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});