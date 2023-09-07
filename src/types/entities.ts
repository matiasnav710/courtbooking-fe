
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IVenue {
    id: number;
    name: string;
    address: string;
    startTime: string;
    endTime: string;
}

export interface ICourt {
    id: number;
    name: string;
    venue: IVenue;
    sport: ISport;
    image:string;
    description:string;
}

export interface ISport {
    id: number;
    title: string;
}

export interface ISport {
    id: number;
    title: string;
}

export interface IBooking {
    id: number;
    user: IUser;
    court: ICourt;
    startTime: string;
    endTime: string;
}