"use client";
import { Bicycle2, Kickboard, Scooter } from "@/app/assets";
import { useEffect, useState, useCallback } from "react";
import { reservation } from "@/apis/reservation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface PropsType {
  hour?: number;
  min?: number;
  mobility: "kickboard" | "bicycle" | "scooter";
  className?: string;
  mode: "call" | "reservation";
}

export const DepartureTime = ({
  hour,
  min,
  mobility,
  className,
  mode,
}: PropsType) => {
  const router = useRouter();
  // const [timeRemaining, setTimeRemaining] = useState("");

  // useEffect(() => {
  //   setTimeRemaining(calculateTimeRemaining());
  //   const interval = setInterval(() => {
  //     setTimeRemaining(calculateTimeRemaining());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [hour, min]);

  // const calculateTimeRemaining = () => {
  //   const now = new Date();
  //   let target = new Date();

  //   const daysToAdd = Math.floor(hour / 24);
  //   const normalizedHour = hour % 24;

  //   target.setHours(normalizedHour, min, 0);

  //   if (daysToAdd > 0) {
  //     target.setDate(target.getDate() + daysToAdd);
  //   }

  //   if (target < now) {
  //     target.setDate(target.getDate() + 1);
  //   }

  //   const diffMs = target - now;
  //   const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  //   const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  //   const diffSec = Math.floor((diffMs % (1000 * 60)) / 1000);

  //   return `약 ${
  //     diffHours > 0 ? `${diffHours.toString().padStart(2, "0")}시간` : ""
  //   } ${diffMinutes.toString().padStart(2, "0")}:${diffSec
  //     .toString()
  //     .padStart(2, "0")}초 후`;
  // };
  let count = 0;
  const handleSubmit = () => {
    if (count > 0) {
      toast.success("콜 서비스를 요청했습니다!");
    router.push("/");
    }
    count += 1
  };

  return (
    <div className={`${className} bg-white w-full px-7 py-3 rounded-t-2xl`}>
      <div className="flex gap-2 items-end">
        {mobility === "bicycle" ? (
          <Bicycle2 />
        ) : mobility === "kickboard" ? (
          <Kickboard />
        ) : (
          <Scooter />
        )}
        <span className="font-semibold text-[20px] leading-6">
          최미래님
          <br />
          출발 예정 시간
        </span>
      </div>
      <span className="text-[10px] text-orange-500">
        {mode === "call"
          ? "콜 서비스는 10 ~ 30분 이내로만 설정 할 수 있어요"
          : "출발 시각 30분 전 자동으로 콜서비스가 호출됩니다."}
      </span>
      <div className="flex justify-end font-bold text-[22px]">
        {mode === "reservation" ? (
          `${hour}시 ${min}분`
        ) : (
          <>
            <input className="w-[30px]" placeholder="10"></input> 분 이후
          </>
        )}
      </div>
      <button
        onClick={() => handleSubmit()}
        className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg"
      >
        완료
      </button>
    </div>
  );
};
