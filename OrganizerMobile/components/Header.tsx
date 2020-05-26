import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native'
import {Header,Icon} from 'react-native-elements'

const AppHeader = () => {
    return (
        <View>
            <Header
            placement="center"
            leftComponent={{ icon: 'home', color: '#fff', size: 35, onPress: () => console.log() }}
            centerComponent={{ text: 'Welcome', style: { color: '#fff', fontSize:25 } }}
            rightComponent={{ icon: 'refresh', color: '#fff', size: 35 }}
            containerStyle={{
                backgroundColor: '#3D6DCC',
                justifyContent: 'space-around',
              }}
            />
        </View>
    );
};

export default AppHeader;