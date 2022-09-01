import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
//Components
import NavBar from './components/NavBar/NavBar';
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Transfer from './pages/Transfer/Transfer';
//Contexts
import { AuthProvider, AuthContext } from './contexts/auth';

const AppRoutes = () => {
   const Private = ({children}) =>{
      const { authenticated } = useContext(AuthContext);

      if(!authenticated){
        return <Navigate to="/login" />;
      };
      return children;
   };

  return (
    <BrowserRouter>
    <NavBar />
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> 
        <Route exact path="/transfer" element={<Private> <Transfer /> </Private>} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes