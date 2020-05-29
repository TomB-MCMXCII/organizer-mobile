import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import ToDo from "models/ToDo";
import { Icon } from 'react-native-elements'
import request from '../services/httpTodoRequestService'

interface IToDosProps {
    todos: Array<ToDo>;
    getDay: any;
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

    async deleteToDo(id:number){
        await request.deleteTodDo(id);
        this.props.getDay(this.state.todos[0].date)
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
                    <Icon type='font-awesome' color='#FF0000' name="remove" onPress={ () => this.deleteToDo(item.id)}/>
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
