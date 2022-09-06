import axios from "axios";

const teste = () => {
  return (
    axios.get("https://5cca-179-108-104-153.sa.ngrok.io/teste.php",'','Access-Control-Allow-Origin' 
    ).then ((response) => {console.log(response.data)})
  )
}

export default teste
// // const teste = () => {
// //     return (
// //       axios.get("https://5cca-179-108-104-153.sa.ngrok.io/teste.php", {
// //         headers:{
// //             'x-apikey': '59a7ad19f5a9fa0808f11931',
// //             'Access-Control-Allow-Origin' : '*',
// //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
// //         }
// //       }
// //       ).then ((response) => {console.log(response.data)})
// //     )
//   }
  
//   export default teste



