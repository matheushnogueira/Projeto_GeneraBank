import axios from "axios";


export const api = axios.create({
  baseURL: "https://e3bf-179-108-104-153.sa.ngrok.io",
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
      client_secret: "CKvPOg8HN1lTKOah6itNMpFMAk7XeUruSnN4RXO9", 
      grant_type: "password"
    },);}
