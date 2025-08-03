import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/InteractiveMap.css";

// Fix for default marker icon issue in Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const markers = [
  {
    position: [60.472, 8.4689], // Norway
    text: "Welcome to Norway!",
  },
  {
    position: [59.9139, 10.7522], // Oslo
    text: "This is Oslo!",
  },
];

const InteractiveMap = () => {
  return (
    <div className="map-wrapper">
      <h2>Interactive Map</h2>
      <p className="subtitle">
        Get an Interactive, playful and visually appealing map that helps you
        navigate the noise
      </p>
      <MapContainer
        center={[60.472, 8.4689]}
        zoom={4}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker position={marker.position} key={index}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
