import React from 'react'
import { NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/Logo_32.png'

const NavBar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      
        <div className={styles.logo}>
          <NavLink to="/"><img src={logo} alt="" /></NavLink>
        </div>

        <ul className={styles.list}>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/cadastro">Cadastre-se</NavLink></li>
        </ul>
            
    </nav>
    </>
  )
}

export default NavBar