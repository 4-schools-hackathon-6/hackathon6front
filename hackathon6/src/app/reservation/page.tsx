"use client";
import { useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Reservation() {
  const [page, setPage] = useState(0);
  const [time, setTime] = useState<number[]>([]);
  const [mobility, setMobility] = useState<
    "bicycle" | "scooter" | "kickboard"
  >();

  const handlePage = (page: number) => {
    setPage(page);
  };

  const handleTime = (hour: number, min: number) => {
    setTime([hour, min]);
  };

  const handleMobility = (mobility: "bicycle" | "scooter" | "kickboard") => {
    setMobility(mobility);
  };

  const sections = [
    <Section1
      key={"0"}
      setPage={handlePage}
      setTime={handleTime}
      setMobilitys={handleMobility}
    />,
    <Section2 key={"1"} time={[0, 15]} mobility={mobility} />,
  ];
  return <div className="w-full h-full">{sections[page]}</div>;
}
