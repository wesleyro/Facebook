import React from 'react'
import {InputContainer,InputText} from './styles'

const Input=()=> 
{
  return (
    <>
        <InputContainer>

          <InputText type="text" placeholder="Email ou telefone"/>
  
          <InputText type="password" placeholder="Senha"/>
     
        </InputContainer>
    </>)
}

export {Input}