import { Logo, MainSection1, SmallTaxi, MainSection2, TabBar } from "./assets";
import CallButton from "./CallButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-6 pt-3">
        <Logo />
        <div className="flex border border-[#DFE1E6] w-full items-center font-bold rounded-[30px] px-4 py-2 gap-1">
          <SmallTaxi />
          <span className="text-[#909399]">어디로 갈까요?</span>
        </div>
      </div>
      <MainSection1 className="w-full" />
      <div className="flex px-5 justify-between gap-4">
        <CallButton text="콜 하기" />
        <CallButton text="예약 하기" />
      </div>
      <MainSection2 className="mt-2" />
      <TabBar />
    </div>
  );
}
