import React, {Component} from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import request from '../services/httpTodoRequestService'

interface IAddToDoState {
    value: string,
    date: string
}

interface IAddToDoProps {

}
export default class AddToDo extends Component<IAddToDoProps,IAddToDoState>{
    constructor(props: any){
        super(props);
        this.state = {
            value: '',
            date: ''
        }
        
    }

    onChangeText(text:string){
        this.setState({value: text})
    }

    componentDidMount(){
        this.setState({date: new Date().toISOString()})
    }

    addToDo(){
         var todo = {text: this.state.value, date:this.state.date}
         request.addToDo(todo).then(response => console.log(response)).catch(error => console.log(error));
        
    }
    
    render(){
        return(
            <View>
                <CalendarStrip
                calendarAnimation={{ type: 'sequence', duration: 30 }}
                daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: '#CE4354'}}
                style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
                calendarHeaderStyle={{ color: '#43CEBD' }}
                calendarColor={'#7743CE'}
                dateNumberStyle={{ color: '#43CEBD' }}
                dateNameStyle={{ color: '#43CEBD' }}
                highlightDateNumberStyle={{ color: '#9ACE43' }}
                highlightDateNameStyle={{ color: '#9ACE43' }}
                disabledDateNameStyle={{ color: 'grey' }}
                disabledDateNumberStyle={{ color: 'grey' }}
                iconContainer={{ flex: 0.1 }}
                onDateSelected= {(date) => this.setState({date: date.toString()})}
                //markedDates={this.state.markedDays}
                scrollable={true}
                selectedDate={new Date()}
                ></CalendarStrip>
                <View style = {styles.textInputContainer}>
                    <View style = {styles.textContainer}>
                        <Text>Todo text</Text>
                    </View>
                    <View style = {styles.inputContainer}>
                        <TextInput
                        style={{ height: 120, borderColor: 'grey', borderWidth: 1, textAlignVertical: 'top', fontSize:20 }}
                        multiline
                        numberOfLines = {5}
                        maxLength = {100}
                        placeholder = 'enter text here'
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.value}
                        />
                    </View>
                </View>
                <View style = {styles.buttonContainer}>
                    <Button
                    title = {'Add todo'}
                    onPress={() => this.addToDo()}/>    
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputContainer : {
        flexDirection: 'row',
        paddingStart: 15,
        paddingEnd: 15,
        marginTop:20
    },
    textContainer : {
        flex: 2, 
    },
    inputContainer: {
        flex: 6
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginVertical: 20
    }
})