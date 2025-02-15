import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Cursor, VectorPen, GeoAlt, Type, Trash, ArrowCounterclockwise, ArrowClockwise } from 'react-bootstrap-icons';

const Sidebar = ({ setMode }) => {
  const tools = [
    { name: 'select', icon: <Cursor />, label: 'Select' },
    { name: 'drawPath', icon: <VectorPen />, label: 'Draw Path' },
    { name: 'addPOI', icon: <GeoAlt />, label: 'Add POI' },
    { name: 'addText', icon: <Type />, label: 'Add Text' },
    { name: 'delete', icon: <Trash />, label: 'Delete' },
    { name: 'undo', icon: <ArrowCounterclockwise />, label: 'Undo' },
    { name: 'redo', icon: <ArrowClockwise />, label: 'Redo' }
  ];

  return (
    <div style={{
      width: '60px', backgroundColor: '#f8f9fa', padding: '10px', display: 'flex',
      flexDirection: 'column', alignItems: 'center', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)'
    }}>
      {tools.map((tool) => (
        <OverlayTrigger key={tool.name} placement="right" overlay={<Tooltip>{tool.label}</Tooltip>}>
          <Button
            variant="light"
            className="mb-2 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={() => setMode(tool.name)}
          >
            {tool.icon}
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Sidebar;
