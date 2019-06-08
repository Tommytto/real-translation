// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from '../../../shared/TextInput';
import Button from '../../../shared/Button';
import LoginLayout from '../../shared/LoginLayout';
import Text from '../../../shared/Text';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

export default function SignUpScreen({ navigation }: TProps) {
    return (
        <LoginLayout>
            <View style={style.content}>
                <Text size="40" weight="bold">
                    Sign up
                </Text>
                <TextInput textContentType="emailAddress" label="Email" autoFocus placeholder="Type Email" />
                <TextInput secureTextEntry textContentType="password" label="Password" placeholder="Type password" />
            </View>
            <Button onPress={() => navigation.navigate('App')}>Submit</Button>
        </LoginLayout>
    );
}

const style = StyleSheet.create({
    content: {
        flex: 1
    }
});
