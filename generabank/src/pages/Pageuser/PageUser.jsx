import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { showUser } from '../../services/api'


import styles from "./PageUser.module.css"

const PageUser = () => {

     useEffect(() => {
        axios.get("https://7136-179-108-104-153.sa.ngrok.io/api/show/2")
       .then((response) => {
         console.log(response);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);
    
  return (
    <div>PageUser</div>
  )
}

export default PageUser