export default class Note {
    constructor(date: Date, text: string){
        this.date = date;
        this.text = text;
    }
    date: Date;
    text: string;
}