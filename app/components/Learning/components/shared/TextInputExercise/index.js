// @flow
import React, {useState} from 'react';
import { View } from 'react-native';
import WordCard from 'components/Learning/shared/WordCard';
import TextInput from 'components/shared/TextInput';
import Button from 'components/shared/Button';

type TProps = {
    source: string,
    onSubmit: (string) => void
};

export default function TextInputExercise({ source, onSubmit }: TProps) {
    const [translation, setTranslation] = useState('');
    return (
        <View>
            <View>
                <WordCard string={source} />
            </View>
            <TextInput onChangeText={setTranslation} placeholder="Input text" />
            <Button onPress={() => onSubmit(translation)}>Submit</Button>
        </View>
    );
}
