import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import ToDo from "models/ToDo";
import { Icon } from 'react-native-elements'
import request from '../services/httpTodoRequestService'
import global from '../styles/globalStylesheet'

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
                {this.state.todos.length === 0 && <Text style={global.erroMessage}>No entries</Text>}
            <FlatList 
            data={this.state.todos}
            renderItem={({ item }) => 
                <TouchableOpacity style={styles.listitem}>
                    <View style={styles.view}>
                        <View style = {styles.textContainer}>
                            <Text style = {styles.listitemText}>{item.text}</Text>
                        </View>
                        <View style = {styles.iconContainer}>
                            <Icon type='font-awesome' color='#CE4354' name="trash" onPress={ () => this.deleteToDo(item.id)}/>
                        </View>
                    </View>
                </TouchableOpacity>}
            keyExtractor={item => item.id.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer : {
       flex: 15,
       color: '#2EB0A0'
    },
    iconContainer : {
        flex: 1
    },
    listitem : {
        backgroundColor: '#9167d7',
        borderBottomWidth: 1,
        borderColor: '#9ACE43',
    },
    listitemText: {
        color: '#2EB0A0',
        fontWeight:'700'
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15,
        flex:1
    }
})
