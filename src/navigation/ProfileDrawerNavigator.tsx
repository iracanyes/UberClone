import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MakeMoneyScreen, MessagesScreen } from "../screens";

const Drawer = createDrawerNavigator();

const ProfileDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"Messages"} component={MessagesScreen} />
      <Drawer.Screen name={"MakeMoney"} component={MakeMoneyScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawerNavigator;
