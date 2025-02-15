import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const FloorPlanEditor = () => {
  const [floorPlan, setFloorPlan] = useState(null);

  useEffect(() => {
    fetch("/mockFloorPlan.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded GeoJSON Data:", data);
        setFloorPlan(data);
      })
      .catch((err) => console.error("Failed to load GeoJSON", err));
  }, []);

  // Set bounds from GeoJSON data
  const getBounds = (geojson) => {
    const bounds = L.geoJSON(geojson).getBounds();
    return bounds.isValid() ? bounds : [[0, 0], [100, 100]]; // Fallback bounds
  };

  return (
    <div>
      {floorPlan && (
        <MapContainer
          bounds={getBounds(floorPlan)}
          crs={L.CRS.Simple} // Important for flat coordinate system
          style={{ height: "500px", width: "100%", backgroundColor: "#f5f5f5" }}
        >
          <GeoJSON data={floorPlan} />
        </MapContainer>
      )}
    </div>
  );
};

export default FloorPlanEditor;
