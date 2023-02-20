import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet } from 'react-native'
import MapDashboard from './src/screens/MapDashboard'
import Profile from './src/screens/Profile'
import Login from './src/screens/Login'

import 'react-native-gesture-handler'

const MainApp = createBottomTabNavigator()
const LoginStack = createStackNavigator()
const queryClient = new QueryClient()

export default function App() {
    function MainApp() {
        return (
            <MainApp.Navigator
                initialRouteName="Dashboard"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <MainApp.Screen
                    options={{
                        title: 'Map',
                    }}
                    name="Dashboard"
                    component={MapDashboard}
                />
                <MainApp.Screen
                    options={{
                        title: 'Profile',
                    }}
                    name="Profile"
                    component={Profile}
                />
            </MainApp.Navigator>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <LoginStack.Navigator initialRouteName="Login">
                    <LoginStack.Screen name="Login" component={Login} />
                    <LoginStack.Screen name="MainApp" component={MainApp} />
                </LoginStack.Navigator>
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
