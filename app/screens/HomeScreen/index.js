// @flow
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import {inject, observer} from "mobx-react/native";
import compose from "../../helpers/compose";

function HomeScreen({ navigation, translationStore }) {
    return (
        <View>
            <Text>i am a HomeScreen</Text>
            {
                Object.values(translationStore.translationData).map(({sourceWord}) => {
                    return <Text>{sourceWord.value}</Text>
                })
            }
            <Button onPress={() => navigation.navigate('TextRecognizer')}>camera</Button>
        </View>
    );
}

export default compose(
    inject('translationStore'),
    observer
)(HomeScreen)
