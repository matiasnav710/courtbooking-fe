import { ICourt, IUser, IVenue } from "./entities";

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

export type TGetVenuesService = () => Promise<IVenue[]>;

export interface IGetCourtsPayload {
    id: number;
}

export type TGetCourtService = (payload: IGetCourtsPayload) => Promise<ICourt[]>;

export interface ICreateBookingPayload {
    court: number;
    startTime: Date;
    endTime: Date;
}

export type TCreateBookingService = (payoad: ICreateBookingPayload) => Promise<string>;

export interface IGetCourtAvaliabilityPayload {
    id: number;
}

export interface IGetCourtAvaliabilityResponse {
    id: number;
    startTime: string;
    endTime: string;
}

export type TGetCourtAvaliabilityService = (payload: IGetCourtAvaliabilityPayload) => Promise<IGetCourtAvaliabilityResponse[]>