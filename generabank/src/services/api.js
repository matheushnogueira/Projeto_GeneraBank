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
      client_secret: "V3hBo5ybMNdg8488u6r3LqhsjciaETKG6qSEMnYd", 
      grant_type: "password"
    },);}

  // export const userAccount = async () => {
  //   return api.get("/api/show")
  // }