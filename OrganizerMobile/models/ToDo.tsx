export default class ToDo {
    constructor(date: Date, text: string, isDone: boolean){
        this.date = date;
        this.text = text;
        this.isDone = isDone;
    }
    date: Date;
    text: string;
    isDone: boolean;
}