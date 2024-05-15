import axios from "axios";

export const api = axios.create({
    // prod url:
    baseURL: "https://rocket-movies-backend-w78i.onrender.com

    ",

    // dev url:
    //baseURL: "http://localhost:3333", 

    withCredentials: true,
})