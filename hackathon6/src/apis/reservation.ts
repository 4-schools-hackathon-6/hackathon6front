import { instance } from "./axios";

interface reservationType {
  day: string;
  time: string;
  repeatition: boolean;
  x: number;
  y: number;
  type: string;
}

export const reservation = ({
  day,
  time,
  repeatition,
  x,
  y,
  type,
}: reservationType) => {
  instance.post<reservationType>("/reservation", {
    day,
    time,
    repeatition,
    x,
    y,
    type,
  });
};
