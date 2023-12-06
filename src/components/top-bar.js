import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.png';

function TopBar() {
  return (
      <Navbar className='justify-content-center' bg="dark" data-bs-theme="dark" fixed='top'>
          <Navbar.Brand href="#home">
            <img
              alt="Motorsports Retport"
              src={Logo}
              height={100}
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#DLM">Dirt Late Models</Nav.Link>
            <Nav.Link href="#DSC">Sprint Cars</Nav.Link>
            <Nav.Link href="#NASCAR">NASCAR</Nav.Link>
            <Nav.Link href="#PLM">Pavement Late Models</Nav.Link>
          </Nav>
      </Navbar>
  );
}

export default TopBar;