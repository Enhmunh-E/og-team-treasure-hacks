import React from "react";
import "./App.css";
import SimpleMap from "./map/Map";

const App = () => {
  return (
    <div className="center" id="baseContainer">
      <div id="homeMiddle" className="center col">
        <p>
          Please <b id="allowlocationtext">Allow Location</b> In Order To Use
          Our Web 🥺
        </p>
        <p>
          Did You Just Allowed Location? <br />
          Then You can Click This{" "}
          <button id="reload" onClick={() => window.location.reload()}>
            Button
          </button>{" "}
          🤩
        </p>
      </div>
      <div id="name">
        <b>Made With Love</b>: Emu Jack Akiko Bebe
      </div>
    </div>
  );
};

export default App;

// {
//   "business_status": "OPERATIONAL",
//   "geometry":
//     {
//       "location": { "lat": -33.8587323, "lng": 151.2100055 },
//       "viewport":
//         {
//           "northeast":
//             { "lat": -33.85739817010727, "lng": 151.2112278798927 },
//           "southwest":
//             { "lat": -33.86009782989272, "lng": 151.2085282201073 },
//         },
//     },
//   "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
//   "icon_background_color": "#FF9E67",
//   "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
//   "name": "Cruise Bar",
//   "opening_hours": { "open_now": false },
//   "photos":
//     [
//       {
//         "height": 575,
//         "html_attributions":
//           [
//             '<a href="https://maps.google.com/maps/contrib/112582655193348962755">A Google User</a>',
//           ],
//         "photo_reference": "Aap_uEDnz_WTtjeSoT06mpN-Yr6NuNoGVip9P74POPIyhLv0Kvr-GORZFWiSGCAf1UnQN29IElWm3J3_KyFw1zUd7IHkVTDDjcjtMp9vQkupTQt0b-BsKLvC6MotMONrakPg4g0Nb-lzhVp8znaorp3klzcdoZJjgamJXZZn6strL82BOIxG",
//         "width": 766,
//       },
//     ],
//   "place_id": "ChIJi6C1MxquEmsR9-c-3O48ykI",
//   "plus_code":
//     {
//       "compound_code": "46R6+G2 The Rocks, New South Wales",
//       "global_code": "4RRH46R6+G2",
//     },
//   "price_level": 2,
//   "rating": 4.1,
//   "reference": "ChIJi6C1MxquEmsR9-c-3O48ykI",
//   "scope": "GOOGLE",
//   "types":
//     ["bar", "restaurant", "food", "point_of_interest", "establishment"],
//   "user_ratings_total": 1184,
//   "vicinity": "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks",
// },
