import axios from "axios";


export const api = axios.create({
  baseURL: "https://325e-179-108-104-153.sa.ngrok.io",
  headers: {
    "ngrok-skip-browser-warning" : null
  }
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "1nTG7BgWvYZj32V260X3FCSulPU5Mkltzuc9I87T", 
      grant_type: "password"
    },);}
