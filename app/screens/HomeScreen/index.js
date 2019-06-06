// @flow
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Button from '../../components/Button';
import HomeLayout from '../../components/HomeLayout';
import Text from '../../components/Text';
import ExerciseBlockList from "../../components/ExerciseBlockList";
import type {NavigationScreenProp} from 'react-navigation'

type TProps = {
    navigation: NavigationScreenProp,
}

function HomeScreen({ navigation }: TProps) {
    return (
        <HomeLayout>
            <View style={styles.content}>
                <Text size="60" style={styles.welcome}>
                    Hello, User, welcome back to classroom!
                </Text>
                <ExerciseBlockList/>
                <TouchableHighlight style={styles.wrapper} onPress={() => navigation.navigate('Learning')}>
                    <Image style={styles.category} resizeMode={"contain"} source={require('./img/category.png')} />
                </TouchableHighlight>
            </View>
            <View>
                <Button
                    style={styles.cameraBtn}
                    icon
                    theme="primary"
                    onPress={() => navigation.navigate('TextRecognizer')}
                >
                    camera
                </Button>
            </View>
        </HomeLayout>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    wrapper: {
        flex: 1,
    },
    welcome: {},
    category: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    cameraBtn: {
        position: 'absolute',
        right: 0,
        bottom: 0
    }
});

export default HomeScreen
