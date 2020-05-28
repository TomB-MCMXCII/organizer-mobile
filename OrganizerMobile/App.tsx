import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from './components/Calendar';
import request from './services/httpRequestService'
import Day from './models/Day'
import ToDos from './components/ToDos'

interface IAppProps {
    
}

interface IAppState {
   days: Array<Day> 
   day: Day
}

class App extends Component<IAppProps,IAppState> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      days: Array<Day>(),
      day: {
        id: 0,
        date: '',
        noteList: [],
        schedule: [],
        toDoDtos: []
      }
    }
  }

  componentDidMount = () => {
    var dayArray: Array<Day> = [];
     request.getDays()
     .then((response) => response.json())
      .then((responseJson) => {
      dayArray = responseJson;
      this.setState(prevState => ({
        days: [...prevState.days.concat(dayArray)]
      }))
      })
      .catch((error) => {
        console.error(error);
      });
     
  }

  getDay = (date:string) => {
    request.getDay(date)
    .then((response) => response.json())
    .then((responseJson) => {
     this.setState({day: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
      <View>
       <Calendar Days = {this.state.days} getDay={this.getDay}/>
       <Text style={styles.todos}>ToDo's</Text>
       <ToDos todos = {this.state.day.toDoDtos}></ToDos> 
       <Text style={styles.todos}>Schedule</Text>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todos:{
    textAlign:'center',
    fontSize:30,
    backgroundColor: '#C0C0C0'
    
  }
})
export default App;
