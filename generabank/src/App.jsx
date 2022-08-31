import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar';
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import RegisterPj from './pages/Register/RegisterPj/RegisterPj'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/registerpj" element={<RegisterPj />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
