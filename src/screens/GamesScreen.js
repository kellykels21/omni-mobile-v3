import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProgressCircle from '../components/ProgressCircle';

export default function GamesScreen() {
    return (
        <View style={styles.container}>
            <ProgressCircle></ProgressCircle>
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