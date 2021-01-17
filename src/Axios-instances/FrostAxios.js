import axios from "axios";

const instance = axios.create({
    baseURL: "https://frost.met.no/"});

export default instance;

