import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Calendar from '../components/Calendar';
import request from '../services/httpDayRequestService'
import Day from '../models/Day'
import ToDos from '../components/ToDos'
import Schedule from '../components/Schedule'
import Footer from '../components/Footer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
    backgroundColor: '#C0C0C0'
    
  }
})
export default MainView;