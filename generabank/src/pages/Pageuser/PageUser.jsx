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
        //console.log(response.data.data)
        setAccount(response.data.data);
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
    <>
      <h1>PageUser</h1> 
    </>
  )
}

export default PageUser