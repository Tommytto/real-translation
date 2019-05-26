// @flow
import { stringify } from 'query-string';

export default class TranslateApi {
    translate = async (text) => {
        const apiKey = 'trnsl.1.1.20190521T151257Z.c9c0a65f9789f5d7.e6b27d05af308c18fbfb63e82134e89f82c35ab9';
        const lang = 'en-ru';
        const postData = {
            text,
            lang,
            key: apiKey
        };
        const data = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?${stringify(postData)}`);
        const response = await data.json();
        return response.text;
    };
}
