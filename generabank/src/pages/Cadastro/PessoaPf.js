import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './PessoaPf.module.css'

const PessoaPf = () => {

  

  return (
    <div className={styles.back}>
      <form className={styles.card}>
        <h1>CADASTRO</h1>

        <div className={styles.inputs}>
          <label>
            <span>Nome Completo:</span>
            <input type="text" name="name" required placeholder='Digite seu nome completo'/>
          </label>

          <label>
            <span>CPF:</span>
            <input type="number" name="cpf" required placeholder='Digite seu nome CPF'/>
          </label>

          <label>
            <span>Email:</span>
            <input type="email" name="email" required placeholder='Digite seu nome email'/>
          </label>

          <label>
            <span>Telefone</span>
            <input type="number" name="telefone" required placeholder='Digite seu nome telefone'/>
          </label>

          <label>
            <span>Senha:</span>
            <input type="text" name="senha" required placeholder='digite uma senha'/>
          </label>
        </div>

        <div className={styles.button}>
         <NavLink to="/">Abra sua conta</NavLink>
        </div>

      </form>
    </div>
  )
}

export default PessoaPf