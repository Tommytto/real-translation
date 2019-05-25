// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/Button';

export default function HelloScreen({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.contentContainer}>
                <Text>Some text</Text>
            </View>
            <View style={style.buttonContainer}>
                <Button onPress={() => navigation.navigate('SignIn')}>Login</Button>
                <Button onPress={() => navigation.navigate('SignUp')}>Sign up</Button>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: '100%'
    },
    buttonContainer: {},
    contentContainer: {
        flexGrow: 1
    }
});
