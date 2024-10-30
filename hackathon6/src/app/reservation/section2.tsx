"use client";
import { useEffect } from "react";

const Section2 = () => {
  const initMap = (x: number, y: number) => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });

    new naver.maps.Circle({
      map: map,
      center: new naver.maps.LatLng(x, y),
      radius: 500,
      strokeColor: "#FF6700",
      strokeOpacity: 0.5,
      strokeWeight: 1.5,
      fillColor: "#FF6700",
      fillOpacity: 0.18,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          initMap(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("위치 정보를 가져올 수 없습니다.");
        },
      );
    } else {
      alert("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  }, []);

  return (
    <>
      <div id="map" className="h-[879px]"></div>
    </>
  );
};

export default Section2;
