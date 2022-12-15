import React from 'react'
import {HeaderContainer,HeaderInput,HeaderImagem,HeaderInputContainer,HeaderContainerButton,HeaderButton,LinkEsquece} from './styles'
import logo from '../../assets/logo.svg'
const Header=()=> {
  return (<>
            <HeaderContainer>
              <HeaderImagem><img src={logo} alt="logo" /></HeaderImagem>
              <HeaderInputContainer>
                <HeaderInput placeholder='Email ou telefone'/>
                <HeaderInput placeholder='Senha'/>
              </HeaderInputContainer>
              <HeaderContainerButton>
                  <HeaderButton title='Entrar'>Entrar</HeaderButton> 
                  <LinkEsquece><a href='/Esqueceu' >Esqueceu a conta?</a> </LinkEsquece>
              </HeaderContainerButton>
            </HeaderContainer>
        </>)
}
export {Header}
