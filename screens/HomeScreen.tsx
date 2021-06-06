import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.text}>Welcome John Doe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratBlack',
        fontSize: 40,
    },
})
