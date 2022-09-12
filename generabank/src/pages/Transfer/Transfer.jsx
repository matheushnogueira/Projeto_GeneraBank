import styles from "./Transfer.module.css"
import CurrencyInput from 'react-currency-masked-input'

const Transfer = () => {
  return (
    <div className={styles.back}>
      <div className={styles.card}>
        <h1>Saldo da conta</h1>
        <h2>R$ 11.000.000,00</h2>
        <label>
          Valor a tranferir 
          <CurrencyInput name="myInput" type="text" required />
        </label>
      </div>
    </div>
  )
}

export default Transfer