"use client";
import { useEffect, useRef, useState } from "react";
import { DepartureTime } from "@/components/departureTime";
import { Coin } from "../assets";

interface PropsType {
  time: number[];
  mobility: "bicycle" | "scooter" | "kickboard" | undefined;
}

const Section2 = ({ time, mobility }: PropsType) => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const circleRef = useRef<naver.maps.Circle | null>(null);

  const [radius, setRadius] = useState(50);

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
      radius: radius,
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

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(radius);
    }
  }, [radius]);

  return (
    <div className="w-full h-full relative">
      <div id="map" className="h-[879px]"></div>
      <div className="absolute bottom-0 z-[300] w-full flex flex-col gap-4">
        <div className="flex flex-col gap-5 pl-5">
          <div className="flex flex-col">
            <label className="text-[#ff6700]">출발지 반경</label>
            <input
              type="range"
              max={50}
              min={10}
              className="range-slider w-[236px]"
              value={radius}
              onChange={(e) => setRadius(~~e.target.value)}
            />
          </div>
          <div className="flex items-center bg-[#ff6700] px-2 py-1 w-[236px] rounded-lg">
            <Coin />
            <span className="text-xs text-white font-semibold ">
              원 반경이 넓어질수록, 미도착시 혜택 증가!
            </span>
          </div>
        </div>
        <DepartureTime
          hour={time[0]}
          min={time[1]}
          mobility={mobility as "bicycle" | "scooter" | "kickboard"}
          mode="call"
        />
      </div>
    </div>
  );
};

export default Section2;
