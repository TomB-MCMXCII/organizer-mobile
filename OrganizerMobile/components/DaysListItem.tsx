import React, { Component } from "react";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Day from '../models/Day'

interface AppProps {
    Day: Day
 }
class DaysListItem extends Component<AppProps>{
    constructor(props: AppProps) {  
        super(props);    
    }
    
    convert(date: string)
    {
        return new Date(date).toDateString();
    }
    render(){
        return(
          <TouchableOpacity>
              <View>
                <Text style={styles.listItem}>{this.convert(this.props.Day.date)}</Text>
                <Text>Notes: </Text>
              </View>
          </TouchableOpacity> 
        )
    }
}

const styles = StyleSheet.create({
    listItem:{
        fontSize:30
    }
}

)
export default DaysListItem;