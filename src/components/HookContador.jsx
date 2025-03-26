import React, {useState} from 'react'

const HookContador = () => {

  const [contador, setcontador] = useState(1)

  function incrementaContador(){
    setcontador(contador + 1)
  }

  function decrementaContador(){
    setcontador(contador - 1)
  }

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementaContador}>Incrementar contador</button><br></br>
        <button onClick={decrementaContador}>Decrementar contador</button>
        <h1>O contador está em: {contador}</h1>
    </div>
  )
}

export default HookContador