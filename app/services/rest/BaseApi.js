// @flow
import type { ITransport } from 'services/rest/TransportApi';

export default class BaseApi {
    transport: ITransport;

    constructor({ transport }: { transport: ITransport }) {
        this.transport = transport;
    }

    requestWithJson(url: string, customSettings: { headers: Headers, body: Object }) {
        const defaultSettings = {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customSettings.body)
        };
        if (customSettings.headers) {
            defaultSettings.headers = {
                ...defaultSettings.headers,
                ...customSettings.headers
            };
        }

        return this.transport.request(url, {
            ...defaultSettings,
            ...customSettings
        });
    }
}
