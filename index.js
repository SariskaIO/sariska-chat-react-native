/**
 * @format
 */


import 'react-native-gesture-handler';
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SocketProvider from './src/api/socket/SocketProvider';
import { NavigationContainer } from '@react-navigation/native';

export const MainApp = () => {
    return (

    <NavigationContainer>
            <SocketProvider>
                <App />
            </SocketProvider>
    
    </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => MainApp);
