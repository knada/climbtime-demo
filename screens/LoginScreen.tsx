import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input/Input'
import bg from '../assets/images/welcome-signin-bg.png'

// const bg = { uri: '../assets/images/register-bg.png' }

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg}>
                <View style={styles.brand}>
                    <Text style={styles.brandText}>Climb Time</Text>
                </View>
                <View style={styles.introContainer}>
                    <Text style={styles.introText}>Hello Climber,</Text>
                    <Text style={styles.introText}>
                        Sign in to your account
                    </Text>
                </View>
                <View style={styles.authForm}>
                    <Input label="Email" />
                    <Input label="Password" password={true} />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.authForgot}>Forgot your Password?</Text>
                </View>
                <View>
                    <Text
                        style={styles.authSubmit}
                        onPress={() => navigation.navigate('Home')}
                    >
                        Sign In
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>
                        Don&apos;t have an account?{' '}
                        <Text
                            style={[styles.bottomText, styles.bottomLink]}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Create
                        </Text>
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5F5F5',
        // alignItems: 'center',
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    brand: {
        marginTop: 45,
        width: 268,
        height: 144,
        borderWidth: 3,
        borderRadius: 24,
        borderColor: '#BDBDBD',
        justifyContent: 'center',
    },
    brandText: {
        fontSize: 48,
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
    forgotContainer: {
        paddingTop: 5,
        paddingRight: 20,
        alignSelf: 'stretch',
    },
    authForgot: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 12,
        color: '#9A9A9A',
        textAlign: 'right',
    },
    authSubmit: {
        margin: 20,
        padding: 10,
        fontSize: 20,
        fontFamily: 'MontserratBold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#000000',
    },
    bottom: {
        marginTop: 50,
    },
    bottomText: {
        fontSize: 18,
        fontFamily: 'MontserratSemiBold',
        color: '#9A9A9A',
    },
    bottomLink: {
        fontFamily: 'MontserratBold',
        textDecorationLine: 'underline',
        color: '#000000',
    },
})
