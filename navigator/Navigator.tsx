import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();
const {Screen, Navigator} = Stack;

export const AppNavigator = (): React.ReactElement => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);
