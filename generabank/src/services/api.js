import axios from "axios";

export const api = axios.create({
    headers:{
                     'x-apikey': '59a7ad19f5a9fa0808f11931',
                     'Access-Control-Allow-Origin' : '*',
                     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 },
    baseURL: "https://google.com",
        
    
   // https://5cca-179-108-104-153.sa.ngrok.io/api/form
});


/*export const createSession = async (email, password) => {
    return api.get("",{email, password});
}*/
// const createSession = () => {
//     return (
//       axios.post("https://5cca-179-108-104-153.sa.ngrok.io/oauth/token", {
//         headers:{
//             'x-apikey': '59a7ad19f5a9fa0808f11931',
//             'Access-Control-Allow-Origin' : '*',
//             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         }
//       }
//       ).then ((response) => {console.log(response.data)})
//     )
//   }
  


  export const createSession = async (email, password) => {
    return api.get("",{email, password}, 
   );}