import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './PessoaPj.module.css'

const PessoaPj = () => {

  

  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>CADASTRO</h1>

        <div className={styles.inputs}>
          <label>
            <span>CNPJ:</span>
            <input type="number" name="cnpj" placeholder='Digite seu CNPJ'/>
          </label>

          <label>
            <span>Nome Completo:</span>
            <input type="text" name="name" placeholder='Digite seu nome completo'/>
          </label>

          <label>
            <span>Razão Social:</span>
            <input type="text" name="razao" placeholder='Digite sua razão social'/>
          </label>

          <label>
            <span>Nome da Empresa:</span>
            <input type="text" name="empresa" placeholder='Digite os nome da empresa'/>
          </label>

          <label >
            <span>Email da empresa:</span>
            <input type="email" name="email" placeholder='Digite o email da empresa'/>
          </label>

          <label>
            <span>Senha:</span>
            <input type="text" name="senha" placeholder='Digite uma senha'/>
          </label>
        </div>

        <div className={styles.button}>
          <NavLink to="/">Abra sua conta</NavLink>
        </div>

      </form>
    </div>
  )
}

export default PessoaPj