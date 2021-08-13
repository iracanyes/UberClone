import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HelpScreen,
  MakeMoneyScreen,
  MessagesScreen,
  SettingsScreen,
  UserTripsScreen,
  WalletScreen,
} from "../screens";
import MainTabNavigator from "./MainTabNavigator";
import Colors from "../constants/Colors";
import { Image } from "react-native";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName={"Main"}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          //backgroundColor: "black",
          paddingTop: 0,
          borderTopWidth: 0,
        },
        drawerContentContainerStyle: {
          backgroundColor: "red",
          marginTop: 0,
        },
        drawerContentStyle: {
          backgroundColor: "blue",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={"Main"} component={MainTabNavigator} />
      <Drawer.Screen name={"Messages"} component={MessagesScreen} />
      <Drawer.Screen name={"MakeMoney"} component={MakeMoneyScreen} />
      <Drawer.Screen name={"YourTrips"} component={UserTripsScreen} />
      <Drawer.Screen name={"Help"} component={HelpScreen} />
      <Drawer.Screen name={"Wallet"} component={WalletScreen} />
      <Drawer.Screen name={"Settings"} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerMenu;
