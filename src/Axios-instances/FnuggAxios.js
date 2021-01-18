import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.fnugg.no/"});

export default instance;

