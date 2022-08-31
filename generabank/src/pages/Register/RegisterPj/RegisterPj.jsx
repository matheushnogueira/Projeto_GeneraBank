import React from 'react'
import { useForm } from "react-hook-form";
import { cnpj } from 'cpf-cnpj-validator';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


//Styles
import styles from './RegisterPj.module.css'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  CNPJ: yup.string().required().test((value) => cnpj.isValid(value)),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatório"),
  confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
}).required();

const RegisterPj = () => {

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

      <h1>Para sua Empresa</h1>

      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>

      <label>
        CNPJ
        <input type="text" {...register("CNPJ", { required: true })} />
        {errors.CNPJ &&<span>Digite um CNPJ válido</span>}
      </label>

      <label>
        Email da empresa
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

export default RegisterPj