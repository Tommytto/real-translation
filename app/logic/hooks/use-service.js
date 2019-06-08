// @flow
import { useContext } from 'react';
import type { TServiceConfig } from '../../di';
import { ServiceContext } from '../../di';

// TODO fix flow error
export default function useService<GServiceName: string>(
    serviceName: GServiceName
): $ElementType<TServiceConfig, GServiceName> {
    return useContext(ServiceContext)[serviceName];
}
