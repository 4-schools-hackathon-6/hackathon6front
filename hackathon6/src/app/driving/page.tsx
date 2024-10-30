"use client";
import Modal from "@/components/modal";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const Driving = () => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const circleRef = useRef<naver.maps.Circle | null>(null);

  const [radius, setRadius] = useState(0);
  const [isModalOpen, setIsModalOepn] = useState(false);

  const initMap = (x: number, y: number) => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(x, y),
      zoom: 17,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });

    const circle = new naver.maps.Circle({
      map: map,
      center: new naver.maps.LatLng(x + 0.0015, y - 0.0015),
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
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOepn(true);
    }, 10000);

    const timer2 = setTimeout(() => {});

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          initMap(latitude - 0.0015, longitude + 0.0015);
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

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(radius);
    }
  }, [radius]);

  return (
    <div className="w-full h-full relative">
      <div id="map" className="h-[879px]"></div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOepn} setRadius={setRadius} />
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-[24px] p-6 border-t border-gray-200 z-[999]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-green-600 text-2xl mr-2">🌱</span>
            <span className="font-bold text-lg">에코 모드</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400">
              <i className="fas fa-bell"></i>{" "}
            </button>
            <button className="text-gray-400">
              <i className="fas fa-lock"></i>
            </button>
          </div>
        </div>

        <div className="mt-6 mx-5 flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-semibold">00:24</div>
            <div className="text-gray-500 text-sm">예상요금 807원</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold">80%</div>
            <div className="text-gray-500 text-sm">남은 배터리</div>
          </div>
        </div>
        <div className="mt-4 mx-4 flex justify-between text-center">
          <div className="text-xl font-semibold">예상 할인 금액</div>
          <div className="text-orange-500 text-xl font-bold">1200원</div>
        </div>
        <Link href="/result">
          <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold">
            반납하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Driving;
