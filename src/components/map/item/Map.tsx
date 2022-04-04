import React, {useEffect} from "react";
import {busData} from "../../../db/busData";
import * as S from "./style";

declare global {
  interface Window {
    kakao: any;
  }
}
const Map = () => {
  //map 불러옴
  useEffect(() => {
    let mapContainer = document.getElementById("map");
    let mapOption = {
      center: new window.kakao.maps.LatLng(
        37.466806528974935,
        126.93216211295136
      ),
      level: 3,
    };

    let map = new window.kakao.maps.Map(mapContainer, mapOption);

    busData.forEach(el => {
      new window.kakao.maps.Marker({
        //맵 가져옴
        map: map,
        //위치 뿌려줌
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        //이름뿌려줌
        title: el.title,
      });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position: any) {
        let lat = position.coords.latitude; //위도
        let lon = position.coords.longitude; //경도

        let locPosition = new window.kakao.maps.LatLng(lat, lon),
          message = '<div style="padding:5px">내 위치</div>';

        displayMarker(locPosition, message);
      });
    } else {
      let locPosition = new window.kakao.mpas.LatLng(
          37.466806528974935,
          126.93216211295136
        ),
        message = "geolocation을 사용할 수 없습니다.";
    }

    function displayMarker(locPosition: any, message: any) {
      let marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
        clickable: true, //marker 클릭했을 때 지도 클릭이벤트 방지
      });

      let iwContent = message;
      let iwRemoveable = true;

      let infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      window.kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });

      map.setCenter(locPosition);
      marker.setMap(map);
    }
  }, []);

  return (
    <S.MapContainer>
      <div
        id="map"
        style={{width: "200vh", height: "100vh", margin: "0 auto"}}
      ></div>
      <p id="data"></p>
    </S.MapContainer>
  );
};

export default Map;
function doSomethig(latitude: number, longitude: number) {
  throw new Error("Function not implemented.");
}
