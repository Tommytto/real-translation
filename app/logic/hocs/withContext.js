// @flow
import React from 'react';

export default function withContext(Context) {
    return function(Component) {
        return (props) => {
            return (
                <Context.Consumer>
                    {(context) => {
                        return <Component context={context} {...props} />;
                    }}
                </Context.Consumer>
            );
        };
    };
}
