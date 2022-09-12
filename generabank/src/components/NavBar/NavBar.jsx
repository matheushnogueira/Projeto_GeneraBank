import React from 'react'
import { NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/Logo_32.png'
import { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"

const NavBar = () => {
  const { authenticated, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }

  return (
    <>
    <nav className={styles.navbar}>
      
        <div className={styles.logo}>
          <NavLink to="/"><img src={logo} alt="" /></NavLink>
        </div>

        <ul className={styles.list}>
          {authenticated ? 
          <>
            <li><NavLink to="/transfer">Transferência</NavLink></li> 
            <li><NavLink to="/deposit">Deposito</NavLink></li>
            <li><NavLink to="/withdraw">Saque</NavLink></li>
            <li><NavLink to="/ticket">Gerar boleto</NavLink></li>
            <li><NavLink to="/payticket">Pagamento de  boleto</NavLink></li>
            <li><button className={styles.button } onClick={handleLogout}>Sair</button></li>
          </>
          :
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Cadastre-se</NavLink></li>
          </>
        }
        </ul>
            
    </nav>
    </>
  )
}

export default NavBar