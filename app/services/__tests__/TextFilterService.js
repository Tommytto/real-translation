import TranslationService from 'services/TranslationService';

describe('TranslationService', () => {
    const textRecognizerService = new TranslationService({});

    it('should return empty array when input is null', () => {
        const result = textRecognizerService.filterTranslationList(null);
        expect(result).toEqual([]);
    });

    it('should return empty array when input is pair is the same', () => {
        const wordPair = [{ value: 'the same' }, { value: 'the same' }];
        const result = textRecognizerService.filterTranslationList([wordPair]);
        expect(result).toEqual([]);
    });

    it('should return empty array when input is pair is the same, but in different register', () => {
        const wordPair = [{ value: 'THE SAME' }, { value: 'the same' }];
        const result = textRecognizerService.filterTranslationList([wordPair]);
        expect(result).toEqual([]);
    });

    it('should return empty array when input word pair duplicated', () => {
        const wordPair = [{ value: 'hello' }, { value: 'привет' }];
        const wordPairCopy = [...wordPair];
        const result = textRecognizerService.filterTranslationList([wordPair, wordPairCopy]);
        expect(result).toEqual([wordPair]);
    });
});
