import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { userAccount } from '../../services/api'


import styles from "./PageUser.module.css"

const PageUser = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

     useEffect(() => {
      (async () => {
        const response = await userAccount();
        setUsers(response.data);
        setLoading(false);
      })();
     }, []);

     if(loading){
      return <div className='loading'>Carregando dados...</div>;
     }   
    
  return (
    <>
      <div>PageUser</div> 
    </>
  )
}

export default PageUser