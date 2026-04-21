import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import LoginScreen from '../screen/LogInScreen';
import WorkOutScreen from '../screen/WorkOutScreen';

type Props = {};

const Stack = createNativeStackNavigator();
const AppNavigation = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="WorkOutScreen" component={WorkOutScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
