import React from 'react';
import HomeLayout from '../../components/HomeLayout';
import Text from '../../components/Text';
import compose from '../../helpers/compose';
import { inject, observer } from 'mobx-react/native';
import { View } from 'react-native';
const LearningScreen = ({ translationStore }) => {
    return (
        <HomeLayout>
            {Object.values(translationStore.translationData).map(({ sourceWord, targetWord }, i) => {
                return (
                    <View key={sourceWord.id}>
                        <Text color="black" size="80">
                            {sourceWord.value + ' - '}
                        </Text>
                        <Text size="80">{targetWord.value}</Text>
                    </View>
                );
            })}
        </HomeLayout>
    );
};

export default compose(
    inject('translationStore'),
    observer
)(LearningScreen);
