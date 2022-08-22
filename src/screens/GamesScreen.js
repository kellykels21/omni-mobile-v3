import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GamesComponent from '../components/games/GamesComponent/GamesComponent';

export default function GamesScreen() {
    return (
        <View style={styles.container}>
            <GamesComponent />
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