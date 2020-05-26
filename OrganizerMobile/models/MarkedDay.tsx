import Dot from './Dot'

export default class MarkedDays{
    constructor(date: string,dots: Array<Dot>){
        this.date = date;
        this.dots = dots;
    }
    date: string;
    dots: Array<Dot>
}



