import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import WebView from 'react-native-webview'

export default function OmniMap(location) {
    return (
		<View style={styles.container}>
        <WebView
		  		style={styles.map}
            source={{ uri: 'http://localhost:3000/map' }}
        />
		</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
