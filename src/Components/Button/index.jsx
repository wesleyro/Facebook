import React from 'react'
import {ButtomContainer,ButtonEntrar,ButtonCriar,LinkEsquece,Linha} from './styles'
const Buttom=()=> {
  return (<>
    <ButtomContainer>
        <ButtonEntrar>Entrar</ButtonEntrar>
        <LinkEsquece><a href='#' >Esqueceu a senha?</a> </LinkEsquece>
        <Linha/>
        <ButtonCriar>Criar nova conta</ButtonCriar>
    </ButtomContainer>
  </>)
}

export {Buttom}