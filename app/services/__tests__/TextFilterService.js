import TranslationService from 'services/TranslationService';
import TextFilterService from 'services/TextFilterService';

describe('TranslationService', () => {
    const textFilterService = new TextFilterService({});

    it('should return empty array when input is null', () => {
        const result = textFilterService.filterTranslationList(null);
        expect(result).toEqual([]);
    });

    it('should return empty array when input is pair is the same', () => {
        const wordPair = [{ value: 'the same' }, { value: 'the same' }];
        const result = textFilterService.filterTranslationList([wordPair]);
        expect(result).toEqual([]);
    });

    it('should return empty array when input is pair is the same, but in different register', () => {
        const wordPair = [{ value: 'THE SAME' }, { value: 'the same' }];
        const result = textFilterService.filterTranslationList([wordPair]);
        expect(result).toEqual([]);
    });

    it('should return empty array when input word pair duplicated', () => {
        const wordPair = [{ value: 'hello' }, { value: 'привет' }];
        const wordPairCopy = [...wordPair];
        const result = textFilterService.filterTranslationList([wordPair, wordPairCopy]);
        expect(result).toEqual([wordPair]);
    });
});
