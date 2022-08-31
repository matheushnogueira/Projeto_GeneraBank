import React from 'react'
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

//Styles
import styles from './Login.module.css'


const schema = yup.object({
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatório"),
}).required();

const LoginPage = () => {
  const { autheticated, login } = useContext(AuthContext)

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(userData){
    console.log(userData)
  }

  return (
    <div className={styles.back}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>

      <h1>Login</h1>

      <label>
        Email
        <input type="text" {...register("email", { required: true })} />
        <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha
        <input type="password" {...register("password", { required: true })} />
        <span>{errors.password?.message}</span>
      </label>

      <button type="submit">Entrar</button>

    <div>
      <NavLink to='/register'>Cadastre-se já</NavLink>
    </div>
    
    </form>
    </div>
  )
}

export default LoginPage