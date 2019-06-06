// @flow
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from '../../components/Button';
import COLOR from '../../style/colors';
import Typography from '../../style/typography';
import Spacing from '../../style/spacing';
import LoginLayout from '../../components/LoginLayout';

type TProps = {};

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
                <Button style={style.buttonPrev} onPress={() => navigation.navigate('SignIn')}>Login</Button>
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
        color: COLOR.WHITE,
        marginBottom: '10%',
        textAlign: 'center'
    },
    aboutText: {
        textAlign: 'center',
        color: COLOR.WHITE,
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
