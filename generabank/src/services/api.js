import axios from "axios";

export const api = axios.create({
  baseURL: "https://4e25-179-108-104-153.sa.ngrok.io/oauth/token",
  headers:{ 'Access-Control-Allow-Origin' : '*', },
  // /api/form
});

  export const createSession = async (email, password) => {
    return api.post("",{email, password}, 
   );}



// const handleSubmit = data => 
  // axios.post("https://4e25-179-108-104-153.sa.ngrok.io/oauth/token", 
  // {
  //   email: data.email,
  //   password: data.password
  // }
  // ).then ((response) => {console.log(response.data)})