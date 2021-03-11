import axios from 'axios';
import {PROJECT_API} from "../../config/app.js";

const baseURL = PROJECT_API.BASE_URL;

const axiosClient = axios.create({
    baseURL : baseURL,
    withCredentials: true
});

export {
    baseURL
}
export default axiosClient;