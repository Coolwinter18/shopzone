import axios from "axios";

const baseUrl = "https://127.0.0.1:8000";

export const axi = axios.create({
    baseURL: baseUrl,
});