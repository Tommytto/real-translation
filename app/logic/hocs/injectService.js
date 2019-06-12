// @flow
import * as React from 'react';
import type { TServiceConfig, TServiceName } from 'di/di';
import { ServiceContext } from 'di/di';

export default function injectService<ServiceKey: TServiceName>(serviceName: TServiceName) {
    return <Config: {}>(Component: React.AbstractComponent<Config>) =>
        function WrapperComponent(props: $Diff<Config, { [ServiceKey]: $ElementType<TServiceConfig, ServiceKey> }>) {
            return (
                <ServiceContext.Consumer>
                    {(context) => <Component {...{ [serviceName]: context[serviceName] }} {...props} />}
                </ServiceContext.Consumer>
            );
        };
}
