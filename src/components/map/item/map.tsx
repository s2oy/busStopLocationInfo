import React, {useEffect} from "react";
import * as S from "./style";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  //map 불러옴
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        37.466806528974935,
        126.93216211295136
      ),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);

    //marker
    let markerPosition = new window.kakao.maps.LatLng(
      37.466806528974935,
      126.93216211295136
    );
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
      clickable: true, //marker 클릭했을 때 지도 클릭이벤트 방지
    });
    marker.setMap(map);

    let iwContent = "미림마이스터고";
    let iwRemoveable = true;

    let infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    window.kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
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
