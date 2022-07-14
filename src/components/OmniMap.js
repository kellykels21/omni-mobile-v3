import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
      />
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});