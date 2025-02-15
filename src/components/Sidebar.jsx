import React from 'react';
import { ListGroup, Button, Stack } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', height: '100vh', background: '#f8f9fa', padding: '10px', borderRight: '1px solid #dee2e6' }}>
      <h5>Tools</h5>
      <ListGroup variant="flush">
        <ListGroup.Item action>Add POI</ListGroup.Item>
        <ListGroup.Item action>Draw Path</ListGroup.Item>
        <ListGroup.Item action>Edit Properties</ListGroup.Item>
        <ListGroup.Item action>Toggle Layers</ListGroup.Item>
      </ListGroup>

      <Stack direction="horizontal" gap={2} className="mt-3">
        <Button variant="outline-primary">Save Changes</Button>
        <Button variant="outline-danger">Discard</Button>
      </Stack>
    </div>
  );
};

export default Sidebar;
