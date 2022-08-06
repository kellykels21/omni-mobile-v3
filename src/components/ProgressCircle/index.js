import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ProgressCircle(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.centerImage} source={require('../../../assets/flaming-potato-2x.png')}></Image>
            <Image style={styles.centerImage} source={require('../../../assets/sweat-smile-potato-character-cartoon-style-2x.png')}></Image>
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