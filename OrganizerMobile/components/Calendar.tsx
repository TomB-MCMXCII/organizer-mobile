import React, {Component} from 'react'
import { View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import Day from '../models/Day'
import MarkedDay from '../models/MarkedDay'
import Dot from '../models/Dot'

interface ICalendarProps {
    Days: Array<Day>,
    getDay: any
}

interface ICalendarState {
    markedDays: Array<MarkedDay>,
}

class Calendar extends Component<ICalendarProps,ICalendarState>{
    constructor(props: ICalendarProps){
        super(props);
        this.state = {
            markedDays: [],
        }
    }
    componentDidUpdate(){
        if(this.props.Days.length !== this.state.markedDays.length)
        {
            var marked: Array<MarkedDay> = [];

            this.props.Days.forEach(d => {
                var dot = new Dot(d.id,'#9ACE43');
                var markedDate = new MarkedDay(d.date,new Array(dot));
                marked.push(markedDate);            
            })
            
            this.setState(prevState => ({
                markedDays: [...prevState.markedDays.concat(marked)]
            }))
        }
    }
   
    render() { 
        return (
            <View>
                <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#CE4354'}}
                style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
                calendarHeaderStyle={{ color: '#43CEBD' }}
                calendarColor={'#7743CE'}
                dateNumberStyle={{ color: '#43CEBD' }}
                dateNameStyle={{ color: '#43CEBD' }}
                highlightDateNumberStyle={{ color: '#9ACE43' }}
                highlightDateNameStyle={{ color: '#9ACE43' }}
                disabledDateNameStyle={{ color: 'grey' }}
                disabledDateNumberStyle={{ color: 'grey' }}
                iconContainer={{ flex: 0.1 }}
                onDateSelected= {(date) => this.props.getDay(date.toISOString())}
                markedDates={this.state.markedDays}
                scrollable={true}
                selectedDate={new Date()}
                ></CalendarStrip>            
          </View>
        )
    }
}

export default Calendar;