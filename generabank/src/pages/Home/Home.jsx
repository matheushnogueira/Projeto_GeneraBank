import React from 'react'
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
     
      <div className={styles.card}>

        <div className={styles.text}>
          <h1>
            Conta 100% digital. <br />
            Seu gerenciamento financeiro <br />
            Prático, rápido e seguro <br />
          </h1>
       </div>

       <div className={styles.button}>
          <h1>
            <NavLink to="/cadastro">Abra sua conta</NavLink>
          </h1>
        </div>
      </div> 
  )
}

export default Home