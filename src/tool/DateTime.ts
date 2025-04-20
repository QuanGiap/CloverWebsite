/**
 * @description This file contains functions to convert date and time to a specific format.
 * @param date Date
 * @returns formatted date string
 * @example convertToDate(new Date()) => "MM-DD/YYYY"
 */
function convertToDate(date:Date){
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1; // Months start at 0!
    const dd = date.getDate();
    const dayString = dd < 10 ? "0" + dd : dd;
    const monthString = mm < 10 ? "0" + mm : mm;
    const formattedToday = monthString + "-" + dayString + "-" + yyyy;
    return formattedToday;
}

/**
 * @description This function converts time in seconds to a string in the format of mm:ss.
 * @param time number
 * @returns formatted time string
 * @example convertToTime(120) => "02:00"
 */
function convertToTime(time:number){
    const minute = Math.floor(time / 60);
    const second = time % 60;
    const minuteString = minute < 10 ? "0" + minute : minute;
    const secondString = second < 10 ? "0" + second : second;
    const formattedTime = minuteString + ":" + secondString;
    return formattedTime;
}

export {convertToDate,convertToTime}