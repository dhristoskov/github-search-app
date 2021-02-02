import axios from 'axios';

//axios instance to base url
const instance = axios.create({
    baseURL: "http://api.github.com"
});

export default instance;