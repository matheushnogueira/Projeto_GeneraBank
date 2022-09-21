import {useState}       from 'react'
import { useForm }      from "react-hook-form";
import { useNavigate }  from "react-router-dom";
import { cpf, cnpj}     from 'cpf-cnpj-validator';
import { api }          from "../../services/api";
import { yupResolver }  from '@hookform/resolvers/yup';
import * as yup         from "yup";

//Styles
import styles           from './Register.module.css'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  document_number: yup.string().required().test((value) => cnpj.isValid(value) || cpf.isValid(value)),
  document_type: yup.mixed().required("Escolha um tipo de conta"),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required(),
  cep: yup.string().min(8, "CEP não é válido").max(8, "CEP não é válido").required(),
  addreses: yup.string().required("Digite o logradouro"),
  district: yup.string().required("Digite o bairro"),
  number: yup.string().required("Digite o número"),
  city: yup.string().required("Digite a cidade"),
  state: yup.string().required("Digite o estado"),
}).required();

const Register = () => {

const [type, setType] = useState("CPF")
const navigate = useNavigate();
const { 
  register, 
  handleSubmit, 
  formState: { errors } 
} = useForm({
  resolver: yupResolver(schema)
});

const addUser = data =>
  api.post("/api/form", 
  {
    name: data.name, 
    document_number: parseInt(data.document_number), 
    document_type: data.document_type,
    email: data.email,
    password: data.password,
    cep: parseInt(data.cep),
    addreses: data.addreses,
    district: data.district,
    number: parseInt(data.number),
    city: data.city,
    state: data.state
  }).then (
    (response) => {console.log(response.data)},
    alert("Cadastro feito com sucesso"),
    navigate("/login")
  )

return (
<div className={styles.back} >
<form className={styles.card} onSubmit={handleSubmit(addUser)}>

<h1>Abra sua conta</h1>
<div>

  <div>
    <input 
      className={styles.inputradio}
      type='radio'
      name="document_type" 
      value={"CPF"}  
      {...register("document_type", { required: true })}
      onClick={(e) => setType(e.target.value)} />
      Para você
  </div>

  <div>
    <input 
      className={styles.inputradio}
      type='radio'
      name="document_type" 
      value={"CNPJ"} 
      {...register("document_type", { required: true })}
      onClick={(e) => setType(e.target.value)} />
      Para sua empresa
  </div>

<span className={styles.radio}>{errors.document_type?.message}</span>
</div>

      <label>
        Nome
        <input type="text" name='name' {...register("name", { required: true })}/>
        <span>{errors.name?.message}</span>
      </label>

      <div className={styles.buttonType}>
        {type === "CPF" ? 
        <label>
          CPF/CNPJ
            <input 
            type="number" 
            name='document_number'  
            placeholder='CPF'
            {...register("document_number", { required: true })} 
            />
            {errors.document_number &&<span>Digite um CPF válido</span>}
        </label>
        : 
        <label>
          CPF/CNPJ
          <input 
          type="number" 
          name='document_number' 
          placeholder='CNPJ'
          {...register("document_number", { required: true })} />
          {errors.document_number &&<span>Digite um CNPJ válido</span>}
        </label>}
      </div>

      <label>
        Email
        <input 
        type="text" 
        name='email' 
        {...register("email", { required: true })} />
        <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha
        <input type="password" name='password' {...register("password", { required: true })} />
        <span>{errors.password?.message}</span>
      </label>

    </form>
    <form className={styles.card} onSubmit={handleSubmit(addUser)}>

      <h1>Cadastre seu endereço</h1>

      <label>
        CEP
        <input type="number" name='cep' {...register("cep", { required: true })} />
        <span>{errors.cep?.message}</span>
      </label>

      <label>
        Rua (Logradouro)
        <input type="text" name='addreses' {...register("addreses", { required: true })} />
        <span>{errors.addreses?.message}</span>
      </label>

      <label>
        Bairro
        <input type="text" name='district' {...register("district", { required: true })} />
        <span>{errors.district?.message}</span>
      </label>

      <label>
        Complemento
        <input type="text" name='complement' {...register("complement")} />
      </label>

      <label>
        Número
        <input type="number" name='number' {...register("number", { required: true })} />
        <span>{errors.number?.message}</span>
      </label>

      <label>
        Cidade
        <input type="text" name='city' {...register("city", { required: true })} />
        <span>{errors.city?.message}</span>
      </label>

      <label>
        Estado
        <input type="text" name='state' {...register("state", { required: true })} />
        <span>{errors.state?.message}</span>
      </label>

      <button type="submit" >Cadastrar-se</button>
      
    </form>
    </div>
  )
}

export default Register