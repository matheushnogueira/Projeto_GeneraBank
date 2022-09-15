import React, { useContext, useState } from 'react'
import { NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../assets/Logo_32.png'
import { AuthContext } from "../../contexts/auth"
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  const {authenticated, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }
  
  return (
    <>
    <nav className={styles.navbar}>

        <NavLink className={styles.logo} to="/"><img src={logo} alt="" /></NavLink>

        <ul className={isMobile ? (styles.list_mobile) : (styles.list)} onClick={() => setIsMobile(false)}>

          {/* {authenticated ?  */}
          <>
            <NavLink className={styles.transfer} to="/pageuser"><li>Sua Conta</li></NavLink>
            <NavLink className={styles.transfer} to="/transfer"><li>Transferência</li></NavLink>
            <NavLink className={styles.deposit } to="/deposit"><li>Depósito</li></NavLink>
            <NavLink className={styles.withdraw} to="/withdraw"><li>Saque</li></NavLink>
            <NavLink className={styles.ticket} to="/ticket"><li>Gerar boleto</li></NavLink>
            <NavLink className={styles.payticket} to="/payticket"><li>Pagamento de  boleto</li></NavLink>
            <li><button className={styles.logout} onClick={handleLogout}>Sair</button></li> 
          </>
          {/* // :
          // <>
          //   <NavLink className={styles.login} to="/login"><li>Login</li></NavLink>
          //   <NavLink className={styles.register} to="/register"><li>Cadastre-se</li></NavLink>
          // </>
          // } */}
        </ul>
        <button className={styles.mobile_menu_icon} onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (<FaTimes/>) : (<FaBars/>)}
        </button>
    </nav>
    </>
  )
}

export default NavBar