import React, { Component } from 'react'
import {View, Button, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard, Text} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import global from '../styles/globalStylesheet'

interface IAddScheduleProps {
    navigation: any
}

interface IAddScheduleState {
    value: string,
    date: string,
    errorMessage: string,
    isValidationError: boolean,
    successMessage: string,
    isAddedSuccesfully: boolean
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
                //markedDates={this.state.markedDays}
                scrollable={true}
                selectedDate={new Date()}
                ></CalendarStrip>
                {/* <TouchableWithoutFeedback onPress= {() => Keyboard.dismiss()}> */}
                        {this.state.isValidationError === true && <Text style={global.erroMessage}>{this.state.errorMessage}</Text>}
                        {this.state.isAddedSuccesfully === true && <Text style={global.succesMessage}>{this.state.successMessage}</Text>}
                    <View style = {styles.textInputContainer}>
                        <View style = {styles.inputContainer}>
                            <TextInput
                            style={{ height: 60, borderColor: 'grey', borderWidth: 1, textAlignVertical: 'top', fontSize:20, marginTop: 20 }}
                            multiline
                            numberOfLines = {1}
                            maxLength = {20}
                            placeholder = 'enter start time here'
                            // onChangeText={text => this.onChangeText(text)}
                            value={this.state.value}
                            />
                            <TextInput
                            style={{ height: 60, borderColor: 'grey', borderWidth: 1, textAlignVertical: 'top', fontSize:20, marginTop: 20 }}
                            multiline
                            numberOfLines = {1}
                            maxLength = {20}
                            placeholder = 'enter end time here'
                            // onChangeText={text => this.onChangeText(text)}
                            value={this.state.value}
                            />
                            <TextInput
                            style={{ height: 60, borderColor: 'grey', borderWidth: 1, textAlignVertical: 'top', fontSize:20, marginTop: 20 }}
                            multiline
                            numberOfLines = {1}
                            maxLength = {20}
                            placeholder = 'enter text here'
                            // onChangeText={text => this.onChangeText(text)}
                            value={this.state.value}
                            />
                        </View>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button
                        title = {'Add todo'}
                         onPress={() => console.log()}/>    
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button
                        title = {'Add schedule'}
                        onPress={() => this.props.navigation.navigate("???")}/>    
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button
                        title = {'Go back to mainview'}
                        onPress={() => this.props.navigation.navigate("Home")}/>    
                    </View>
                {/* </TouchableWithoutFeedback>        */}
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