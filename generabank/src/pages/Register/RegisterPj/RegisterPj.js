import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './RegisterPj.module.css'

const RegisterPj = () => {

  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>Para sua empresa</h1>

        <div className={styles.inputs}>

          <label>
            <span>Nome:</span>
            <input type="text" name='name' placeholder='Digite seu nome' />
          </label>

          <label>
            <span>CNPJ:</span>
            <input type="cpf" name='CPF' placeholder='Digite o CNPJ' />
          </label>

          <label>
            <span>Email da empresa:</span>
            <input type="email" name='email' placeholder='Digite o email da empresa' />
          </label>

          <label>
            <span>Telefone para contato:</span>
            <input type="telefone" name='telefone' placeholder='Digite o telefone' />
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

export default RegisterPj