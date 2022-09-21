import { cpf, cnpj} from 'cpf-cnpj-validator';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import styles from "./Transfer.module.css"

const schema = yup.object({
  document_number: yup.string().required("Digite o documento da conta").test((value) => cnpj.isValid(value) || cpf.isValid(value)),
  agency: yup.string().required("Informe a agência"),
  account_number: yup.string().min(16,"Informe uma conta válida").required(),
  value:  yup.string().required("Digite o valor a ser transferido"),
}).required();

const Transfer = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({resolver: yupResolver(schema)});

  const valueTransfer = data =>
    api.post("", {

    }).then(
      (response) => {console.log(response.data)}
    )

  return (
    <div className={styles.back}>
      <form className={styles.card} onSubmit={handleSubmit(valueTransfer)}>

      <h1>Transferência</h1>

        <label>
          CPF ou CNPJ
          <input 
            type="number"
            name="document_number"
            {...register("document_number", { required: true})}
           />
           <span>{errors.document_number?.message}</span>
        </label>

        <div className={styles.agency}>
        <label>
          Agência
          <input 
            type="number"
            name='agency'
            {...register("agency", { required: true})}
          />
          <span>{errors.agency?.message}</span>
        </label>
        <label>
          Conta e Dígito
          <input 
            type="number"
            name='account_number'
            {...register("account_number", { required: true})} 
          />
          <span>{errors.account_number?.message}</span>
        </label>
        </div>

        <label>
          Valor a ser transferido
          <input 
            type="number"
            name='value'
            {...register("value", { required: true})} 
          />
          <span>{errors.value?.message}</span>
        </label>

        <div className={styles.actions}>
          <button type="submit">Concluir</button>
        </div>

      </form>
    </div>
  )
}

export default Transfer