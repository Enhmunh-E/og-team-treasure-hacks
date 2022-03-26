import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ContextType = {
  position: GeolocationCoordinates | null;
};

export const Context = createContext<ContextType>({
  position: null,
});

export const Provider = ({ children }: any) => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos: GeolocationPosition) => {
          setPosition(pos.coords);
          navigate("/home");
          console.log(pos.coords);
        },
        (error) => {
          console.log(error);
          navigate("/");
        }
      );
      // axios
      //   .get(
      //     `https://maps.googleapis.com/maps/api/place/nearbysearch/json
      // ?keyword=cruise
      // &location=47.9096302,106.9060646
      // &radius=1500
      // &type=park
      // &key=AIzaSyACHkOHi-pNVRYF8dRvuvnR-Cl28TgBYL0`
      //   )
      //   .then((res) => {
      //     console.log(res, "lat long");
      // });
    }
  }, []);
  return <Context.Provider value={{ position }}>{children}</Context.Provider>;
};
