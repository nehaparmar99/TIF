import React ,{ useRef, useState } from 'react'
import styled from 'styled-components';
const Container = styled.div`
background-color:#EBE5F3;
// padding:20px;
height:100%;
margin:0;
`;
const Shortens = styled.div`
width:80%;
margin:auto;
padding-top:15px;
padding-bottom:15px;
`;
const DIV = styled.div`
       background-color:white;
   border-radius:5px;
   padding:10px;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
    vertical-align:center;
    & h2{
      margin-top:5px;
       font-size:20px;
    }
      & p{
        margin-top:5px;
      font-weight:bold;
      font-size:20px;
      color:#2acfcf;
      @media (max-width: 768px) {
      margin-bottom:10px;
      margin-top:10px;
      
    }
  }
     @media (max-width: 768px) {
      flex-direction:column;
      // flex-wrap:wrap;
    }
`;
const Button = styled.button`
  color: white;
  border: 2px solid ;
  font-size:18px;
  font-weight:bold;
//   margin: 1em;
   padding: 0.25em;
padding-left:12px;
padding-right:12px;
  border-radius: 6px;
  cursor:pointer;

`;
function Link(props) {
  const [copySuccess, setCopySuccess] = useState("Copy");
    const [color, setColor] = useState("#2acfcf");
    const copyurl = (e) => {
        console.log("clicked")
        navigator.clipboard.writeText(props.value)
        setColor("black");
        setCopySuccess('Copied!');
}

    return (
        <Container>
            <Shortens>
            <DIV>
                <h2>{props.original}</h2>
                <p>{props.value}</p>
                <Button type="submit" onClick={copyurl} style={{background:color}}>{copySuccess}</Button>
                </DIV>  
        </Shortens>        
        </Container>
    )
}
export default Link
