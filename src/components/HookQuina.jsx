import React, {useState} from 'react'

const HookQuina = () => {


    const [sorteado, setsorteado] = useState()
    const [listaSorteados, setlistaSorteados] = useState([])

    function sortearNumeros(){
        if(listaSorteados.length < 5){
            let numeroSorteado = Math.floor(Math.random() * 80) + 1
            setsorteado(numeroSorteado)
            setlistaSorteados([...listaSorteados, numeroSorteado])}
            else(
                alert("Já temos cinco números sorteados!")
            )
    }
  return (
    <div>
        <h1> Sorteador de números da Quina!</h1>
        <button onClick={() => {sortearNumeros()}}>Sortear</button>
        <h2>Último número sorteado: {sorteado}</h2>
        <h2>Números sorteados: {listaSorteados.join(" - ")}</h2>
    </div>
  )
}

export default HookQuina