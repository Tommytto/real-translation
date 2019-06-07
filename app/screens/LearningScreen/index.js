// @flow
import React from 'react';
import HomeLayout from '../../components/HomeLayout';
import compose from '../../helpers/compose';
import {View, StyleSheet} from "react-native";
import { inject, observer } from 'mobx-react/native';
import WordCard from "../../components/WordCard";
import type {NavigationScreenProp, NavigationState} from "react-navigation";
import TextInput from "../../components/TextInput";

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
}

const LearningScreen = ({ navigation }: TProps) => {
    console.log(navigation);
    return (
        <HomeLayout>
            <View>
                <WordCard string="hello"/>
            </View>
            <TextInput placeholder="sdsf"/>
        </HomeLayout>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default compose(
    inject('translationListStore'),
    observer
)(LearningScreen);
