import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>i am a HomeScreen</Text>
            <Button onPress={() => navigation.navigate('TextRecognizer')}>camera</Button>
        </View>
    );
}
