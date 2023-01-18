import React, { useEffect } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

const handlePress = (tabName) => {
    console.log(tabName + ' Pressed')
}

export default function OmniMap(location) {
    useEffect(() => {
        setTimeout(() => {
				console.log('SENDING LOCATION DATA TO JS CLIENT...')
				console.log('Lat: ', location.location.latitude)
				console.log('Long: ', location.location.longitude)
            this.webref.postMessage({
                longitude: location.location.longitude,
                latitude: location.location.latitude,
            })
        }, 1000)
    }, [location])

    return (
        <View style={styles.container}>
            <View style={styles.topNavContainer}>
                <Pressable
                    onPress={() => handlePress('For You')}
                    style={styles.topTabButton}
                >
                    <Text style={styles.topTabText}>For You</Text>
                </Pressable>
                <Pressable
                    onPress={() => handlePress('Nearby')}
                    style={styles.topTabButton}
                >
                    <Text style={styles.topTabText}>Nearby</Text>
                </Pressable>
            </View>
            <WebView
                style={styles.map}
                source={{ uri: 'http://localhost:3000/map' }}
                ref={(r) => (this.webref = r)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topNavContainer: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 80,
        width: Dimensions.get('window').width,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    topTabButton: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topTabText: {
        fontSize: '20px',
        fontWeight: '700',
    },
})
