
import { useState } from 'react'
import Botao from "./components/Botao"

const Itens = ({ status }) => {

    const [estado, setEstado] = useState('')

    const verStatus = () => {
        if (estado === true) {
            setEstado(status)
            alert('Ativado')
        }

        if (estado === false) {
            setEstado(status)
            alert('Desativado')
        }
    }
  return (
    <div>
       
        <h2>Ver estado atual</h2>
        <button onClick={verStatus}>Enviar</button>
    </div>
  )
}

export default Itens