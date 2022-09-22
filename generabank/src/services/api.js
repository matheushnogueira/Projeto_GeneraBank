import axios from "axios";


export const api = axios.create({
  baseURL: "https://06ec-179-108-104-153.sa.ngrok.io",
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
      client_secret: "Zbhi1MeW7MS4ItnGrudcopWSx8vmcQuCiyinhYin", 
      grant_type: "password"
    },);}
