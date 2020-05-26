import React, {Component} from 'react'
import { View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import Day from '../models/Day'
import MarkedDay from '../models/MarkedDay'
import Dot from '../models/Dot'
import request from '../services/httpRequestService'


interface ICalendarProps {
    Days: Array<Day>
}

interface ICalendarState {
    markedDays: Array<MarkedDay>,
    day: Day
}

class Calendar extends Component<ICalendarProps,ICalendarState>{
    constructor(props: ICalendarProps){
        super(props);
        this.state = {
            markedDays: [],
            day: {
                id: 0,
                date: '',
                noteList:[],
                schedule:[],
                toDoList:[]
            }
        }  
    }

    componentDidMount(){
        var marked: Array<MarkedDay> = [];

        this.props.Days.forEach(d => {
            var dot = new Dot(d.id,'red');
            var markedDate = new MarkedDay(d.date,new Array(dot));
            marked.push(markedDate);            
        })

        this.setState(prevState => ({
            markedDays: [...prevState.markedDays.concat(marked)]
          }))
    }

    getDay(date:string){
        request.getDay(date).
        then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
         this.setState({day: responseJson});
        })
        .catch((error) => {
          console.error(error);
        });
        console.log(this.state.day);
    }
    render() {
        return (
            <View>
                <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                calendarHeaderStyle={{ color: 'white' }}
                calendarColor={'#7743CE'}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                highlightDateNumberStyle={{ color: 'yellow' }}
                highlightDateNameStyle={{ color: 'yellow' }}
                disabledDateNameStyle={{ color: 'grey' }}
                disabledDateNumberStyle={{ color: 'grey' }}
                iconContainer={{ flex: 0.1 }}
                onDateSelected= {(date) => this.getDay(date.toLocaleString())}
                markedDates={this.state.markedDays}
                ></CalendarStrip>            
          </View>
        )
    }
}

export default Calendar;