
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import MapDashboard from './src/screens/MapDashboard';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Dashboard">
        <Drawer.Screen options={{ 
          title: 'Omni Map',
          headerStyle: {
          backgroundColor: 'transparent'
        }}} name="Dashboard" component={MapDashboard} />
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
