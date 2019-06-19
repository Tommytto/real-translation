// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../../shared/Button';
import HomeLayout from '../../../shared/HomeLayout';
import Text from '../../../shared/Text';
import ExerciseBlockList from '../../components/ExerciseBlockList';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import CategoryHeader from '../../shared/CategoryHeader';
import Spacing from 'style/Spacing';
import PlatformHelpers from 'helpers/platform';

type TProps = {
    navigation: NavigationScreenProp<NavigationState>
};

function HomeScreen({ navigation }: TProps) {
    function renderButton() {
        const commonProps = {
            style: styles.cameraBtn,
            onPress: () => navigation.navigate('TextRecognizer')
        };
        if (PlatformHelpers.isIOS) {
            return (
                <Button theme="outlinePrimary" {...commonProps}>
                    Camera
                </Button>
            );
        }
        return (
            <Button icon {...commonProps}>
                Camera
            </Button>
        );
    }
    return (
        <HomeLayout>
            <View style={styles.content}>
                <Text size="50" style={styles.welcome}>
                    Hello, User, welcome back to classroom!
                </Text>
                <Button style={styles.randomLearning}>Start random learning!</Button>
                <CategoryHeader>Exercises</CategoryHeader>
                <ExerciseBlockList />
            </View>
            <View>{renderButton()}</View>
        </HomeLayout>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    wrapper: {
        flex: 1
    },
    randomLearning: {
        marginBottom: Spacing.s7
    },
    welcome: {
        marginBottom: Spacing.s2
    },
    cameraBtn: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
});

export default HomeScreen;
