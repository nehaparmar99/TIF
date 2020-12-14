import React from 'react'
import styled from "styled-components";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {


  return (
    <>
      <NavBar >
              <FlexContainer>
                  <FlexContainer1>
                  <Brand />
               <NavLinks1>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
          </NavLinks1>   </FlexContainer1>   
          <NavLinks2>
            <a href="/">Log In</a >
            <a href="/">Sign Up</a >
          </NavLinks2>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;
const FlexContainer1 = styled.div`
margin-left:40px;
  display: flex;
  height: 5rem;
`;
const NavLinks1 = styled.ul`
  left:20px;
  list-style-type: none;
  margin: auto 20px;

  & a {
    color: : 	#423D49;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
     color: #232127;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

     @media (max-width: 768px) {
      display: none;
    }
`;
const NavLinks2 = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color:#423D49;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #2acfcf;
      color:white;
      opacity:70%;
      border-radius:25px;
      padding:10px;
    padding-left:20px;
    padding-right:20px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;