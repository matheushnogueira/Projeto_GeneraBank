import { useEffect } from "react";
import { useState } from "react"
import { api } from "../../services/api";

import styles from './PageUser.module.css'
import { FaEye, FaEyeSlash }      from 'react-icons/fa'


const PageUser = () => {

  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false)
 
  const userAccount = () => {
  const user = JSON.parse(localStorage.getItem("user"))

    const header= {
      headers: {
        "ngrok-skip-browser-warning" : null,  
        Authorization: ` Bearer ${user.access_token} `
      }};

    api.get("", header)
      .then((response) => {
        setAccount([response.data]);
        setLoading(false)
      }).catch(() => {
        console.log("ERROR") 
      })}
 
      useEffect (() => {
        userAccount()
      },[])

  console.log(account)

  if(loading) {
    return <div className="loading">Carregando dados...</div>
  }

  

  return (
    <div className={styles.back}> 
      <div>
      {account.map((user, key) => (
        <div className={styles.userData}>
          <p key={key}>Usuário: {user.userName}</p>
          <p key={key}>Email de cadastro: {user.email}</p>
          <div className={styles.accountData}>
            <h3 key={key}>Agência: {user.agency_id}</h3>
            <h3 key={key}>Número da conta: {user.accounts_number}</h3>
            <div key={key}>
              <h3 className={styles.saldo}>Saldo:
                {
                  show?<>R$ {user.account_balance}</>:null
                }
              
                <button 
                  className={styles.eye} 
                  onClick={()=>setShow(!show)}>{show ? (<FaEye/>) : (<FaEyeSlash/>)}
                </button>
              </h3>
            </div>
          </div>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default PageUser

// account_balance: "9800.00"
// accounts_number: "0011332243343400"
// agency_id: 1
// cpf: "123456"
// email: "Lucas@gamil.com"
// userName: "Lucas"