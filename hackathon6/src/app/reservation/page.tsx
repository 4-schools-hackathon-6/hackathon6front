"use client";
import { useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Reservation() {
  const [page, setPage] = useState(0);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const sections = [<Section1 key={"0"} setPage={handlePage} />, <Section2 key={"1"} />];
  return <div className="w-full h-full">{sections[page]}</div>;
}
