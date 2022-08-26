import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo  from '../Images/logo2.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', onScroll);
  
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
    <Container>
      <Navbar.Brand href="#home"><Link to="/"><img src={Logo} alt="" className="logo"/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
          <Link className='nav-link' to="/">HOME</Link>
          
           <Link className='nav-link' to="about">ABOUT</Link> 

            <Link className='nav-link' to="product"> PRODUCTS</Link>
          
           <Link className='nav-link' to="contact"> CONTACT US</Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header