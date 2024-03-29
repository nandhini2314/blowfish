import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Encryption from './Encryption';
import Decryption from './Decryption';
import './Navbar.css';
import About from './About';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";

function NavBar() {
  return (
    <Router>
    <Navbar bg="dark" variant={"dark"} expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand >BlowFish-Implementation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/encryption"}>Encryption</Nav.Link>
            <Nav.Link as={Link} to={"/decryption"}>Decryption</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> */}
                {/* Separated link */}
              {/* </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/encryption" element={<Encryption />}/>
      <Route path="/decryption" element={<Decryption />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default NavBar;