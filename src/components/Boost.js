import React from 'react'
import styled from "styled-components";
import img from "../assets/bg-boost-desktop.svg";
const Container = styled.div`
        background-color:purple;
        padding:30px;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        background:url(${img});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: #3b3054;
        background-size:stretch;
         & h1{
             color:white;
             margin:1em;
         margin-bottom:0.7px;
         }
    `;

const Button = styled.button`
  color: white;
  border: 2px solid #2acfcf;
  background:#2acfcf;
  font-size: 1.6em;
  font-weight:bold;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  cursor:pointer;
`;
function Boost() {
    return (

        <Container>
            <h1>Boost your links today</h1>
            <Button>Get Started</Button>
        </Container>
    )
}

export default Boost
