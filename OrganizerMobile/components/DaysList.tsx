import React, { Component, Props } from "react";
import httpRequestService from '../services/httpRequestService'
import { Text, View, FlatList} from "react-native";
import Day from '../models/Day'
import DaysListItem from '../components/DaysListItem'


class Dayslist extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {  
        super(props);  
        this.state = {  
            Days: [],
        };  
    }  
    componentDidMount = () => {
        var request:httpRequestService = new httpRequestService();
         request.getDays()
         .then((response) => response.json())
          .then((responseJson) => {
           this.setState({Days: responseJson});
          })
          .catch((error) => {
            console.error(error);
          });

      }
      render(){
          return(
            <View>
                
                <FlatList
                data={this.state.Days}
                renderItem={({ item }) => <DaysListItem Day = {item}></DaysListItem>}
                keyExtractor={item => item.id.toString()}
                />
                
            </View>
          )
      }
}

export default Dayslist;