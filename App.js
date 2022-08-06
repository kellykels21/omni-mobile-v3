
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import GamesScreen from './src/screens/GamesScreen';
import MapDashboard from './src/screens/MapDashboard';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator useLegacyImplementation={true} initialRouteName="Dashboard">
        <Tabs.Screen options={{ 
          title: 'Map',
          headerStyle: {
          backgroundColor: 'white'
        },
        tabBarIcon: () => {
          return <Image style={styles.tabIcon} source={require('./assets/Globe.png')}></Image>
        }
        }} name="Dashboard" component={MapDashboard} />
        <Tabs.Screen options={{ 
          title: 'Games',
          headerStyle: {
          backgroundColor: 'white'
        },
        tabBarIcon: () => {
          return <Image style={styles.tabIcon} source={require('./assets/Arcade.png')}></Image>
        }
        }} name="Games" component={GamesScreen} />
      </Tabs.Navigator>
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
  tabIcon: {
    height: 30,
    width: 30
  }
});

