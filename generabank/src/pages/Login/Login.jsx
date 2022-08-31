import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Styles
import styles from './Login.module.css'

const schema = yup.object({
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatório"),
}).required();

const Register = () => {

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
    </form>
    </div>
  )
}

export default Register