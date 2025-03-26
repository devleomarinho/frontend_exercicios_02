import React, {useState} from 'react'

const HookMegasena = () => {

    const [sorteado, setSorteado] = useState()
    const [listaSorteados, setlistaSorteados] = useState([])


  function sortearNumeros(){
    if(listaSorteados.length < 6){
        let numeroSorteado = Math.floor(Math.random() * 60) + 1
        setSorteado(numeroSorteado)
        setlistaSorteados([...listaSorteados, numeroSorteado])
    }else{
        alert("Já temos seis números sorteados!")
        
    }
  }
  
  return (
    <div>
        <h1>Sorteador de números da Mega Sena!</h1>
        <button onClick={() => {sortearNumeros()}}>Sortear números</button><br></br>
        <h1>Último número sorteado: {sorteado}</h1>
        <h1>Números sorteados: {listaSorteados.join(" - ")}</h1>


    </div>
  )
}

export default HookMegasena