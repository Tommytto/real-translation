// @flow
import { stringify } from 'query-string';
import BaseApi from 'services/rest/BaseApi';

export default class TranslateApi extends BaseApi {
    translate = async (text: string[]): Promise<string[]> => {
        //dict.1.1.20190611T170108Z.bb4196137534376e.f1605dcd03863251ac3440643489109c4a59b6df
        const apiKey = 'trnsl.1.1.20190521T151257Z.c9c0a65f9789f5d7.e6b27d05af308c18fbfb63e82134e89f82c35ab9';
        const lang = 'en-ru';
        const postData = {
            text,
            lang,
            key: apiKey
        };
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?${stringify(postData)}`;
        const response = await this.transport.request<{ text: string[] }>(url);
        return response && Array.isArray(response.text) ? response.text : [];
    };
}
