export default class ToDo {
    constructor(id: number, date: Date, text: string, isDone: boolean){
        this.id = id;
        this.date = date;
        this.text = text;
        this.isDone = isDone;
    }
    id: number;
    date: Date;
    text: string;
    isDone: boolean;
}