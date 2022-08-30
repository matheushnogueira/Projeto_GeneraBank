import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PessoaPj.module.css'

const PessoaPj = () => {

  

  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>CADASTRO</h1>

        <div className={styles.inputs}>
          <label htmlFor="cpf">CNPJ:</label>
          <input type="text" name="cnpj" placeholder='Digite seu CNPJ'/>

          <label htmlFor="name">Nome Completo:</label>
          <input type="text" name="name" placeholder='Digite seu nome completo'/>

          <label htmlFor="name">Razão Social:</label>
          <input type="text" name="razao" placeholder='Digite sua razão social'/>

          <label htmlFor="name">Nome da Empresa:</label>
          <input type="text" name="empresa" placeholder='Digite os nome da empresa'/>

          <label htmlFor="telefone">Telefone:</label>
          <input type="text" name="telefone" placeholder='Digite seu telefone'/>

          <label htmlFor="senha">Senha:</label>
          <input type="text" name="senha" placeholder='Digite uma senha'/>

        </div>

        <div className={styles.button}>
          <NavLink to="/">Abra sua conta</NavLink>
        </div>

      </form>
    </div>
  )
}

export default PessoaPj