import { useEffect } from "react";
import { useState } from "react"
import { api } from "../../services/api";

import styles from './PageUser.module.css'
import { FaEye, FaEyeSlash, FaUserCircle} from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'

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

    api.get("/api/show", header)
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
      <>
        {account.map((user, key) => (
        <div key={key} className={styles.userData}>
          <FaUserCircle className={styles.userIcon}/>
          <h2>{user.userName}</h2>
          <p>CPF/CNPJ: {user.cpf}</p>
          <p>Agência: {user.agency_id}</p>
          <p>Número da conta: {user.accounts_number}</p>
            
          <div className={styles.accountData}>
            <h1 className={styles.saldo}>Saldo:
              {
                show?<>R$ {user.account_balance}</>:null
              }
              <button 
                className={styles.eye} 
                onClick={()=>setShow(!show)}>{show ? (<FaEye/>) : (<FaEyeSlash/>)}
              </button>
            </h1>
          </div>
          
          <p className={styles.config}><BsGearFill/>Configurações de perfil</p>
        </div>
      ))}
        <div className={styles.transaction}>
              <h1>Últimas transações</h1>
        </div>
      </>
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