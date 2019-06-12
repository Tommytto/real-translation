// @flow
import React, { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

import useService from 'logic/hooks/use-service';
import shuffleArray from 'helpers/shuffleArray';
import StringBlock from 'components/Learning/shared/StringBlock';
import Spacing from 'style/Spacing';

type TProps = {};

export default function BlockExercise({ exerciseState, answer, check, task, lang }: TProps) {
    const [selected, setSelected] = useState();
    if (!task) {
        return null;
    }
    const taskGenerator = useService('taskGeneratorService');
    const taskVariants = useMemo(() => {
        const wrongAnswers = taskGenerator.getRandomSet({ lang, count: 3, except: answer.value });
        return shuffleArray([...wrongAnswers, answer]);
    }, [task]);

    function onPress(item) {
        check(item.value);
        setSelected(item.id);
    }

    return (
        <View style={styles.container}>
            {taskVariants.map((item) => (
                <View key={item.id} style={styles.item}>
                    <StringBlock
                        selected={selected === item.id}
                        answer={answer.value}
                        onPress={() => onPress(item)}
                        state={exerciseState}
                        string={item.value}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    item: {
        marginRight: Spacing.s3,
        marginBottom: Spacing.s3
    }
});
