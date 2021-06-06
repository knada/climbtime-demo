import React from 'react'
import {
    ScrollView,
    StyleSheet,
    ImageBackground,
    Text,
    View,
} from 'react-native'
import Input from '../components/Input/Input'
import bg from '../assets/images/register-bg.png'

export default function RegisterScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={bg} style={styles.bg}>
                <View style={styles.brand}>
                    <Text style={styles.brandText}>Climb</Text>
                    <Text style={styles.brandText}>Time</Text>
                </View>
                <View style={styles.authForm}>
                    <Input label="Name" />
                    <Input label="Username" />
                    <Input label="Email" />
                    <Input label="Password" />
                    <Input label="Town/City/Zip code" />
                    <Input label="Gym Preference" />
                    <View>
                        <Text style={styles.authSubmit}>Sign Up</Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    brand: {
        marginTop: 10,
        width: 184,
        height: 99,
        borderWidth: 3,
        borderRadius: 24,
        borderColor: '#BDBDBD',
        justifyContent: 'center',
    },
    brandText: {
        fontSize: 28,
        fontFamily: 'MontserratBlack',
        color: '#F5C669',
        textAlign: 'center',
    },
    introContainer: {
        margin: 30,
    },
    introText: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 18,
        textAlign: 'center',
    },
    authForm: {},
    authInputContainer: {
        marginTop: 10,
        marginBottom: 15,
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
    authInputLabel: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        color: '#BDBDBD',
        margin: 0,
    },
    authInput: {
        fontSize: 14,
        fontFamily: 'MontserratBold',
        height: 40,
    },
    authSubmit: {
        margin: 10,
        fontSize: 20,
        fontFamily: 'MontserratBold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#000000',
    },
})
