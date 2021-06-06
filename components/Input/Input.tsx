import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ label = '', password = false }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput style={styles.input} secureTextEntry={password} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        marginBottom: 15,
        paddingTop: 5,
        paddingLeft: 15,
        backgroundColor: 'white',
        width: 345,
        borderRadius: 24,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 24,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        elevation: 4,
        justifyContent: 'center',
    },
    inputLabel: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        color: '#BDBDBD',
        margin: 0,
        paddingLeft: 5,
    },
    input: {
        textAlignVertical: 'top',
        fontSize: 14,
        fontFamily: 'MontserratBold',
        paddingLeft: 3,
    },
})

export default Input
