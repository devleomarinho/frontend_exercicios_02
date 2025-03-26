# Exercicíos da aula 02

### Este repositório contém os dois exercícios da segunda aula de React:

- A) Crie um componente chamado “HookMegaSena”. Nele, inicialize um useState que armazena um número sorteado, que tem o estado inicial vazio. Crie outro useState com o estado inicial de um array vazio para armazenar os números sorteados. Seu componente terá uma função chamada 'sortearNumero'.

- B) Crie um componente chamado “HookQuina”. Nele, inicialize um useState que armazena um número sorteado, que tem o estado inicial vazio. Crie outro useState com o estado inicial de um array vazio para armazenar os números sorteados. Seu componente terá uma função chamada 'sortearNumero'.

### Soluções:

- A) Criei o componente 'HookMegasena' na pasta 'components', salvando-o com a extensão .jsx. Utilizando o atalho "useStateSnippet", criei um useState que contém duas variáveis: 'sorteado', para receber um número aleatório, e 'setSorteado', usada para modificar o estado inicial. Usando o mesmo atalho, criei outro useState para guardar um array que contém os números sorteados. Em seguida, criei uma função, chamada 'sortearNumeros' que primeiro verifica se a lista tem um tamanho menor que seis (quantidade máxima de números que podem ser sorteados na mega sena); caso não tenha, utiliza uma função matemática do javascript, Math.random(), que gera um número aleatório, definida aqui para ir de 1 a 60; em seguida, guarda esse número na lista de números sorteados. Quando a lista atingir o tamanho máximo de seis números, é exibido um alerta para o usuário.

```
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
```

Após a criação do componente, fiz a importação dentro do componente pai, 'App.jsx':

```
import React from 'react'
import HookMegasena from './components/HookMegasena'

const App = () => {
  return (
    <div>
      <HookMegasena/>
    </div>
  )
}

export default App
``` 
O resultado na tela do navegador é:

![image](https://github.com/user-attachments/assets/71827651-b303-4a84-a6ca-3cfe8b6d1fb7)



- B) De forma similar ao componente anterior, criei o componente 'HookQuina' na pasta 'components', salvando-o com a extensão .jsx. Utilizando o atalho "useStateSnippet", criei um useState que contém duas variáveis: 'sorteado', para receber um número aleatório, e 'setSorteado', usada para modificar o estado inicial. Usando o mesmo atalho, criei outro useState para guardar um array que contém os números sorteados. Em seguida, criei uma função, chamada 'sortearNumeros' que primeiro verifica se a lista tem um tamanho menor que cinco (quantidade máxima de números que podem ser sorteados na quina); caso não tenha, utiliza uma função matemática do javascript, Math.random(), que gera um número aleatório, definida aqui para ir de 1 a 80; em seguida, guarda esse número na lista de números sorteados. Quando a lista atingir o tamanho máximo de cinco números, é exibido um alerta para o usuário.

```
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
  
```

Agora, o 'App.jsx' ficou assim, com o acréscimo do componente HookQuina:

```
import React from 'react'
import HookMegasena from './components/HookMegasena'
import HookQuina from './components/HookQuina'


const App = () => {
  return (
    <div>
      <HookMegasena/><br></br><hr></hr>
      <HookQuina/>
    </div>
  )
}

export default App



```

E o resultado final na tela do navegador:
![image](https://github.com/user-attachments/assets/ae30151a-0ebb-4c23-812f-a4d2ae82f0f5)


