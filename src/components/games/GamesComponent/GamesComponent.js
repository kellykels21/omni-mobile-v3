import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, StyleSheet, Text, View } from 'react-native';
import SwipeCards from '../SwipeCards/SwipeCards';

export default function GamesComponent(props) {
    let [timer, setTimer] = useState(0)
    let [started, setStarted] = useState(false)

    const update = () => {
        console.log('finished swiping')
    }

    const start = () => {
        setStarted(true)
    }

    //Game Setup
    useEffect(() => {
        setTimer(10)
        DeviceEventEmitter.addListener('finished', update)
        DeviceEventEmitter.addListener('start', start)
        start()
    }, [])

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(timer -= 1)
        }, 1000)
    }, [started])

    return (
        <View style={styles.container}>
            {/* <Text>Timer: { timer }</Text> */}
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