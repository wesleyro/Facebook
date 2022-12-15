import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    display:flex;
    margin-left:11.5%;
    margin-right:10%;
  


`

export const Column= styled.main`
    display:flex;
    margin-top:176px;
    width: 610px;
`


export const Info = styled.div`

    img{
 
        width:300px;

    }
    h2{

        width: 600px;
        font-size:26px;
        padding-left:35px;

        font-weight:500;
    
    }


`

export const Menu=styled.div`
margin-top:130px;

display:block;
width: 395px;
height:350px;
background-color:#FFFFFF;
border-radius: 10px;
z-index:1;
box-shadow: 0 0 5px rgba(0,0,0,0.2);
-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2);


p{
    margin-top:23px;
    text-align:center;
    font-size:14px;
}

`
export const TitleHighlight=styled.a`

    a{
        color:black;
        font-weight:600;
        text-decoration:none;
    }
`