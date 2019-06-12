import shuffleArray from 'helpers/shuffleArray';

describe('shuffleArray', () => {
    it('should shuffle', () => {
        const toShuffle = [1, 2, 3];
        const N = 15;
        let equalityCount = 0;
        for (let i = 0; i < N; i++) {
            const result = shuffleArray(toShuffle);
            const isEqual = result.every((item, index) => item === toShuffle[index]);
            equalityCount += Number(isEqual);
        }
        expect(equalityCount).toBeLessThan(N);
    });
});
