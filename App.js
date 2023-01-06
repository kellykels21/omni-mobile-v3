import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet } from 'react-native'
import MapDashboard from './src/screens/MapDashboard'
import Profile from './src/screens/Profile'

const Tab = createBottomTabNavigator()
const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Dashboard"
                >
                    <Tab.Screen
                        options={{
                            title: 'Map',
                        }}
                        name="Dashboard"
                        component={MapDashboard}
                    />
                    <Tab.Screen
                        options={{
                            title: 'Profile',
                        }}
                        name="Profile"
                        component={Profile}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
