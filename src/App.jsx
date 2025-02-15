import BottomPanel from "./components/BottomPanel";
import FloorPlanEditor from "./components/FloorPlanEditor";
import Sidebar from "./components/SideBar";
import TopNavbar from "./components/TopNavBar";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative' }}>
      {/* Top Navbar */}
      <div style={{ flexShrink: 0 }}>
        <TopNavbar />
      </div>

      {/* Middle Section */}
      <div style={{ display: 'flex', flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
        <Sidebar setMode={setMode} />
        <div style={{ flexGrow: 1, position: 'relative' }}>
          <FloorPlanEditor setSelectedItem={setSelectedItem} />
        </div>
      </div>

      {/* Bottom Panel - Fixed */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}>
        <BottomPanel
          mode={mode}
          selectedItem={selectedItem}
          onSave={() => console.log('Saving...')}
          onUndo={() => console.log('Undo...')}
        />
      </div>
    </div>
  );
}
