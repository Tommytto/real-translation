// @flow
import React from 'react';
import { Button as RNButton } from 'react-native';

export default function Button({ children, ...props }) {
    return <RNButton title={children} {...props} />;
}
