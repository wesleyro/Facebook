import React from 'react'
import logo from '../../assets/logo.svg'
import { Input } from '../../Components/Input'
import { Buttom } from '../../Components/Button'
import { Info,Container,Column,Menu,TitleHighlight } from './styles'
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
                <Input/>
                <Buttom/>
                
                <p><TitleHighlight><a href='/Criar-Pagina'>Criar uma pagina</a></TitleHighlight> para uma celebridade, uma marca ou uma empresa.</p>
            </Menu>
                
        </Container>
            
        </>
  )
}
export {Home}