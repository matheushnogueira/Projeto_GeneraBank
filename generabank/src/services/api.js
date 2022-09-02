import axios from "axios";

export const api = axios.create({
    baseURL: "",
});

export const createSession = async (email, password) => {
    return api.post(``,{email, password});
}