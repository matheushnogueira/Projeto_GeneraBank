import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PessoaPf.module.css'

const PessoaPf = () => {

  

  return (
    <div className={styles.back}>
      <form className={styles.card}>
        <h1>CADASTRO</h1>

        <div className={styles.inputs}>
          <label htmlFor="name">Nome Completo:</label>
          <input type="text" name="name" placeholder='Digite seu nome completo'/>

          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" placeholder='Digite seu CPF'/>

          <label htmlFor="telefone">Telefone:</label>
          <input type="text" name="telefone" placeholder='Digite seu telefone'/>

          <label htmlFor="senha">Senha:</label>
          <input type="text" name="telefone" placeholder='Digite uma senha'/>
        </div>

        <div className={styles.button}>
         <NavLink to="/">Abra sua conta</NavLink>
        </div>

      </form>
    </div>
  )
}

export default PessoaPf