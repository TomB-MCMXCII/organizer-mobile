import react, { Component } from 'react'
import {View, Picker} from 'react-native'

interface ITimePickerState {
    time: string
}

interface ITimePickerProps {
    
}

export default class TimePicker extends Component<ITimePickerProps, ITimePickerState> {
    constructor(props: any){
        super(props);
        this.state = {
            time: ''
        }
    }

    render() {
        return(
            <View>
                <Picker
                    selectedValue={this.state.time}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue) =>
                        this.setState({time: itemValue.toString()})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    </Picker>
            </View>
        )
    }
}