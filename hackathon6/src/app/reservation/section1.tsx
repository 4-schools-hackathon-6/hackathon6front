import { useState } from "react";
import useCalendar from "@/hooks/useCalendar";
import { Backward, Bicycle2, Kickboard, Scooter } from "../assets";
import useTimeInput from "@/hooks/useInput";

interface PropsType {
  setPage: (number: number) => void;
}

const Section1 = ({ setPage }: PropsType) => {
  const [selectDate, setSelectDate] = useState<null | number>(null);
  const [mobility, setMobility] = useState<
    "bicycle" | "kickboard" | "scooter"
  >();
  const [repeat, setRepeat] = useState<boolean>(false);

  const { weakList, nowMonth } = useCalendar();
  const { hour, min, changeHour, changeMin } = useTimeInput(
    new Date().getHours(),
    new Date().getMinutes()
  );

  const handleTouch = (day: number) => {
    setSelectDate(day);
  };
  return (
    <div className="flex flex-col bg-[#282a2d] h-full">
      <div className="pt-10 px-7 flex flex-col gap-4">
        <div className="px-3 font-bold text-white text-2xl flex flex-col gap-4">
          <Backward />
          예약하기
        </div>
        <div className="flex justify-between items-center">
          {weakList.map((day, i) => {
            let dayStyle = "text-white";
            let selectStyle = "";
            let timeStyle = "opacity-0";
            if (i === 0) {
              dayStyle = "text-[#ff6700]";
            } else if (i === 6) {
              dayStyle = "text-[#0080ff]";
            }
            if (selectDate === day) {
              selectStyle = "rounded-full bg-[#848484]";
              timeStyle = "opacity-full";
            }
            return (
              <div>
                <div
                  className={`${dayStyle} ${selectStyle} w-10 h-10 font-semibold text-lg flex justify-center items-center`}
                  onTouchEnd={() => handleTouch(day)}
                  key={`${day}`}
                >
                  {day}
                </div>
                <span className={`${timeStyle} text-white`}>
                  {hour.toString().padStart(2, "0")}:
                  {min.toString().padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded-t-[20px] pt-10 px-9 flex-grow mt-4 flex flex-col">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-xl">출발 시간</span>
          <div className="flex font-bold text-[40px] gap-1">
            <input
              value={hour}
              type="text"
              className="outline-none w-12"
              onChange={changeHour}
            />
            {": "}
            <input
              type="text"
              value={min}
              onChange={changeMin}
              className="outline-none w-14"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              className={`w-[83px] flex flex-col px-4 py-3 justify-center items-center bg-[#f6f7f9] rounded-xl active:border active:border-black box-border ${
                mobility === "bicycle"
                  ? "border border-black drop-shadow-xl"
                  : ""
              }`}
              onClick={() => setMobility("bicycle")}
            >
              <Bicycle2 />
              자전거
            </button>
            <button
              className={`w-[83px] flex flex-col px-4 py-3 justify-center items-center bg-[#f6f7f9] rounded-xl active:border active:border-black box-border ${
                mobility === "kickboard"
                  ? "border border-black drop-shadow-xl"
                  : ""
              }`}
              onClick={() => setMobility("kickboard")}
            >
              <Kickboard />
              킥보드
            </button>
            <button
              className={`w-[83px] flex flex-col px-4 py-3 justify-center items-center bg-[#f6f7f9] rounded-xl active:border active:border-black box-border ${
                mobility === "scooter"
                  ? "border border-black drop-shadow-xl"
                  : ""
              }`}
              onClick={() => setMobility("scooter")}
            >
              <Scooter />
              스쿠터
            </button>
          </div>
        </div>
        <span className="mt-4">매주 반복하시겠습니까?</span>
        <div className="flex justify-between mt-3">
          <button
            className={`w-[140px] h-[44px] px-12 py-3 bg-[#f6f7f9] rounded-xl active:border active:border-black box-border ${
              repeat === true ? "border border-black drop-shadow-xl" : ""
            }`}
            onClick={() => setRepeat(true)}
          >
            예
          </button>
          <button
            className={`w-[140px] h-[44px] px-12 py-3 bg-[#f6f7f9] rounded-xl active:border active:border-black box-border ${
              repeat === false ? "border border-black drop-shadow-xl" : ""
            }`}
            onClick={() => setRepeat(false)}
          >
            아니요
          </button>
        </div>
        <button className="bottom-8 w-full bg-black font-bold text-[18px] text-white py-4 rounded-lg relative -bottom-52">
          위치 설정하기
        </button>
      </div>
    </div>
  );
};

export default Section1;
