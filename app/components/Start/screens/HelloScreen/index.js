// @flow
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from '../../../shared/Button';
import Color from 'style/Color';
import Typography from 'style/Typography';
import Spacing from 'style/Spacing';
import LoginLayout from '../../shared/LoginLayout';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

export default function HelloScreen({ navigation }: TProps) {
    return (
        <LoginLayout>
            <View style={style.contentContainer}>
                <Image resizeMode={'contain'} style={style.img} source={require('./img/hello3.png')} />
                <Text style={[Typography.text40, style.welcomeText]}>Welcome to Lingvision!</Text>
                <Text style={[Typography.text60, style.aboutText]}>
                    Translate everything you want in action with your camera. And instantly learn it here
                </Text>
            </View>
            <View style={style.buttonContainer}>
                <Button style={style.buttonPrev} onPress={() => navigation.navigate('SignIn')}>
                    Login
                </Button>
                <Button theme="primary" onPress={() => navigation.navigate('SignUp')}>
                    Sign up
                </Button>
            </View>
        </LoginLayout>
    );
}

const style = StyleSheet.create({
    welcomeText: {
        fontWeight: 'bold',
        color: Color.WHITE,
        marginBottom: '10%',
        textAlign: 'center'
    },
    aboutText: {
        textAlign: 'center',
        color: Color.WHITE,
        marginBottom: '30%'
    },
    buttonPrev: {
        marginBottom: Spacing.s3
    },
    img: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    buttonContainer: {},
    contentContainer: {
        flexGrow: 1
    }
});
