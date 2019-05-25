import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

function SignInScreen({ navigation }) {
    return (
        <View>
            <Text>it me</Text>
            <Button onPress={() => navigation.navigate('App')}>Login</Button>
        </View>
    );
}
export default SignInScreen;
