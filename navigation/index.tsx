import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import { LoginScreen, NotFoundScreen } from "../screen";
import {RootStackParamList} from "../types/types";


const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={'Root'} component={MainTabNavigator}/>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'NotFound'} component={NotFoundScreen} />
    </Stack.Navigator>
  )
};

export default Navigation;
