import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function OmniMap(location) {

  const [region, setRegion] = useState({});
  const [keyword, setKeyword] = useState({});
  const [markers,  setMarkers] = useState([])

  const setMapLocation = () => {
    const region = {
      longitude: location.location.longitude,
      latitude: location.location.latitude,
      longitudeDelta: 0.10,
      latitudeDelta: 0.10
    }
    setKeyword('Bars')
    setRegion(region)
  }

  const getLocalPOIs = async () => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${keyword}&location=${location.location.latitude}%2C${location.location.longitude}&radius=1500&key=AIzaSyC_wOKjHc9gsCIvs4JeHiG00wez5TCaY6w`
    const { data } = await axios.get(url)
    if (data) setMarkers(data.results)
  }

  useEffect(() => {
    setMapLocation()
    getLocalPOIs()
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



  return (
    <View style={styles.container}>
      {region.latitude && region.longitude &&
      <MapView 
        showsUserLocation={true}
        region={region}
        provider="google"
        style={styles.map}
        showsPointsOfInterest={false}
        onRegionChange={onRegionChange}
      >
        {markers && markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng}}
            title={marker.title}
            description={marker.description}
          />
        ))}
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