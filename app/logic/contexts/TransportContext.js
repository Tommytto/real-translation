// @flow
import React from "react";

import TranslateApi from "../../services/TranslateApi";

const transportData = {
    translationApi: new TranslateApi()
};
const TransportContext = React.createContext<typeof transportData>(transportData);
export default TransportContext;
export {transportData}