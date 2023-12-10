import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/styles.css'

export default function HeaderBar() {
  return (
      <Navbar className='header-bar' bg='dark' fixed='top'>
          <div className='bar-wrapper'>
            <Navbar.Brand href="/home">
              <img
                alt="Motorsports Retport"
                src={'/images/logo.png'}
                height={70}
              />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/DLM">Dirt Late Models</Nav.Link>
              <Nav.Link href="/DSC">Sprint Cars</Nav.Link>
              <Nav.Link href="/NASCAR">NASCAR</Nav.Link>
              <Nav.Link href="/other">Other</Nav.Link>
            </Nav>
          </div>
      </Navbar>
  );
}