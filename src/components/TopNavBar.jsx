import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Bell, PersonCircle, QuestionCircle, ChatDots } from 'react-bootstrap-icons';

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: '0.5rem 1rem' }}>
      <Container fluid>
        <Navbar.Brand>Floorplan Editor</Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <Button variant="outline-light" size="sm" className="me-2">
            <QuestionCircle size={18} className="me-1" />
            Help
          </Button>

          <Button variant="outline-light" size="sm" className="me-2">
            <ChatDots size={18} className="me-1" />
            Feedback
          </Button>

          <Button variant="outline-light" size="sm" className="me-2">
            <Bell size={18} />
          </Button>

          <NavDropdown title={<PersonCircle size={24} />} id="navbarScrollingDropdown" align="end">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
