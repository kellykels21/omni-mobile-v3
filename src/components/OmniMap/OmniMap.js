import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function OmniMap(location) {

  console.log(location)
  const region = {
    longitude: location.location.location.coords.longitude,
    latitude: location.location.location.coords.latitude,
    longitudeDelta: 0.35,
    latitudeDelta: 0.35
  }
  return (
    <View style={styles.container}>
      <MapView 
        showsUserLocation={true}
        region={region}
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