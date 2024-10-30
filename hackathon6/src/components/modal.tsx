import React, { Dispatch, SetStateAction } from "react";

const Modal = ({
  setIsModalOpen,
  setRadius,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setRadius: Dispatch<SetStateAction<number>>;
}) => {
  const handleSubmit = () => {
    setIsModalOpen(false);
    setRadius(50);
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="w-[300px] p-6 rounded-[15px] shadow-lg bg-white border border-blue-200">
        <h2 className="text-xl font-bold mb-2">스콜이 들어왔어요!</h2>
        <p className="text-sm mb-4 font-bold">
          반경 15m 내 지정된 곳에 주차하면
          <br />
          <span className="text-orange-500 font-bold">10% 페이백</span>
        </p>
        <div className="flex space-x-4">
          <button
            className="flex-1 bg-orange-500 text-white py-2 rounded-md font-semibold"
            onClick={() => handleSubmit()}
          >
            수락하기
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md font-semibold">
            거절하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
