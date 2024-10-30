import { useState } from "react";
import { Backward2, Bicycle2, Kickboard, Scooter } from "../assets";

interface PropsType {
  setPage: (number: number) => void;
}

const Section1 = ({ setPage }: PropsType) => {
  const [mobility, setMobility] = useState({
    kickboard: false,
    bicycle: false,
    scooter: false,
  });
  return (
    <div className="flex flex-col w-full h-full px-[22px] pt-[45px] pb-8 justify-between">
      <div className="flex flex-col gap-[30px]">
        <Backward2 />
        <div className="flex flex-col">
          <span className="font-semibold text-2xl">
            이용할 기기를 선택해 주세요
          </span>
          <span className="text-sm">
            킥보드와 전기자전거 모두 대여할 수 있어요.
          </span>
        </div>
        <div className="mt-10px flex flex-col gap-4">
          <button
            onTouchEnd={() =>
              setMobility({ ...mobility, kickboard: !mobility.kickboard })
            }
            className={`${
              mobility.kickboard ? "border border-black drop-shadow-xl" : ""
            } outline-none rounded-xl flex justify-between items-center px-7 bg-[#f6f7f9] h-[100px]`}
          >
            <span className="font-semibold text-xl">킥보드</span>
            <Kickboard />
          </button>
          <button
            onTouchEnd={() =>
              setMobility({ ...mobility, bicycle: !mobility.bicycle })
            }
            className={`${
              mobility.bicycle ? "border border-black drop-shadow-xl" : ""
            } outline-none rounded-xl flex justify-between items-center px-7 bg-[#f6f7f9] h-[100px]`}
          >
            <span className="font-semibold text-xl">자전거</span>
            <Bicycle2 />
          </button>
          <button
            onTouchEnd={() =>
              setMobility({ ...mobility, scooter: !mobility.scooter })
            }
            className={`${
              mobility.scooter ? "border border-black drop-shadow-xl" : ""
            } outline-none rounded-xl flex justify-between items-center px-7 bg-[#f6f7f9] h-[100px]`}
          >
            <span className="font-semibold text-xl">스쿠터</span>
            <Scooter />
          </button>
        </div>
      </div>
      <button
        className="bg-black text-white py-4 rounded-lg font-semibold text-lg"
        onTouchEnd={() => setPage(1)}
      >
        위치 설정하기
      </button>
    </div>
  );
};

export default Section1;
