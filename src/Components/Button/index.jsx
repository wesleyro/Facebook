import React from 'react'
import {ButtomContainer,ButtonEntrar,ButtonCriar,LinkEsquece,Linha} from './styles'
import { useNavigate  } from "react-router-dom";
const Buttom=()=> {
  const navigate =useNavigate();

  const ClickEntrar=()=>{
    navigate("#");
  }
  //onClick={handleClickSignInCa}
  return (<>
    <ButtomContainer>
        <ButtonEntrar title='Entrar'>Entrar</ButtonEntrar>
        <LinkEsquece><a href='/Esqueceu' >Esqueceu a senha?</a> </LinkEsquece>
        <Linha/>
        <ButtonCriar title='Cadastro'>Criar nova conta</ButtonCriar>
    </ButtomContainer>
  </>)
}

export {Buttom}