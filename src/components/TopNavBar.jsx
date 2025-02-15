import React from 'react';
import { Navbar, Container, Button, ButtonGroup } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className="border-bottom shadow-sm">
      <Container>
        <Navbar.Brand>Floor Plan Editor</Navbar.Brand>

        <ButtonGroup aria-label="Toolbar">
          <Button variant="outline-primary">Save</Button>
          <Button variant="outline-secondary">Undo</Button>
          <Button variant="outline-secondary">Redo</Button>
          <Button variant="outline-success">Zoom In</Button>
          <Button variant="outline-danger">Zoom Out</Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
