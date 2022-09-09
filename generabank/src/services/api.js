import axios from "axios";

export const api = axios.create({
  baseURL: "https://971b-179-108-104-153.sa.ngrok.io",
  headers:{ 'Access-Control-Allow-Origin' : '*'},
  // /api/form
  // /oauth/token
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "2", 
      client_secret: "z3R6qsnvSV9D4V65AuLu7MRFWwVzmdlxSY8cr7pD", 
      grant_type: "password"
    },);}