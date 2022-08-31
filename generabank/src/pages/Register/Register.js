import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Register.module.css'

const Register = () => {

  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>Para Você</h1>
        
        
        <span className={styles.link}><NavLink to="/registerpj">Conta empresa</NavLink></span>

        <div className={styles.inputs}>

          <label>
            <span>Nome:</span>
            <input type="text" name='name' placeholder='Digite seu nome' />
          </label>

          <label>
            <span>CPF:</span>
            <input type="cpf" name='CPF' placeholder='Digite seu CPF' />
          </label>

          <label>
            <span>Email:</span>
            <input type="email" name='email' placeholder='Digite seu email' />
          </label>

          <label>
            <span>Telefone:</span>
            <input type="telefone" name='telefone' placeholder='Digite seu telefone' />
          </label>

          <label>
            <span>Senha:</span>
            <input type="senha" name='senha' placeholder='Digite sua senha' />
          </label>

        </div>

        <div className={styles.button}>
          <NavLink to="/">Finalizar Cadastro</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Register