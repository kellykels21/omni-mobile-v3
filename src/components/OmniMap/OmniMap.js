import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

export default function OmniMap(location) {
  const [region, setRegion] = useState({});

  const getInitialState = () => {
    const region = {
      longitude: location.location.longitude,
      latitude: location.location.latitude,
      longitudeDelta: 0.10,
      latitudeDelta: 0.10
    }
    setRegion(region)
  }

  useEffect(() => {
    getInitialState()
  }, [])
  
  const zoomInToHotspot = (coordinate) => {
    setRegion({
      ...coordinate,
      longitudeDelta: 0.04,
      latitudeDelta: 0.04
    })
  }

  const onRegionChange = (region) => {
    setRegion(region)
  }

  const hotspot = {
    coordinate: {
      longitude: -77.4329,
      latitude: 37.5352
    },
    radius: 100,
    fillColor: 'rgba(255, 10, 10, 0.27)'
  }



  return (
    <View style={styles.container}>
      {region.latitude && region.longitude &&
      <MapView 
        showsUserLocation={true}
        region={region}
        style={styles.map}
        showsPointsOfInterest={false}
        onRegionChangeComplete={onRegionChange}
      >
      
    {(region.latitudeDelta > 0.09) && 
      <Marker 
        coordinate={hotspot.coordinate} 
        onPress={() => {zoomInToHotspot(hotspot.coordinate)}} 
        anchor={{x: 0.5,  y: 0.5}}
      >
        <View style={{backgroundColor: hotspot.fillColor, padding: hotspot.radius, borderRadius: 1000}}>
        </View>
      </Marker>
    } 
      </MapView>
    }
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