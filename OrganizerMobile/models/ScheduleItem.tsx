export default class ScheduleItem {
    constructor(id: number,date: Date, text: string, startTime: Date, endTime: Date){
        this.id = id,
        this.date = date;
        this.text = text;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    id:number;
    date: Date;
    text: string;
    startTime: Date
    endTime: Date
}