import React from 'react'
import {HeaderPaginaContainer,HeaderPaginaLogo,HeaderPaginaButton,HeaderContainerLogin} from './styles'
import { AiFillCaretDown } from "react-icons/ai";
const HeaderPagina=()=> {
  return (
  <>
    <HeaderPaginaContainer>
        <HeaderPaginaLogo>
            <a href='/'>
                facebook
            </a>
            <HeaderPaginaButton>
                Cadastre-se
            </HeaderPaginaButton>
        </HeaderPaginaLogo>
        <HeaderContainerLogin>
            <span>Participe ou entre no Facebook <AiFillCaretDown/></span>
        </HeaderContainerLogin>
    </HeaderPaginaContainer>
  </>

  )
}
export {HeaderPagina}
