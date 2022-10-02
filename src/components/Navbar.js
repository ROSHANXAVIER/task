import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';

function Navbars() {
    return (
      <>
        
          <Navbar  expand={false} className="Nav">
            <Container  fluid>
              <Navbar.Brand href="/">
              <img
              alt=""
              src='https://www.putatoe.com/img/logo.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
                PUTATOE</Navbar.Brand>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${false}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                    SERVICES
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Orders</Nav.Link>
                    <Nav.Link href="#action2">Payment/Refund</Nav.Link>
                    <NavDropdown
                      title="Notifications"
                      id={`offcanvasNavbarDropdown-expand-${false}`}
                    >
                      <NavDropdown.Item href="#action3">#notifcation0</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        #notifcation1
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Clear all
                      </NavDropdown.Item>
                    </NavDropdown>
                    <p></p>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search services provided by us.."
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button  variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
      </>
    );
  }
  
  export default Navbars;