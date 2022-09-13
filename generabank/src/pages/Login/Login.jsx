import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';


import styles from "./Login.module.css"

const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }


  return (
    <div className={styles.back}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <h1 className={styles.title}>Login</h1>

          <label>
          Email
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={username} 
          onChange={(e) => setUsername(e.target.value) } 
          />
          </label>

          <label>
          Senha
          <input 
          type="password" 
          name="password" 
          id="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value) }
          />
          </label>
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