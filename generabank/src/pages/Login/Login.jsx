import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import styles from "./Login.module.css"


const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });

    login(email, password);
  };

  return (
    <div id={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <h1 className={styles.title}>Login</h1>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email} 
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