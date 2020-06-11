import React, { Component } from 'react'
import {View, Picker, StyleSheet, Text} from 'react-native'

interface ITimePickerState {
    
}

interface ITimePickerProps {
    startHours: string,
    startMinutes: string,
    endHours: string,
    endMinutes: string
}

export default class TimePicker extends Component<ITimePickerProps, ITimePickerState> {
    constructor(props: any){
        super(props);
        
    }

    componentDidUpdate() {
        if (this.props.todos !== this.state.todos) {
            this.setState({todos: this.props.todos});
        }
    }

    render() {
        return(
            <View>
                <Text>Start time</Text>
                <View style={styles.container}>
                    
                    <View >
                        <Picker
                            selectedValue={this.props.startHours}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue) =>
                                this.setState({startHours: itemValue.toString()})
                            }>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="24" />
                        </Picker>
                    </View>
                    <View>
                        <Picker
                            selectedValue={this.props.startMinutes}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue) =>
                                this.setState({startMinutes: itemValue.toString()})
                            }>
                            <Picker.Item label="00" value="00" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="30" value="30" />
                            <Picker.Item label="45" value="45" />
                        </Picker>
                    </View>
                </View>
                <Text>End time</Text>
                <View style={styles.container}>
                    <View>
                        <Picker
                            selectedValue={this.props.endHours}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue) =>
                                this.setState({endHours: itemValue.toString()})
                            }>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="24" />
                        </Picker>
                    </View>
                    <View>
                        <Picker
                            selectedValue={this.props.endMinutes}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue) =>
                                this.setState({endMinutes: itemValue.toString()})
                            }>
                            <Picker.Item label="00" value="00" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="30" value="30" />
                            <Picker.Item label="45" value="45" />
                        </Picker>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    }
})