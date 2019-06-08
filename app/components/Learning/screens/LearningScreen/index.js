// @flow
import React, { useMemo } from 'react';
import HomeLayout from '../../../shared/HomeLayout';
import { View, StyleSheet } from 'react-native';
import WordCard from '../../shared/WordCard';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import TextInput from '../../../shared/TextInput';
import useService from 'logic/hooks/use-service';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

const LearningScreen = ({ navigation }: TProps) => {
    const translationService = useService('translationRandomizer');
    const translation = useMemo(translationService.getRandomTranslation);
    return (
        <HomeLayout>
            <View>
                <WordCard string={translation.sourceWord.value} />
            </View>
            <TextInput placeholder={translation.targetWord.value} />
        </HomeLayout>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default LearningScreen;
