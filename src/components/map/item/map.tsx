import React, {useEffect} from "react";
declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.Latlng(35.85133, 127.734086),
      level: 13,
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{width: "400px", height: "500px"}}></div>;
};

export default Map;
