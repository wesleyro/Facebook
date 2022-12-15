import styled from "styled-components";

export const HeaderContainer= styled.div`
    height:60px;
    background-color:#FFFFFF;
    display:flex;
    width:100%;
    flex:100%;
`

export const HeaderImagem=styled.div`
    display:flex;
    flex:52%;
    img{
        width:140px;
        margin-left:3px;
    }

`
export const HeaderInputContainer= styled.div`
    display:flex;
    flex:28%;
    padding-top:8px;
    padding-bottom:8px;

`
export const HeaderInput=styled.input`
            display:flex;
            border-radius:6px;
            border:1px solid #dddfe2;
            padding-top:20px;
            padding-bottom:17px;
            padding-right:15px;
            padding-left:5px;
            margin-left:20px;
            background-color:transparent;
            color:black;
            outline: 0;
            font-size:15px;
            :hover{
                border:1px solid #1E90FF;
                outline:none;
            }


`

export const HeaderContainerButton=styled.div`


    display flex;
    flex:20%;
    padding-top:10px;
    padding-bottom:10px;
    text-align:center;


`
export const HeaderButton =styled.button`

            border:1px solid #1877F2;
            color:#FFFFFF;
            font-weight:600;
            font-size:15px;
            background:#1877F2;
            border-radius:6px;
            padding-left:13px;
            margin-left:6px;
            padding-right:13px;

            :hover{
                background-color:#3578E5;
                border-color: #3578E5;
            }            
`

export const LinkEsquece=styled.div`
    a{
        flex:100%;
        color:#3578E5;
        font-size:15px;
    
        text-decoration:none;
        
        :hover{
            text-decoration:underline;
        }
        display:flex;
        padding:10px;

    }
`