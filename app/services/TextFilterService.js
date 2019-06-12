// @flow
import type { TWordPair } from 'services/types';

export default class TextFilterService {
    filterTranslationList(translationList: ?(TWordPair[])) {
        if (!translationList) {
            return [];
        }
        return translationList
            .map(this.valueToLower)
            .filter(this.checkNotEqual)
            .reduce(this.removeDuplicates, []);
    }

    checkNotEqual([word1, word2]: TWordPair) {
        return word1.value !== word2.value;
    }

    valueToLower([word1, word2]: TWordPair) {
        return [{ ...word1, value: word1.value.toLowerCase() }, { ...word2, value: word2.value.toLowerCase() }];
    }

    existIn(wordList: TWordPair[], [word1ToCheck, word2ToCheck]: TWordPair) {
        return wordList.some(
            ([word1, word2]) => word1ToCheck.value === word1.value && word2ToCheck.value === word2.value
        );
    }

    removeDuplicates = (result: TWordPair[], wordPair: TWordPair) => {
        const alreadyExist = this.existIn(result, wordPair);
        if (alreadyExist) {
            return result;
        }
        return [...result, wordPair];
    };
}
