// @flow
import React, { useContext } from 'react';
import type { TService } from '../../di';
import {ServiceContext} from '../../di';


//TODO fix flow error
export default function useService<GServiceName: string>(
    serviceName: GServiceName
): $ElementType<TService, GServiceName> {
    return useContext(ServiceContext)[serviceName];
}
