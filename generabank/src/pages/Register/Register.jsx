import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { cpf, cnpj} from 'cpf-cnpj-validator';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//Styles
import styles from './Register.module.css'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  document_number: yup.string().required().test((value) => cnpj.isValid(value) || cpf.isValid(value)),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatório"),
}).required();

const Register = () => {

  const [type, setType] = useState("CPF")

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

      <h1>Abra sua conta</h1>

      <div className='inputradio'>
        <input 
        type='radio'
        name="document_type" 
        value={"CPF"}  
        {...register("document_type", { required: true })}
        onClick={(e) => setType(e.target.value)} />
        <label htmlFor="document_typr">Para você</label>
      </div>

      <div className='inputradio'>
        <input 
        type='radio'
        name="document_type" 
        value={"CNPJ"} 
        {...register("document_type", { required: true })}
        onClick={(e) => setType(e.target.value)} />
        <label htmlFor="document_type">Para sua empresa</label>
      </div>
    
      <label>
        Nome
        <input type="text" name='name' {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>

      <div className='buttonType'>
        {type === "CPF" ? 
        <label>
          CPF/CNPJ
            <input 
            type="text" 
            name='document_number'  
            placeholder='CPF'
            {...register("document_number", { required: true })} 
            />
            {errors.CPF &&<span>Digite um CPF válido</span>}
        </label>
        : 
        <label>
          CPF/CNPJ
          <input 
          type="text" 
          name='document_number' 
          placeholder='CNPJ'
          {...register("document_number", { required: true })} />
          {errors.CNPJ &&<span>Digite um CNPJ válido</span>}
        </label>}
  
      <label>
        Email
        <input type="text" name='email' {...register("email", { required: true })} />
        <span>{errors.email?.message}</span>
      </label>
      </div>

      <label>
        Senha
        <input type="password" name='password' {...register("password", { required: true })} />
        <span>{errors.password?.message}</span>
      </label>

      <button type="submit">Cadastrar-se</button>
    </form>
    </div>
  )
}

export default Register