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
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);
    let markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    // console.log("loading kakaomap");
  }, []);

  return (
    <S.MapContainer>
      <div
        id="map"
        style={{width: "100vh", height: "100vh", margin: "0 auto"}}
      ></div>
    </S.MapContainer>
  );
};

export default Map;
