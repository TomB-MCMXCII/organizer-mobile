import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import ToDo from "models/ToDo";
import { Icon } from 'react-native-elements'

interface IToDosProps {
    todos: Array<ToDo>;
}
interface IToDoState {
    todos: Array<ToDo>
}
export default class ToDos extends Component<IToDosProps, IToDoState>{
    constructor(props: IToDosProps){
        super(props);
        this.state ={
            todos: []
        }
    }

    componentDidUpdate() {
        if (this.props.todos !== this.state.todos) {
            this.setState({todos: this.props.todos});
        }
    }

    render(){
        return(
            <View>
                {this.state.todos.length === 0 && <Text style={styles.noEntries}>No entries</Text>}
            <FlatList
            data={this.state.todos}
            renderItem={({ item }) => 
                <TouchableOpacity style={styles.listitem}>
                    <View style={styles.view}>
                    <Text >{item.text}</Text>
                    <Icon type='font-awesome' color='#FF0000' name="remove"/>
                    </View>
                </TouchableOpacity>}
            keyExtractor={item => item.id.toString()}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    listitem : {
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15,
    },
    noEntries : {
        color: 'red',
        textAlign: 'center'
    }
})
