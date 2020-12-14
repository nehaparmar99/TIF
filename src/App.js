import React, { Component } from 'react'
import Boost from './components/Boost';
import Feature from './components/Feature';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Navbar from "./components/navbar/Navbar";
import Short from './components/Short';
import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Home></Home>
        <Short></Short>
        <Feature></Feature>
        <Boost></Boost>
        <Footer></Footer>
      </>
    )
  }
}

// function App() {
//   const [opennavbar, handlenavbar] = useState(false);
//   const handleNavbar = () => {
//     this.setState({ navbarOpen: !this.state.navbarOpen });
//   }

//   return (
//     <>
//       <Navbar isopen={opennavbar} functionopen={handlenavbar}></Navbar>
//       <GlobalStyle></GlobalStyle>
//       </>
//   );
// }

export default App;
