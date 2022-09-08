import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
//import { AuthContext } from '../../contexts/auth';

import styles from "./Login.module.css"


const LoginPage = () => {

  // const { login } = useContext(AuthContext);

  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const handleSubmit = (e) => {
    // e.preventDefault();
  
     //login(email, password);
  // };

  const addLogin = async(data) => {
   data.preventDefault();
  console.log(username, password)

    let user = {
      username, 
      password, 
      client_id: "2", 
      client_secret: "z3R6qsnvSV9D4V65AuLu7MRFWwVzmdlxSY8cr7pD", 
      grant_type: "password"
    }

    await fetch("https://9c2e-179-108-104-153.sa.ngrok.io/oauth/token", 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response =>{
      return response.json();
    })
        .then(data => {
      console.log(data);
    })
        .catch(erro => {
      console.log(erro, 'erro')
    })}

  return (
    <div id={styles.login}>
      <form className={styles.form} onSubmit={addLogin}>

        <h1 className={styles.title}>Login</h1>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={username} 
          onChange={(e) => setEmail(e.target.value) } 
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="passaword">Senha</label>
          <input 
          type="password" 
          name="password" 
          id="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value) }
          />
        </div>
        <div className={styles.actions}>
          <button type="submit">Entrar</button>
        </div>
        <div className={styles.field}>
          <NavLink to="/register">Cadastre-se já</NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage