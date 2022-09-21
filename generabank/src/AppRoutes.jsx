import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';

//Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Transfer from './pages/Transfer/Transfer';
import Deposit from './pages/Deposit/Deposit'
import Withdraw from './pages/Withdraw/Withdraw'
import Ticket from './pages/Ticket/Ticket'
import PayTicket from './pages/PayTicket/PayTicket'
import PageUser from './pages/Pageuser/PageUser'

//Contexts
import { AuthProvider, AuthContext } from './contexts/auth';

const AppRoutes = () => {
   const Private = ({children}) =>{
      const {authenticated, loading} = useContext(AuthContext);

      if(loading){
        return <div className='loading'>Carregando...</div>
      }

      // if(!authenticated){
      //   return <Navigate to="/login" />;
      // };
      return children;
   };

  return (
    <BrowserRouter>
    <AuthProvider>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> 
        <Route exact path="/transfer" element={<Private> <Transfer /> </Private>} />
        <Route exact path="/deposit" element={<Private> <Deposit /> </Private>} />
        <Route exact path="/withdraw" element={<Private> <Withdraw /> </Private>} />
        <Route exact path="/ticket" element={<Private> <Ticket /> </Private>} />
        <Route exact path="/payticket" element={<Private> <PayTicket /> </Private>} />
        <Route exact path='/pageuser' element={<Private> <PageUser /> </Private>} />
      </Routes>
      <Footer />
    </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRoutes