/* global kakao */
import React, {useEffect} from "react";

const {kakao} = window;

window.kakao = window.kakao || "SomeValue";

const MapPage = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.Latlng(35.85133, 127.734086),
      level: 13,
    };
    const map = new kakao.map.Map(container, options);
  }, []);

  return (
    <div id="map" style={{width: "400px", height: "500px"}}>
      <div></div>
    </div>
  );
};

export default MapPage;
