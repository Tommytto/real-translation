import React from 'react';
import { Text, Button, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import compose from '../../helpers/compose';

function AuthLoadingScreen({ authStore }) {
    return (
        <View>
            <Text>i am a AuthLoadingScreen {authStore.name} </Text>
            <Button
                title="hello world"
                onPress={() => {
                    authStore.setName('Igor');
                }}
            />
        </View>
    );
}

export default compose(
    inject('authStore'),
    observer
)(AuthLoadingScreen);
