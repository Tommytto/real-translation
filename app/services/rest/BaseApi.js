// @flow
import type { ITransport } from 'services/rest/TransportApi';

export default class BaseApi {
    transport: ITransport;

    constructor({ transport }: { transport: ITransport }) {
        this.transport = transport;
    }

    requestWithJson(url: string, { body, headers, ...customSettings }: { headers: Headers, body: Object }) {
        const defaultSettings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        if (headers) {
            defaultSettings.headers = {
                ...defaultSettings.headers,
                ...headers
            };
        }

        const a = {
            ...defaultSettings,
            ...customSettings
        };
        return this.transport.request(url, {
            ...defaultSettings,
            ...customSettings
        });
    }
}
