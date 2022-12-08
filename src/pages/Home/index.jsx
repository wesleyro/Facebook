import React from 'react'
import logo from '../../assets/logo.svg'

import { Info, Container,Column,Column1 } from './styles'
const Home=()=>{
    return(
        <>

        <Container>
            

        <Column>
 
        <Info>
                <img src={logo} alt='logo'/>
                <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
            </Info>
        </Column>
        <Column1>
 
        <Info>
                <img src={logo} alt='logo'/>
                <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
            </Info>
        </Column1>

       
        </Container>
            
        </>
  )
}
export {Home}