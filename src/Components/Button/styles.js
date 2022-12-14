import styled from "styled-components";

export const ButtomContainer=styled.div`
    text-align:center;

`
export const ButtonEntrar=styled.button`
    {
        margin-top:5px;
        width:92%;
        margin-left:5px;
        background-color:#1877f2;
        padding:12px;
        border:1px solid #1877f2;
        border-radius:6px;
        cursor:pointer;
        color:#FFFFFF;
        font-size:20px;
        font-weight:600;
        margin-bottom:18px;

        :hover{
            background-color:#0970f0;
            border-color: #0970f0;
        }
        transition: 200ms cubic-bezier(.08,.52,.52,1) 
        background-color, 200ms cubic-bezier(.08,.52,.52,1) 
        box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform;

        
    }
`


export const LinkEsquece=styled.div`
    a{
        
        color:#1877f2;
        font-size:14px;
        text-decoration:none;
        
        :hover{
            text-decoration:underline;
        }
    }
    margin-bottom:20px;


`
export const Linha=styled.div`

    border-bottom:1px solid #dddfe2;
    margin-left:18px;
    margin-right:18px;

`      
export const ButtonCriar=styled.button`
{
    margin-top:20px;
    width:44%;
    margin-left:5px;
    background-color:#42b72a;
    padding:13px;
    border:1px solid #42b72a;
    border-radius:6px;
    cursor:pointer;
    color:#FFFFFF;
    font-size:17px;
    font-weight:600;
    margin-bottom:18px;

    :hover{
        background-color:#42a22f;
        border-color: #42a22f;
    }
    transition: 200ms cubic-bezier(.08,.52,.52,1) 
    background-color, 200ms cubic-bezier(.08,.52,.52,1) 
    box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform;

    
}

`