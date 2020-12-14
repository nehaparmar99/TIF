import React from 'react';
import styled from 'styled-components';

const CollapseMenu = (props) => {
  

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
      //   style={{
      //   transform: open.interpolate({
      //     range: [0, 0.2, 0.3, 1],
      //     output: [0, -20, 0, -200],
      //   }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      // }}
      >
        <NavLinks>
          <li><a href="/" onClick={props.handleNavbar}>Features</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Pricing</a></li>
          <li><a href="/" onClick={props.handleNavbar}>Resources</a></li>
         <hr></hr>
          <li><button onClick={props.handleNavbar}>Login</button></li>
          <li><button onClick={props.handleNavbar}>Signup</button></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
  background:  #3b3054;
  position: fixed;
  width:90%;
  margin:auto;
  border-radius:20px;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
font-weight:bold;
text-align:center;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
  & hr{
    width:50%;
    color:#bfbfbf;
    margin:auto;
     margin-top:10px;
    margin-bottom:10px;
  }
  & button{
     color: white;
  border: 2px solid #2acfcf;
  background:#2acfcf;
  font-size: 1.6em;
  font-weight:bold;
  margin: 5px;
  padding: 0.25em 1em;
  border-radius: 20px;
  cursor:pointer;
  }
  
`;