
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import MapDashboard from './src/screens/MapDashboard';

const Drawer = createDrawerNavigator()
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Dashboard">
          <Drawer.Screen options={{ 
            title: 'Omni Map',
            headerStyle: {
            backgroundColor: 'transparent'
          }}} name="Dashboard" component={MapDashboard} />
        </Drawer.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
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
