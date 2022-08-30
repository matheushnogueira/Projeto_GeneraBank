import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cadastro.module.css'

const Cadastro = () => {

  

  return (
    <div className={styles.back}>
      <form className={styles.card}>

        <h1>CADASTRO</h1>
        <p>Nos diga quem é você:</p>

        <div className={styles.button}>
           <NavLink to="/PessoaPf">Para você</NavLink>
           <NavLink to="/PessoaPj">Para sua empresa</NavLink> 
        </div>

      </form>
    </div>
  )
}

export default Cadastro