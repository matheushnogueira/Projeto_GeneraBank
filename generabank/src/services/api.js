import axios from "axios";


export const api = axios.create({
  baseURL: "https://d867-179-108-104-153.sa.ngrok.io",
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "QXt2vJPxA7nvA1otiQYpnskqcjGCg3DcJWO3VhK7", 
      grant_type: "password"
    },);}

  export const userAccount = async () => {
    return api.get("/api/show")
  }