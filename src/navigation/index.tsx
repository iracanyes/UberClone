import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import {ConfirmSignUpScreen, LoginScreen, NotFoundScreen, SignUpScreen} from "../screens";
import {RootStackParamList} from "../types/types";
import LinkingConfiguration from "./LinkingConfiguration";
import RgpdScreen from '../screens/RgpdScreen';
import DrawerMenu from "./DrawerMenu";
import SearchResultScreen from "../screens/SearchResultScreen";

const Navigation = () => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
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
      initialRouteName={"Login"}
    >
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={"SignUp"} component={SignUpScreen} />
      <Stack.Screen name={"ConfirmSignUp"} component={ConfirmSignUpScreen} />
      <Stack.Screen name={'Root'} component={DrawerMenu}/>
      <Stack.Screen
        name={"SearchResult"}
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Rgpd"} component={RgpdScreen} />
      <Stack.Screen name={'NotFound'} component={NotFoundScreen} />
    </Stack.Navigator>
  )
};

export default Navigation;
