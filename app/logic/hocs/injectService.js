// @flow
import * as React from 'react';
import type {TService, TServiceName} from "../../di";
import {ServiceContext} from "../../di";

export default function injectService<ServiceKey: TServiceName>(serviceName: TServiceName) {
    return function<Config: {}>(Component: React.AbstractComponent<Config>) {
        return function WrapperComponent(props: $Diff<Config, {[ServiceKey]: $ElementType<TService, ServiceKey>}>) {
            return (
                <ServiceContext.Consumer>
                    {(context) => {
                        return <Component {...{[serviceName]: context[serviceName]}} {...props} />;
                    }}
                </ServiceContext.Consumer>
            );
        };
    };
}
