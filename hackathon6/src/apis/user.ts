import { instance } from "./axios";

interface SignInType {
  type: string;
  token: string;
  id: number;
  email: string;
  name: string;
}

export const signIn = (email: string, password: string) =>
  instance.post<SignInType>("user/signin", {
    email: email,
    password: password,
  });
