import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import OmniMap from '../components/map/OmniMap/OmniMap';
import * as Location from 'expo-location';

export default function MapDashboard() {
  const [location, setLocation] = useState(null);

  // Get Location Permissions and Set Location State
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  //Get Nearby Hotspots

  return (
    <View style={styles.container}>
      {location && <OmniMap location={location}></OmniMap>}
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
