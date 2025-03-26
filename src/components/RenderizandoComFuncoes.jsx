import React from 'react'

const RenderizandoComFuncoes = () => {

   function escolhaRenderizada(oQueRenderizar){
    if(oQueRenderizar === 'h1'){
        return <h1>Texto em h1</h1>
    }else{
        return <h2>Texto em h2</h2>
    }
   }

  return (
    <div>
        {escolhaRenderizada('h2')}
        {escolhaRenderizada('h1')}
    </div>
  )
}

export default RenderizandoComFuncoes