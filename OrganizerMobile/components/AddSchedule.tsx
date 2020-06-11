import React, { Component } from 'react'
import {View, Button, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard, Text} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import global from '../styles/globalStylesheet'
import TimePicker from '../components/TimePicker';

interface IAddScheduleProps {
    navigation: any
}

interface IAddScheduleState {
    value: string,
    date: string,
    errorMessage: string,
    isValidationError: boolean,
    successMessage: string,
    isAddedSuccesfully: boolean,
    language: string
}

export default class AddSchedule extends Component<IAddScheduleProps,IAddScheduleState>{
    constructor(props: any){
        super(props);
        this.state = {
            value: '',
            date: '',
            errorMessage: 'Error: empty text field',
            successMessage: 'Added succesfully',
            isAddedSuccesfully: false,
            isValidationError: false,
            language: '',
        }
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
                onDateSelected= {(date) => this.setState({date: date.toString(), value: ''})}
                scrollable={true}
                selectedDate={new Date()}
                ></CalendarStrip>
                <TouchableWithoutFeedback onPress= {() => Keyboard.dismiss()}>
                    <View>
                            {this.state.isValidationError === true && <Text style={global.erroMessage}>{this.state.errorMessage}</Text>}
                            {this.state.isAddedSuccesfully === true && <Text style={global.succesMessage}>{this.state.successMessage}</Text>}
                        <View style = {styles.textInputContainer}>
                            <View style = {styles.inputContainer}>
                                <Text>Start time</Text>
                                    <TimePicker/>
                                <Text>End time</Text>
                                    <TimePicker/>
                                <Text>Text</Text>
                                <TextInput
                                style={{ height: 120, borderColor: 'grey', borderWidth: 1, textAlignVertical: 'top', fontSize:20 }}
                                multiline
                                numberOfLines = {5}
                                maxLength = {100}
                                placeholder = 'enter text here'
                                value={this.state.value}
                                />
                            </View>
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button
                            title = {'Add schedule item'}
                            onPress={() => console.log()}/>    
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button
                            title = {'Go back to add todo'}
                            onPress={() => this.props.navigation.navigate("???")}/>    
                        </View>
                        <View style = {styles.buttonContainer}>
                            <Button
                            title = {'Go back to mainview'}
                            onPress={() => this.props.navigation.navigate("Home")}/>    
                        </View>
                    </View>
                </TouchableWithoutFeedback>       
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
        marginTop: 20
    }
})