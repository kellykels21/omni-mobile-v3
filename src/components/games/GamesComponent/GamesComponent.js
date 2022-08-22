import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, StyleSheet, View } from 'react-native';
import SwipeCards from '../SwipeCards/SwipeCards';

export default function GamesComponent(props) {
    let [timerLength, setTimerLength] = useState(0)

    const updateGame = () => {
        console.log('finished swiping')
    }

    //Game Setup
    useEffect(() => {
        //TODO: Set Timer

        // Setup Event Listeners
        DeviceEventEmitter.addListener('finished', updateGame)
    }, [])

    return (
        <View style={styles.container}>
            <SwipeCards swipes={5}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });