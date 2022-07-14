import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default function OmniMap(location) {
  const region = {
    longitude: location.location.longitude,
    latitude: location.location.latitude,
    longitudeDelta: 0.10,
    latitudeDelta: 0.10
  }

  return (
    <View style={styles.container}>
      <MapView 
        showsUserLocation={true}
        provider="google"
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