import { Bicycle } from "./assets";

interface PropsType {
  text?: string;
}

const CallButton = ({ text }: PropsType) => {
  return (
    <div className="rounded-[10px] bg-[#f6f7f9] flex-col relative p-4 flex-grow h-[85px]">
      <span className="font-semibold">{text}</span>
      <div className="flex relative">
        <div className="px-[6px] py-[4px] text-white bg-[#ff6700] rounded-sm before:absolute before:-top-1 before:left-4 before:bg-[#ff6700] before:w-2 before:h-2 before:rotate-45 text-[7px]">
          오직 Essential 회원만!
        </div>
      </div>
      <Bicycle className="absolute right-1 bottom-1" />
    </div>
  );
};

export default CallButton;
