import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Calendar from './components/Calendar';
import request from './services/httpRequestService'
import Day from './models/Day'

interface IAppProps {
    
}

interface IAppState {
   days: Array<Day> 
}

class App extends Component<IAppProps,IAppState> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      days: Array<Day>(),
    }
  }

  componentDidMount = () => {
     request.getDays()
     .then((response) => response.json())
      .then((responseJson) => {
       this.setState({days: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {
    return (
      <View>
       <Calendar Days = {this.state.days}/>       
      </View>
    )
  }
}

export default App;
