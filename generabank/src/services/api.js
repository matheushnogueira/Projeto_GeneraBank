import axios from "axios";


const api = axios.create({
  baseURL: "https://7136-179-108-104-153.sa.ngrok.io",
  headers:{ 'Access-Control-Allow-Origin' : '*'},
  // /api/form
  // /oauth/token
});
export default api;

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "iEu5gP1mdidiIsJWyoDpS1sXCrhSjEHHYNTKV4dV", 
      grant_type: "password"
    },);}

  // export const showUser = async () =>{
  //   return api.get("/api/show")
  // }