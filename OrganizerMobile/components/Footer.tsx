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
            <View style = {styles.container}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddToDo")}}><Text style = {styles.textTodo}>Add todo</Text></TouchableOpacity>
                <TouchableOpacity ><Text style = {styles.textSchedule}>Add schedule</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7743CE',
        height: 60,
        flexDirection: 'row',
    },
    textTodo: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 15
    },
    textSchedule: {
        color: 'white',
        fontSize: 20,
        paddingTop: 15,
    }
})