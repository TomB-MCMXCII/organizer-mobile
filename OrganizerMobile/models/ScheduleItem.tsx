export default class ScheduleItem {
    constructor(date: Date, text: string, startTime: Date, endTime: Date){
        this.date = date;
        this.text = text;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    date: Date;
    text: string;
    startTime: Date
    endTime: Date
}