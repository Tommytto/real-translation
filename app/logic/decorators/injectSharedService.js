// @flow
import { sharedServices } from 'di/shared-services';
import type { TSharedServicesName } from 'di/shared-services';

export default function injectSharedService(serviceNameList: TSharedServicesName) {
    return (klass) => {
        // eslint-disable-next-line no-param-reassign
        serviceNameList.forEach((serviceName) => {
            // eslint-disable-next-line no-param-reassign
            klass.prototype[`_${serviceName}`] = sharedServices[serviceName];
        });
        return klass;
    };
}
