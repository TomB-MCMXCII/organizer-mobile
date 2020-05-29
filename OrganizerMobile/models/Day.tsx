import Note from './Note'
import ToDo from './ToDo'
import ScheduleItem from './ScheduleItem'

export default class Day {
    constructor(id: number, date: string, noteList: Array<Note>, toDoList: Array<ToDo>, schedule: Array<ScheduleItem>){
        this.id = id;
        this.date = date;
        this.noteList = noteList;
        this.toDoDtos = toDoList;
        this.scheduleDtos = schedule;
    }
    id: number;
    date: string;
    noteList: Array<Note>;
    toDoDtos: Array<ToDo>;
    scheduleDtos: Array<ScheduleItem>;
}