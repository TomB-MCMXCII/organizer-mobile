import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Calendar from '../components/Calendar';
import request from '../services/httpDayRequestService'
import Day from '../models/Day'
import ToDos from '../components/ToDos'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'

interface IAppProps {
    navigation:any
}

interface IAppState {
   days: Array<Day> 
   day: Day
}

class MainView extends Component<IAppProps,IAppState> {
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
          if(responseJson === undefined){
            
          }
          else{
      dayArray = responseJson;
      this.setState(prevState => ({
        days: [...prevState.days.concat(dayArray)]
      }))}
      })
      .catch((error) => {
        console.error(error);
      });
    this.getDay(new Date().toDateString()) 
  }

  getDay = (date:string) => {
    request.getDay(date)
    .then((response) => response.json()).catch((error) => {error})
    .then((responseJson) => {
        if(responseJson === undefined)
        {
            this.setState({day: {
                id: 0,
                date: '',
                noteList: [],
                scheduleDtos: [],
                toDoDtos: []
            }})
        }else{
            this.setState({day: responseJson});
        }
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#5F2EB0'}}>
       <Calendar Days = {this.state.days} getDay={this.getDay}/>
       <ScrollView>
       <Text style={styles.todos}>ToDo's</Text>
       <ToDos todos = {this.state.day.toDoDtos} getDay={this.getDay}></ToDos> 
       <Text style={styles.todos}>Schedule</Text>
       <Schedule schedule = {this.state.day.scheduleDtos} getDay={this.getDay}></Schedule>
       </ScrollView>
       <Footer navigation={this.props.navigation}></Footer>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  todos:{
    textAlign:'center',
    fontSize:30,
    backgroundColor: '#5F2EB0',
    color: '#43CEBD'
  }
})
export default MainView;