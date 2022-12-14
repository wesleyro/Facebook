import React from 'react'
import {ButtomContainer,ButtonEntrar,ButtonCriar,LinkEsquece,Linha} from './styles'
const Buttom=()=> {
  return (<>
    <ButtomContainer>
        <ButtonEntrar>Entrar</ButtonEntrar>
        <LinkEsquece><a href='https://www.pdfescape.com/open/document/b4b465d2-65b6-487f-928b-a5e5b663400c?r=view' >Esqueceu a senha?</a> </LinkEsquece>
        <Linha/>
        <ButtonCriar>Criar nova conta</ButtonCriar>
    </ButtomContainer>
  </>)
}

export {Buttom}