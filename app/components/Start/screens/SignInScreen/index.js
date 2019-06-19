// @flow
import React, { useState } from 'react';
import Button from '../../../shared/Button';
import LoginLayout from '../../shared/LoginLayout';
import Text from '../../../shared/Text';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import TextInput from '../../../shared/TextInput';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import useService from 'logic/hooks/use-service';
import { observer } from 'mobx-react';
import compose from 'helpers/compose';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

function SignInScreen({ navigation }: TProps) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const authService = useService('authService');

    async function onSubmit() {
        const success = await authService.auth({
            email,
            password
        });
        if (success) {
            navigation.navigate('Home');
        }
    }

    function renderPreloader() {
        if (authService.getIsLoading()) {
            return <ActivityIndicator style={{ position: 'absolute' }} size="large" color="#0000ff" />;
        }

        return null;
    }

    return (
        <LoginLayout>
            <View style={style.content}>
                {renderPreloader()}
                <Text size="40" weight="bold">
                    Sign in
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
                    textContentType="newPassword"
                    label="Password"
                    placeholder="Type password"
                />
            </View>
            <Button onPress={onSubmit}>Login</Button>
        </LoginLayout>
    );
}

const style = StyleSheet.create({
    content: {
        flex: 1
    }
});

export default compose(observer)(SignInScreen);
