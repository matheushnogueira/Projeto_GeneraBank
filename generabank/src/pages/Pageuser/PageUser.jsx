import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
//import { userAccount } from '../../services/api'
import { api } from '../../services/api'


import styles from "./PageUser.module.css"

const PageUser = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const teste = async () => {
    const user= JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token", token);
    //console.log(user.access_token)
    
 const config =  
 {headers: {Accept: "application/json", "ngrok-skip-browser-warning" : null,  Authorization: ` Bearer ${token} `}};
 axios.get("https://741c-179-108-104-153.sa.ngrok.io/api/users", config)
   .then((response) => {
     console.log(response)
    //  setUsers(response.data)
    //  setLoading(false)
   }).catch((e) => {
     console.log("ERROR", e)
   })
  }

  useEffect(() => {
    teste()
   
  }, [teste])

     if(loading){
      return <div className='loading'>Carregando dados...</div>;
     }   
    
  return (
    <>
      <h1>PageUser</h1> 
    </>
  )
}

export default PageUser