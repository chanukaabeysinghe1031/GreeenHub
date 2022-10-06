import React from 'react';
import {Text,View} from 'react-native';
import Navigation from './src/components/Navigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const App = () => {
    return(
        <Navigation/>
    );
}

export default App;