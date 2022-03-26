import React from "react";
import GoogleMapReact from "google-map-react";

type textType = {
  text: string;
  lat: number;
  lng: number;
};
const AnyReactComponent = ({ text }: textType) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

const SimpleMap = ({ center = { lat: 59.95, lng: 30.33 }, zoom = 11 }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyACHkOHi-pNVRYF8dRvuvnR-Cl28TgBYL0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={47.9096618}
          lng={106.9063906}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
