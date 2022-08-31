import React from 'react'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Styles
import styles from './Register.module.css'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  CPF: yup.string().required().test((value) => cpf.isValid(value)),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatório"),
  confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
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

      <h1>Para Você</h1>
      <p className={styles.link}><NavLink to="/registerpj">Conta empresa</NavLink></p>

      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>

      <label>
        CPF
        <input type="text" {...register("CPF", { required: true })} />
        {errors.CPF &&<span>Digite um CPF válido</span>}
      </label>

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

      <label>
        Confirmar Senha
        <input type="password" {...register("confirmPassword", { required: true })} />
        <span>{errors.confirmPassword?.message}</span>
      </label>

      <button type="submit">Cadastrar-se</button>
    </form>
    </div>
  )
}

export default Register