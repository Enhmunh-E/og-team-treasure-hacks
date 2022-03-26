import React from "react";
import Card from "../components/card";
import SimpleMap from "../map/Map";
import "../styles/home.css";
export const Home = () => {
  return (
    <div className="center row between" id="homeContainer">
      <div>
        <Card
          name="Yellowstone National Park"
          number="+1 307-344-7381"
          imageUrl="https://previews.123rf.com/images/wajan/wajan1003/wajan100300113/6641728-bellissimo-parco.jpg"
          rate={5.0}
          schedule="string"
          distance={8991}
        />
      </div>
      <div>
        <SimpleMap />
      </div>
    </div>
  );
  return <div style={{ margin: "20px" }}></div>;
};
export default Home;
