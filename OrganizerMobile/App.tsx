import 'react-native-gesture-handler';
import React, { Component } from 'react';
import MainView from './components/MainView'
import AddToDo from './components/AddToDo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends Component {
  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={MainView}/>
          <Stack.Screen
          name="AddToDo"
          component={AddToDo}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
