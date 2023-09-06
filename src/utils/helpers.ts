import { IGetCourtAvaliabilityResponse } from "types/services";

export const generateDisabledTimes = (bookings: IGetCourtAvaliabilityResponse[], fieldName: string) => {
    const disabledTimes: Date[] = [];

    bookings?.forEach((booking) => {
        const { startTime, endTime } = booking;
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
    
        if(fieldName === "startTime") disabledTimes.push(startDate);
        else disabledTimes.push(endDate);
    });

    return disabledTimes;
};

export const isTimeDifferenceIs1Hour = (startTime: string, endTime: string) => {
    return Math.abs(new Date(startTime).getHours() - new Date(endTime).getHours()) === 1;
};