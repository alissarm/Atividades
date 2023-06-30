import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { index } from '../screens/index';
import { tela2 } from '../screens/tela2';
import { tela3 } from '../screens/tela3';

const Drawer = createDrawerNavigator();

export function Router() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={index} />
      <Drawer.Screen name="Login" component={tela2} />
      <Drawer.Screen name="Template" component={tela3} />
    </Drawer.Navigator>
  );
}