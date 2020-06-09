import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ScheduleItem from 'models/ScheduleItem';
import { Icon } from 'react-native-elements';
import request from '../services/httpScheduleRequestService'
import global from '../styles/globalStylesheet'

interface IScheduleState {
    schedule: Array<ScheduleItem>
}

interface IScheduleProps {
    schedule: Array<ScheduleItem>,
    getDay: any
}

export default class Schedule extends Component<IScheduleProps, IScheduleState> {
    constructor(props: IScheduleProps) {
        super(props);
        this.state = {
            schedule: []
        }
    }

    componentDidUpdate() {
        if (this.props.schedule !== this.state.schedule) {
            this.setState({schedule: this.props.schedule.sort(function (a, b) {
                return a.startTime.toString().localeCompare(b.startTime.toString());
            })});
        }
    }

    async deleteScheduleItem(id:number){
        await request.deleteScheduleItem(id);
        this.props.getDay(this.state.schedule[0].date)
    }

    render(){
        return(
            <View>
            {this.state.schedule.length === 0 && <Text style={global.erroMessage}>No entries</Text>}
        <FlatList style={styles.flatlist}
        data={this.state.schedule}
        renderItem={({ item }) => 
            <TouchableOpacity style={styles.listitem}>
                <View style={styles.view}>
                <Text style = {styles.listitemText}>{item.startTime} - {item.endTime}</Text>
                <Text style = {styles.listitemText}>{item.text}</Text>
                <Icon type='font-awesome' color='#CE4354' name="trash" onPress={ () => this.deleteScheduleItem(item.id)}/>
                </View>
            </TouchableOpacity>}
        keyExtractor={item => item.id.toString()}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15,
    },
    flatlist: {
        marginBottom:1,
    }
})