import React from 'react'
import {Header} from '../../Components/Header'
import {EsqueceuContainer,ContainerConta,Titulo,Texto,Email,Linha,ButtonCancelar,ButtonPesquisa,ContainerButton,FundoWhite} from './styles'
const Esqueceu=()=> {
  return (<>
            <Header></Header>
            <EsqueceuContainer>
              <ContainerConta>
                <Titulo>
                  <h3>Encontre sua conta</h3>
                </Titulo>
                <Linha/>
                <Texto>
                  <p>Insira seu email ou número de celular para procurar a sua conta.</p>
                </Texto>
                <Email placeholder='Email ou número de celular'/>
                <Linha/>
                <ContainerButton>
                  <ButtonCancelar>
                    Cancelar
                  </ButtonCancelar>
                  <ButtonPesquisa>
                    Pesquisa
                  </ButtonPesquisa>
                </ContainerButton>

              </ContainerConta>
        
            </EsqueceuContainer>
            <FundoWhite></FundoWhite>
           


        </>)
}
export {Esqueceu}
