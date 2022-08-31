import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, { useState } from 'react';
//Components
import NavBar from './components/NavBar/NavBar';
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import RegisterPj from './pages/Register/RegisterPj/RegisterPj'
//Contexts
import { AuthContext } from './contexts/auth';

const AppRoutes = () => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("login", {email, password })};
        setUser({id: "123", email});
        
    const logout = () => {
        console.log("logout")
    };

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <AuthContext.Provider value={{ athenticaded: !!user, user, login, logout }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> 
        <Route exact path="/registerpj" element={<RegisterPj />} />
      </Routes>
    </AuthContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes