import {NavigationContext} from 'react-navigation';
import {useContext} from "react";

export default function useNavigation() {
    return useContext(NavigationContext);
}