import React from 'react'
import styled from "styled-components";
import logo from "../assets/illustration-working.svg";
const FlexContainer = styled.div`
   margin-top:50px;
  display: flex;
    flex-wrap:wrap;
    padding:40px;
  background-color:white;
  justify-content:space-around;
  // height: 400px;
//   margin: auto;
//   padding: 0 2rem;
`;
const Main = styled.div`
padding-top:20px;
padding-bottom:20px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
 font-size:24px;
flex-wrap:wrap;
& div{
  @media (max-width: 768px) {
    order:2;
    }
}
& p{
color:gray;
}
& button{
      margin: 10px;
padding:10px;
width:40%;
  border-radius: 25px;
  background-color:#2acfcf;
  color:white;
  font-size:20px;
  font-weight:bold;
  border:2px solid #2acfcf;
  cursor:pointer;
    @media (max-width: 768px) {
      width:100%;

    }
}
@media (max-width: 768px) {
      text-align:center;
      align-items:center;
    }
`;
const Image = styled.img`
height:80%;
width:50%;
padding:20px;
//   margin: auto 0;
//   margin-right:20px;
@media (max-width: 768px) {
      width:100%;
      height:auto;
      order:1;
    }
`;
function Home() {
    return (
        <FlexContainer>
            
        <Main>
          <div>
          <h1>More than just</h1>
            <h1>shorter links</h1>
                <p>Build your brand's recognition and get detailed <br />
                insights on how your links are performing</p>
           <button>Get started</button>
           </div>  </Main> 

             <Image src={logo} alt="Company Logo" />
        </FlexContainer>
    )
}

export default Home
