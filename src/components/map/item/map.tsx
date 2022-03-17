import React, {useEffect} from "react";
import * as S from "./style";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };
    let map = new window.kakao.maps.Map(container, options);
    // console.log("loading kakaomap");
  }, []);

  return (
    <S.MapContainer>
      <div id="map" style={{width: "400px", height: "500px"}}></div>
    </S.MapContainer>
  );
};

export default Map;
