import React from 'react'
import logo from '../../assets/logo.svg'

import { Info, Container,Column,Menu } from './styles'
const Home=()=>{
    return(
        <>

        <Container>

            <Column>

                <Info>
                    {/*esta logo e o texto do facebook*/}
                    <img src={logo} alt='logo'/>
                    <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que </h2><h2>fazem parte da sua vida.</h2>
                </Info>

            </Column>

            <Menu>
                {/*aqui esta a caixa de login */}

            </Menu>
                
        </Container>
            
        </>
  )
}
export {Home}