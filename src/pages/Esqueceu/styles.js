import styled from "styled-components";

export const EsqueceuContainer= styled.div`
    item-align:center;
    width:650px;
    height:350px;
    margin:0 auto;
    margin-top:80px;
    display:flex;
`
export const ContainerConta = styled.div`
    display:blcok;
    background-color:#FFFFFF;
    width:500px;
    height:275px;
    margin:0 auto;
    border-radius:5px;
    z-index:1;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2);    
`
export const Titulo = styled.h3`
    font-size:17px;
    margin-left:15px;
    margin-top:20px;

`
export const Texto = styled.p`
    margin-top:20px;
    margin-left:15px;
    width:450px;
`
export const Email= styled.input`
    margin-top:20px;
    padding:17px;
    border:1px solid #dddfe2 ;
    border-radius:6px;
    width:83%;
    margin-left:15px;
    outline :0;
`
export const Linha = styled.p`
    border-bottom:1px solid #dddfe2;
    padding-top:18px;

`
export const ContainerButton= styled.div`
    display:flex;
`
export const ButtonPesquisa= styled.button`
    display:flex;
    margin-left:7px;
    margin-top:20px;
    padding:8px;
    padding-left:20px;
    padding-right:20px;
    border-radius:6px;
    border:1px solid #1877f2;
    background-color:#1877f2;
    font-size:15px;
    color:#FFFFFF;
    font-weight:600;
`
export const ButtonCancelar= styled.button`
    display:flex;
    margin-left:53%;
    margin-top:20px;
    padding:8px;
    padding-left:20px;
    padding-right:20px;
    border-radius:6px;
    border:1px solid #dddfe2;
    background-color:#dddfe2;
    font-size:15px;
    color:#4b4f56;
    font-weight:600;
`

export const FundoWhite = styled.div`
    background-color:#FFFFFF;
    width:100%;
    height:100%;
    padding:70px;
`