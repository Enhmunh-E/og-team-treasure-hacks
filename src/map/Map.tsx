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
  if (position?.latitude && position?.longitude) {
    return (
      <div
        style={{
          width: "48vw",
          height: "100vh",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "api key here" }}
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
      </div>
    );
  }
  return <div></div>;
};

export default SimpleMap;
