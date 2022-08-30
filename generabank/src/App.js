import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar';
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import PessoaPf from './pages/Cadastro/PessoaPf'
import PessoaPj from './pages/Cadastro/PessoaPj'
import Saque from './pages/Saque/Saque'
import Deposito from './pages/Deposito/Deposito'
import Transferencia from './pages/Transferencia/Transferencia'
import GrBoleto from './pages/GrBoleto/GrBoleto'
import PgmBoleto from './pages/PgmBoleto/PgmBoleto'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/pessoapf' element={<PessoaPf />} />
        <Route path='/pessoapj' element={<PessoaPj />} />
        <Route path="/saque" element={<Saque />} />   
        <Route path="/deposito" element={<Deposito />} />
        <Route exact path="/tranferencia" element={<Transferencia />} />
        <Route exact path="/grboleto" element={<GrBoleto />} />
        <Route path="/pgmboleto" element={<PgmBoleto />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
