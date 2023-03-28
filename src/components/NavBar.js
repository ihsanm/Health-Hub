import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo-no-background.png"
import BmiCalculator from './BmiCalculator';
import Bodyparts from './bodyparts';
import Nutrition from './Nutrition/Nutrition';




function Navibar() {
  return (



    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img src={logo} alt="logo" className="logo-img"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/BmiCalculator">BMI</Nav.Link>
            <Nav.Link href="/bodyparts">bodyparts</Nav.Link>
            <Nav.Link href="/Nutrition">Nutrition</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Navibar;