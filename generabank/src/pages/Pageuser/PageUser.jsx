import { useEffect } from "react";
import { useState} from "react"
import { api } from "../../services/api";


const PageUser = () => {

  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const userAccount = () => {
  const user = JSON.parse(localStorage.getItem("user"))

    const header= {
      headers: {
        "ngrok-skip-browser-warning" : null,  
        Authorization: ` Bearer ${user.access_token} `
      }};

    api.get("/api/show", header)
      .then((response) => {
        console.log(response.data)
        setAccount(response.data);
        setLoading(false)
      }).catch(() => {
        console.log("ERROR") 
      })}
 
      useEffect (() => {
        userAccount()
      },[])
 
  if(loading) {
    return <div className="loading">Carregando dados...</div>
  }

  return (
    <>
      <h1>PageUser</h1> 
      <ul>
          {
            Object.values(account).map((user, key) => (
            <li key={key}>
              {user.accounts.balance}
            </li>
          ))
          }
      </ul>
    </>
  )
}

export default PageUser