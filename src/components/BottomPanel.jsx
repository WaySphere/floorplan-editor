import React from 'react';
import { Button } from 'react-bootstrap';

const BottomPanel = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <Button variant="primary" className="me-2" onClick={() => {console.log("Saving changes")}}>Save</Button>
      <Button variant="outline-danger" onClick={() => {console.log("Closing without saving")}}>Close</Button>
    </div>
  );
};

export default BottomPanel;