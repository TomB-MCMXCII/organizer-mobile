import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ScheduleItem from 'models/ScheduleItem';
import { Icon } from 'react-native-elements';
import request from '../services/httpScheduleRequestService'

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
            {this.state.schedule.length === 0 && <Text style={styles.noEntries}>No entries</Text>}
        <FlatList style={styles.flatlist}
        data={this.state.schedule}
        renderItem={({ item }) => 
            <TouchableOpacity style={styles.listitem}>
                <View style={styles.view}>
                <Text>{item.startTime} - {item.endTime}</Text>
                <Text >{item.text}</Text>
                <Icon type='font-awesome' color='#FF0000' name="remove" onPress={ () => this.deleteScheduleItem(item.id)}/>
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:15,
    },
    noEntries : {
        color: 'red',
        textAlign: 'center'
    },
    flatlist: {
        marginBottom:1,
    }
})