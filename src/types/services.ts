import { IUser } from "./entities";

export type TGetUserService = () => Promise<IUser>;

export interface ILoginPayload {
    email: string;
    password: string;
}

export type TLoginService = (payload: ILoginPayload) => Promise<string>;

export interface IRegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type TRegisterService = (payload: IRegisterPayload) => Promise<string>;