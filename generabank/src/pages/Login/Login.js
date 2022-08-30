import React from 'react'
import styles from './Login.module.css'
import {NavLink} from 'react-router-dom'
 
const Login = () => {
  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>LOGIN</h1>
        
        <div className={styles.inputs}>

          <label htmlFor="email"><h3>Email:</h3></label>
          <input type="text" className='email' placeholder='Digite o email da conta' />

          <label htmlFor="senha"><h3>Senha:</h3></label>
          <input type="text" className='senha' placeholder='Digite a senha da conta' />

        </div>

        <div className={styles.button}>
          <NavLink to="/">Entrar</NavLink>
        </div>

        <div className={styles.cadastro}>
          <NavLink to="/cadastro">Abra sua conta</NavLink>
        </div>

      </form>
    </div>
  )
}

export default Login