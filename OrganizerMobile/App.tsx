import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Calendar from './components/Calendar';
import request from './services/httpRequestService'
import Day from './models/Day'
import ToDos from './components/ToDos'
import Schedule from './components/Schedule'

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
        scheduleDtos: [],
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
    this.getDay(new Date().toDateString()) 
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
      <View style={{flex: 1}}>
       <Calendar Days = {this.state.days} getDay={this.getDay}/>
       <ScrollView>
       <Text style={styles.todos}>ToDo's</Text>
       <ToDos todos = {this.state.day.toDoDtos}></ToDos> 
       <Text style={styles.todos}>Schedule</Text>
       <Schedule schedule = {this.state.day.scheduleDtos}></Schedule>
       </ScrollView>      
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
