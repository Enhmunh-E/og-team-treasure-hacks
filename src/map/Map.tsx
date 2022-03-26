import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import GoogleMapReact from "google-map-react";
import { Context } from "../provider";
import axios from "axios";
import { resourceLimits } from "worker_threads";

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
  const data = useMemo(async () => {
    let axiosData = await axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
          position?.latitude + "," + position?.longitude
        }&radius=1500&type=amusement_park|park&key=apiKeyPapa`,
        {
          headers: {},
        }
      )
      .then((res) => {
        console.log(res.data.results);
        return res.data.results;
      });
    return axiosData;
  }, [position]);
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
          bootstrapURLKeys={{ key: "apiKeyPapa" }}
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
