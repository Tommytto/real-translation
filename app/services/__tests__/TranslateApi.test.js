import TranslateApi from 'services/TranslateApi';

function getTransportMock(data) {
    return {
        request: () => new Promise((resolve) => resolve(data))
    };
}

const text = ['hello', 'world'];
const positiveMock = getTransportMock({
    text
});

const negativeMock = getTransportMock(null);

describe('TranslateApi service', () => {
    it('translate func return string array', async () => {
        const translateApi = new TranslateApi({ transport: positiveMock });
        expect.assertions(1);
        const data = await translateApi.translate(['random', 'text']);
        expect(data).toEqual(text);
    });

    it('should return [] for wrong input', function() {
        const translateApi = new TranslateApi({ transport: positiveMock });
        expect.assertions(1);

        return expect(translateApi.translate(null)).resolves.toBe(text);
    });

    it('should return [] for wrong transport output', function() {
        const translateApi = new TranslateApi({ transport: negativeMock });
        expect.assertions(1);
        return expect(translateApi.translate(text)).resolves.toBeInstanceOf(Array);
    });
});
