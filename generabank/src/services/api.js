import axios from "axios";

export const api = axios.create({
  baseURL: "https://7660-179-108-104-153.sa.ngrok.io",
  headers:{ 'Access-Control-Allow-Origin' : '*'},
  // /api/form
  // /oauth/token
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "LOtrpSu6GR0ong508P7zJQ87f0VWGuZflo0Uaisn", 
      grant_type: "password"
    },);}