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
type MapProps = {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  rating: number;
};
type textType = {
  text?: string;
  lat?: number;
  lng?: number;
  key?: number;
  zoom?: number;
};
const AnyReactComponent = ({ text, key }: textType) => (
  <div
    key={key}
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
const AnyReactComponentRadius = ({ zoom }: textType) => (
  <div
    style={{
      background: "red",
      border: "1px solid red",
      opacity: "0.5",
      width: `${5000 / (zoom ? zoom : 1)}px`,
      height: `${5000 / (zoom ? zoom : 1)}px`,
      display: "inline-flex",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  />
);

const SimpleMap = ({ center = { lat: 59.95, lng: 30.33 }, zoom = 11 }) => {
  const { position } = useContext(Context);
  // const data = useMemo(async () => {
  //   const axiosData = await axios.get(
  //     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
  //       position?.latitude + "," + position?.longitude
  //     }&radius=1500&type=amusement_park|park&key=0-0`
  //   );
  //   const result: MapProps[] = await axiosData.data.results;
  //   return await result;
  // }, [position]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyAPI = async () => {
      await axios
        .get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
            position?.latitude + "," + position?.longitude
          }&radius=1500&type=amusement_park|park&key=0-0`
        )
        .then((res) => {
          setData(res.data.results);
        });
    };
    fetchMyAPI();
  }, [position]);
  if (position?.latitude && position?.longitude) {
    return (
      <div
        style={{
          width: "48vw",
          height: "100vh",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "0-0" }}
          defaultCenter={{
            lat: position?.latitude ? position.latitude : 59.95,
            lng: position?.longitude ? position.longitude : 30.33,
          }}
          defaultZoom={zoom}
        >
          {data?.map((item: MapProps, index: number) => (
            <AnyReactComponent
              key={index}
              lat={item.geometry.location.lat}
              lng={item.geometry.location.lng}
              text={item.name}
            />
          ))}
          <AnyReactComponentRadius
            lat={position?.latitude}
            lng={position?.longitude}
            zoom={zoom}
          />
        </GoogleMapReact>
      </div>
    );
  }
  return <div></div>;
};

export default SimpleMap;

// [
//   {
//       "business_status": "OPERATIONAL",
//       "geometry": {
//           "location": {
//               "lat": 47.90911859999999,
//               "lng": 106.9231262
//           },
//           "viewport": {
//               "northeast": {
//                   "lat": 47.9101380302915,
//                   "lng": 106.9246301302915
//               },
//               "southwest": {
//                   "lat": 47.9074400697085,
//                   "lng": 106.9219321697085
//               }
//           }
//       },
//       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
//       "icon_background_color": "#7B9EB0",
//       "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
//       "name": "National Amusement Park",
//       "opening_hours": {
//           "open_now": false
//       },
//       "photos": [
//           {
//               "height": 3024,
//               "html_attributions": [
//                   "<a href=\"https://maps.google.com/maps/contrib/104607190889080013594\">Khongorzul E</a>"
//               ],
//               "photo_reference": "Aap_uECo-yoSFxr5x-WKJN3LUa54YUf6GzOi0iOnwB8ZGPkHVMI9FOoGy3mJhVFmgl80vDEHn-lsQk16Yx9yOt32vKQvZPWr6bnEhY3dS8lWyQYmXkbbzTXyQbCgiJhXyxu5Cuf2LjNgevxOfm3XqmyJeNO41n-YqU5YtOLA20ENnpOyN2d5",
//               "width": 4032
//           }
//       ],
//       "place_id": "ChIJiyfbw0mSll0RhnvbuBSbbqY",
//       "plus_code": {
//           "compound_code": "WW5F+J7 Ulaanbaatar, Mongolia",
//           "global_code": "8PV8WW5F+J7"
//       },
//       "rating": 4.2,
//       "reference": "ChIJiyfbw0mSll0RhnvbuBSbbqY",
//       "scope": "GOOGLE",
//       "types": [
//           "amusement_park",
//           "tourist_attraction",
//           "park",
//           "point_of_interest",
//           "establishment"
//       ],
//       "user_ratings_total": 1505,
//       "vicinity": "Olympic Street, Ulaanbaatar"
//   },
//   {
//       "business_status": "OPERATIONAL",
//       "geometry": {
//           "location": {
//               "lat": 47.9176206,
//               "lng": 106.9178667
//           },
//           "viewport": {
//               "northeast": {
//                   "lat": 47.91906258029149,
//                   "lng": 106.9191960302915
//               },
//               "southwest": {
//                   "lat": 47.9163646197085,
//                   "lng": 106.9164980697085
//               }
//           }
//       },
//       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
//       "icon_background_color": "#7B9EB0",
//       "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
//       "name": "Water fountain",
//       "photos": [
//           {
//               "height": 3024,
//               "html_attributions": [
//                   "<a href=\"https://maps.google.com/maps/contrib/117406557473117048873\">Rentsendorj Odgerel</a>"
//               ],
//               "photo_reference": "Aap_uEBbTNdtDvEu3XEmyr-sYq8kYQh5OO3v07clIbwO83v62V5RbitWZ3uhldIlj_0MhMUtAz-mIVWn3wcS95H61Y1W6bnzm-gSa6I8w2_J196BOuTBTXnhmp2oN_INmHo8bqx2UcLeGoJgxXd1cTosmLxRiaLSrvFS79pm_i7e6EEIa2Zb",
//               "width": 4032
//           }
//       ],
//       "place_id": "ChIJ1xA-2tqTll0RTmHGNef8B88",
//       "rating": 4.7,
//       "reference": "ChIJ1xA-2tqTll0RTmHGNef8B88",
//       "scope": "GOOGLE",
//       "types": [
//           "amusement_park",
//           "point_of_interest",
//           "establishment"
//       ],
//       "user_ratings_total": 3,
//       "vicinity": "WW99+24X, Ulaanbaatar"
//   }
// ]
