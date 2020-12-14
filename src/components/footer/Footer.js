import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import log1 from "../../assets/icon-facebook.svg";
import log2 from "../../assets/icon-twitter.svg";
import log3 from "../../assets/icon-pinterest.svg";
import log4 from "../../assets/icon-instagram.svg";
const FlexContainer = styled.div`
  display: flex;
    flex-wrap:wrap;
  background-color:black;
  justify-content:space-around;
  padding-bottom:20px;
  @media (max-width: 768px) {
      display: flex;
      flex-direction:column;
      align-items:center;
    }
`;
const Image = styled.img`
  height: 10%;
  width:10%;
margin-top:35px;
color:red;
@media (max-width: 768px) {
       height: 20%;
  width:30%;
    }
`;
const C1 = styled.div`
color:white;
display:flex;
flex-direction:column;
margin-top:35px;
cursor:pointer;
& h1{
  margin-bottom:15px;
}
& ul{
list-style-type:none;
line-height:25px;
font-size:12px;
color: 	#bfbfbf
}
& li:hover{
color:#2acfcf;
}
@media (max-width: 768px) {
      display: flex;
      flex-direction:column;
      align-items:center;
    }
`;
const C2 = styled.div`
display:flex;
flex-wrap:no-wrap;
margin-top:35px;
justify-content:space-between;
cursor:pointer;
color:red;
// & div{
//   fill:red; !important
//   width:50%;
// }
& img{
 height: 17%;
  width:17%;
  padding:2%;
  fill:red;
}
& img:hover{
  color:#2acfcf;
}
@media (max-width: 768px) {
       height: 20%;
  width:30%;
    }
`;
function Footer() {
  return (
        <FlexContainer>
        <Image src={logo} alt="Company Logo" />
        <C1>
        <h1>Features</h1>
        <ul>
             <li href="/">Link Shortening</li>
            <li href="/">Branded Links</li>
          <li href="/">Analytics</li>
          </ul>
        </C1>
          <C1>
        <h1>Resources</h1>
        <ul>
             <li href="/">Blog</li>
            <li href="/">Developers</li>
          <li href="/">Support</li>
          </ul>
        </C1>
          <C1>
        <h1>Company</h1>
        <ul>
             <li href="/">About</li>
            <li href="/">Our Teamm</li>
          <li href="/">Careers</li>
          <li href="/">Contact</li>
          </ul>
        </C1>
      <C2>
          <img src={log1} alt="Company Logo" />
        <img src={log2} alt="Company Logo" />
        <img src={log3} alt="Company Logo" />
        <img src={log4} alt="Company Logo" />
        
        </C2>
        </FlexContainer>
    )
}

export default Footer
