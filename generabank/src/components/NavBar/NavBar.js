import React from 'react'
import { NavLink} from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/Logo_64.png'

const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
        <NavLink to="/">
            <img src={logo} alt="" />  
        </NavLink>
        
        <ul className='list'>
            <li className='items'><NavLink to="/login">Login</NavLink></li>
            <li className='items'><NavLink to="/cadastro">Cadastre-se</NavLink></li>
            <li className='items'><NavLink to="/saque">Saque</NavLink></li>
            <li className='items'><NavLink to="/deposito">Depósito</NavLink></li>
            <li className='items'><NavLink to="/tranferencia">Transferência</NavLink></li>
            <li className='items'><NavLink to="/grboleto">Geração de Boleto</NavLink></li>
            <li className='items'><NavLink to="/pgmboleto">Pagamento de Boleto</NavLink></li> 
        </ul>
            
    </nav>
    </>
  )
}

export default NavBar