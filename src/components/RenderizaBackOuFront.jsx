import React from 'react'

const RenderizaBackOuFront = () => {

    function renderizaEscolha(stack){
        if( stack === 'Java'){
            return <h1>Backend</h1>
        }else if(stack === 'React'){
            return <p>
                <b>Frontend</b>
                </p>
        }else if(stack === 'AWS'){
            return <p>
                <i>Cloud</i>
                </p>}
       }
  return (
    <div>
        {renderizaEscolha('Java')}
        {renderizaEscolha('React')}
        {renderizaEscolha('AWS')}
    </div>
  )
}

export default RenderizaBackOuFront