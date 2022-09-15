import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
//import { userAccount } from '../../services/api'


import styles from "./PageUser.module.css"

const PageUser = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://d867-179-108-104-153.sa.ngrok.io/api/show/")
    .then((response) => {
      console.log(response.data)
      // setUsers(response.data)
      // setLoading(false)
    }).catch(() => {
      console.log("ERROR")
    })
  }, [])

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