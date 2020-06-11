import 'react-native-gesture-handler';
import React, { Component } from 'react';
import MainView from './components/MainView'
import AddToDo from './components/AddToDo'
import AddSchedule from './components/AddSchedule'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard } from 'react-native';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
            name="Home"
            component={MainView}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#5F2EB0',
              },
              headerTintColor: '#fff',
            }}/>
            <Stack.Screen
            name="AddToDo"
            component={AddToDo}
            options={{
              title: 'Add todo',
              headerStyle: {
                backgroundColor: '#5F2EB0',
              },
              headerTintColor: '#fff',
            }}/>
            <Stack.Screen
            name="AddSchedule"
            component={AddSchedule}
            options={{
              title: 'Add Schedule',
              headerStyle: {
                backgroundColor: '#5F2EB0',
              },
              headerTintColor: '#fff',
            }}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
