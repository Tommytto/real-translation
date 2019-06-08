// @flow
import React from 'react';
import Button from '../../../shared/Button';
import LoginLayout from '../../shared/LoginLayout';
import Text from '../../../shared/Text';
import { View, StyleSheet } from 'react-native';
import TextInput from "../../../shared/TextInput";
import type {NavigationScreenProp, NavigationState} from "react-navigation";

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

function SignInScreen({ navigation }: TProps) {
    return (
        <LoginLayout>
            <View style={style.content}>
                <Text size="40" weight="bold">
                    Sign in
                </Text>
                <TextInput textContentType="emailAddress" label="Email" autoFocus placeholder="Type Email"/>
                <TextInput secureTextEntry textContentType="newPassword" label="Password" placeholder="Type password"/>
            </View>
            <Button onPress={() => navigation.navigate('App')}>Login</Button>
        </LoginLayout>
    );
}

const style = StyleSheet.create({
    content: {
        flex: 1
    }
});

export default SignInScreen;
