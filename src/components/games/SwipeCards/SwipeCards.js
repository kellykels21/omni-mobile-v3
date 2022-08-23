import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, StyleSheet, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function SwipeCards(props) {
    let [counter, setCounter] = useState(null)

    //Swiper Setup
    useEffect(() => {
        setCounter(props.swipes)

        //TODO: Setup on listeners for Timeouts
    }, [])

    const reset = () => {
        setCounter(props.swipes)
    }
    //Watch Counter
    useEffect(() => {
        if (counter === 0) {
            DeviceEventEmitter.emit('finished')
            reset()
        }
    }, [counter])

    const onSwipeUp = () => {
        setCounter(counter -= 1)
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
        <View style={styles.container}>
            <Text>Counter: { counter }</Text>
            <GestureRecognizer
                onSwipeUp={(state) => onSwipeUp(state)}
                config={config}
                style={styles.container}
            >
                <Text>Swipe here</Text>
            </GestureRecognizer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 500,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });