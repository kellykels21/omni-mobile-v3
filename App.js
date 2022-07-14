import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, View } from 'react-native';
import MapDashboard from './src/screens/MapDashboard';

function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapDashboard />
    </View>
  );
}

const Drawer = createDrawerNavigator()

export default function App() {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Dashboard">
        <Drawer.Screen options={{ 
          title: 'Omni Map',
          headerStyle: {
          backgroundColor: 'transparent'
        }}} name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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
