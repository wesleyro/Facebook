import styled from "styled-components";


export const HeaderPaginaContainer = styled.div`
    padding:20px;
    width:100%;
    background-color:#385898;
    height:50px;
    display:flex;
`

export const HeaderPaginaLogo = styled.div`
        margin-top:10px;
        margin-left:12%;
        cursor:pointer;
        display:flex;
        flex:65%;
    a{
        font-family: Helvetica, Arial, sans-serif;
        font-size:40px;
        color:#FFFFFF;
        text-decoration:none;
        font-weight:600 ;
    }
`
export const HeaderPaginaButton = styled.button`
    
    margin-left:10px;
    padding-right:10px;
    padding-left:10px;
    padding-top:2px;
    padding-bottom:2px;
    border:1px solid #42b72a;
    background-color:#42b72a;
    border-radius:3px;
    color:#FFFFFF;
    font-weight:600;
`
export const HeaderContainerLogin = styled.div`
    padding:10px;
    flex:35%;
    span{
        display:flex;
        cursor:pointer;
        color:#FFFFFF;
        margin-top:8px;
        font-size:12px;
    }
`