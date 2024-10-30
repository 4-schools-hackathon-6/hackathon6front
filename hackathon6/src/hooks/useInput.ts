import { useState } from "react";

const useTimeInput = (initHour: number, initMin: number) => {
  const [hour, setHour] = useState(initHour);
  const [min, setMin] = useState(initMin);

  const changeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[0-9]*/) && ~~e.target.value < 24) {
      setHour(~~e.target.value.padStart(2, "0"));
    }
  };

  const changeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[0-9]*/) && ~~e.target.value < 60) {
      setMin(~~e.target.value.padStart(2, "0"));
    }
  };

  return { hour, min, changeHour, changeMin };
};

export default useTimeInput;
