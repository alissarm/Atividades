import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Router} from './src/routes/Router'

const App = () => {
  return (
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  );
};

export default App;
