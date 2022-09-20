import axios from "axios";


export const api = axios.create({
  baseURL: "https://4dfb-179-108-104-153.sa.ngrok.io/",
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
      client_secret: "01gC0n77wvtsQAMZC9mB6xVkOQcpXLdE719UVKb3", 
      grant_type: "password"
    },);}
