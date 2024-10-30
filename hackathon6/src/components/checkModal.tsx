import React from "react";

export const CheckModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">스콜이 완료되었어요!</h2>
        <p className="text-sm text-gray-700 mb-6">
          설정 구역 주변에 모빌리티가 도착했어요!
          <br />
          안전하고 신나게 대여를 시작해볼까요?
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CheckModal;
