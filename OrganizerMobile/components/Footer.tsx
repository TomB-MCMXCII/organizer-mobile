import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
 
interface IFooterProps {
    navigation: any
}
interface IFooterState {

}

export default class Footer extends Component<IFooterProps, IFooterState>{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View style = {styles.footerContainer}>
                <View style = {styles.addToDoContainer}><TouchableOpacity onPress={() => {this.props.navigation.navigate("AddToDo")}}><Text style = {styles.textTodo}>Add todo</Text></TouchableOpacity></View>
                <View style = {styles.addScheduleContainer}><TouchableOpacity onPress={() => {this.props.navigation.navigate("AddSchedule")}} ><Text style = {styles.textSchedule}>Add schedule</Text></TouchableOpacity></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#7743CE',
        height: 60,
        flexDirection: 'row',
    },
    addToDoContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    addScheduleContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    textTodo: {
        color: 'white',
        fontSize: 20,
        paddingStart: 15,
        paddingTop: 15
    },
    textSchedule: {
        color: 'white',
        fontSize: 20,
        paddingTop: 15,
        paddingEnd: 15
    }
})