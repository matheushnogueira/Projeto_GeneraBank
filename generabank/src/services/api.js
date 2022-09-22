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
      client_secret: "4UhmJwBNhk6IVi0yYVcm5cVh5G3K2o83FdegBoQ2", 
      grant_type: "password"
    },);}
