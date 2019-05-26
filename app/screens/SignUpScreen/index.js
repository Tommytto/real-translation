// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import LoginLayout from '../../components/LoginLayout';
import Text from "../../components/Text";

export default function SignUpScreen({ navigation }) {
    return (
        <LoginLayout>
            <View style={style.content}>
                <Text size="40" bold>
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
