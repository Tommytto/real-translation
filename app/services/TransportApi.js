// @flow
export interface ITransport {
    +request: <GResponse>(string, {} | void) => Promise<Response>;
}
export default class TransportApi implements ITransport {
    defaultSettings = {
        method: 'GET'
    };
    async request<GExpected>(url: string, customSettings: {} | void = {}): Promise<GExpected> {
        const response = await fetch(url, {
            ...this.defaultSettings,
            ...customSettings
        });
        return response.json();
    }
}
