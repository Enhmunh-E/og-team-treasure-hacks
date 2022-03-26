import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../provider";

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
  const { position } = useContext(Context);
  console.log(position);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      {position?.latitude && position?.longitude && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACHkOHi-pNVRYF8dRvuvnR-Cl28TgBYL0" }}
          defaultCenter={{
            lat: position?.latitude ? position.latitude : 59.95,
            lng: position?.longitude ? position.longitude : 30.33,
          }}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={position?.latitude ? position.latitude : 59.95}
            lng={position?.longitude ? position.longitude : 30.33}
            text="My Marker"
          />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default SimpleMap;
