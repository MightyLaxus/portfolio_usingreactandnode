import { useState, useEffect } from "react";       //hook to retain on which link we actively are and useEffect to detect when user user scrolled
import { Navbar, Nav, Container } from "react-bootstrap"; //imported components from react-bootstrap to use bootstrap
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');   //hook to retain active link
  const [scrolled, setScrolled] = useState(false);

  //function to detect when user has scrolled so that background can be changed
  useEffect(() => { 
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  //highlight the activated link+
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
         {/* navbar code of bootstrap */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* home project and skills are linked also the active link on which we are will be highlighted and also update the active link */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* top right container of social icons with links embedded in it*/}
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mrigank-kumar-mehta" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/MightyLaxus" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.hackerrank.com/ishumehta7461" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              {/* Connect button upon which we click then it redirects us to contact me form */}
              <HashLink to='#connect'>
                <button className="vvd"><span>Connect with Me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
