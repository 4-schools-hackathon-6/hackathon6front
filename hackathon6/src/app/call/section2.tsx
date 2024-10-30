"use client";
import { DepartureTime } from '@/components/departureTime';
import { useEffect, useRef } from "react";

const Section2 = () => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const circleRef = useRef<naver.maps.Circle | null>(null);

  const initMap = (x: number, y: number) => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(x, y),
      zoom: 17.5,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });

    const circle = new naver.maps.Circle({
      map: map,
      center: new naver.maps.LatLng(x, y),
      radius: 50,
      strokeColor: "#FF6700",
      strokeOpacity: 0.5,
      strokeWeight: 1.5,
      fillColor: "#FF6700",
      fillOpacity: 0.18,
    });

    mapRef.current = map;
    markerRef.current = marker;
    circleRef.current = circle;

    naver.maps.Event.addListener(map, "center_changed", () => {
      const newCenter = map.getCenter();
      if (markerRef.current && circleRef.current) {
        markerRef.current.setPosition(newCenter);
        circleRef.current.setCenter(newCenter);
      }
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
        }
      );
    } else {
      alert("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  }, []);

  return (
    <div className="w-full h-full relative">
      <div id="map" className="h-[879px]"></div>;
      <DepartureTime />
    </div>
  );
};

export default Section2;
