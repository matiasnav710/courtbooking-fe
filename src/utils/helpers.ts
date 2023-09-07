import { IGetCourtAvaliabilityResponse } from "types/services";

export const generateDisabledTimes = (bookings: IGetCourtAvaliabilityResponse[],dateSelected:Date | null) => {
    if(!dateSelected) return []
    const disabledTimes: Date[] = [];
    bookings?.forEach((booking) => {
        const { startTime } = booking;
        const startDate = new Date(startTime);
        if(
            dateSelected.getFullYear()===startDate.getFullYear() &&
            dateSelected.getMonth()===startDate.getMonth() &&
            dateSelected.getDate() === startDate.getDate()
        )
            disabledTimes.push(startDate);
    });
    return disabledTimes;
};

export const isTimeDifferenceIs1Hour = (startTime: string, endTime: string) => {
    return Math.abs(new Date(startTime).getHours() - new Date(endTime).getHours()) === 1;
};

export const formatDateTime = (date:Date)=>{  
    // Get date components
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
  
    // Get time components
    const hours = Number(date.getHours().toString().padStart(2, '0'));
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = Number(hours) >= 12 ? 'PM' : 'AM';
  
    // Adjust hours for AM/PM format
    const formattedHours = hours % 12 === 0 ? '12' : (hours % 12).toString();
  
    // Create the formatted date-time string
    const formattedDateTime = `${day}-${month}-${year} ${formattedHours}:${minutes} ${ampm}`;
  
    return formattedDateTime;
  }
  