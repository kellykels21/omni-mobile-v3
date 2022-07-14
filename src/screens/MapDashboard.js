import { StyleSheet, View } from 'react-native';
import OmniMap from '../components/OmniMap/OmniMap.js';

export default function MapDashboard(location) {
  return (
    <View style={styles.container}>
      <OmniMap location={location.location.coords}></OmniMap>
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
