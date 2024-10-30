import { Close, Plus, ResultImg } from "../assets";

const Result = () => {
  return (
    <div className="flex flex-col bg-[#f6f7f9] gap-4">
      <div className="flex flex-col gap-8 px-8 py-12 bg-white">
        <Close />
        <div className="flex flex-col">
          <span className="text-[#14161a] text-2xl font-semibold">
            반납 완료!
          </span>
          <span className="text-[13px] text-[#7d7d7d]">
            이용에 문제가 있었나요?
          </span>
        </div>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-xl">N분</div>
            <span className="text-[#7d7d7d] text-[13px]">주행 시간</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold text-xl">200원</div>
            <span className="text-[#7d7d7d] text-[13px]">결제 예정 금액</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold text-xl">2km</div>
            <span className="text-[#7d7d7d] text-[13px]">이동 거리</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white px-4 gap-2">
        <div className="font-bold flex justify-between px-5 mt-6">
          <span>받은 혜택</span>
          <span>4,500원</span>
        </div>
        <div className="flex bg-orange-100 px-4 py-3 gap-5 items-center rounded-lg">
          <Plus />
          <div className="flex flex-col">
            <span className="text-xs text-[#ff5700]">콜 요청 수락</span>
            <span className="text-sm font-semibold">1,300원 할인</span>
          </div>
        </div>
        <ResultImg />
        <button className="bg-black text-white py-4 rounded-lg font-semibold text-lg relative -bottom-20">
          위치 설정하기
        </button>
      </div>
    </div>
  );
};

export default Result;
