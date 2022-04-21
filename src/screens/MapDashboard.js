import { StyleSheet, View } from 'react-native';
import OmniMap from '../components/OmniMap';

export default function MapDashboard() {
  return (
    <View style={styles.container}>
      <OmniMap></OmniMap>
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
