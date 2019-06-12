// @flow
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from '../../../shared/TextInput';
import Button from '../../../shared/Button';
import LoginLayout from '../../shared/LoginLayout';
import Text from '../../../shared/Text';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import useService from 'logic/hooks/use-service';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

export default function SignUpScreen({ navigation }: TProps) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const authService = useService('authService');

    async function onSubmit() {
        const success = await authService.register({
            email,
            password
        });
        if (success) {
            navigation.navigate('SignIn');
        }
    }

    return (
        <LoginLayout>
            <View style={style.content}>
                <Text size="40" weight="bold">
                    Sign up
                </Text>
                <TextInput
                    onChangeText={setEmail}
                    textContentType="emailAddress"
                    label="Email"
                    autoFocus
                    placeholder="Type Email"
                />
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry
                    textContentType="password"
                    label="Password"
                    placeholder="Type password"
                />
            </View>
            <Button onPress={onSubmit}>Submit</Button>
        </LoginLayout>
    );
}

const style = StyleSheet.create({
    content: {
        flex: 1
    }
});
