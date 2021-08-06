import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, SearchScreen } from "../screen";
import { MainTabParamList } from "../types/types";
import Colors from "../constants/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, useColorScheme } from "react-native";

const MainTab = createMaterialBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <MainTab.Navigator
      initialRouteName={"Home"}
      activeColor={
        colorScheme ? Colors[colorScheme].text : Colors.default.white.light
      }
      inactiveColor={Colors.default.white.light}
      shifting={true}
      barStyle={{
        backgroundColor: Colors.dark.background,
      }}
      labeled={true}
    >
      <MainTab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"home"}
              size={24}
              color={color}
              style={styles.bottomTabIcon}
            />
          ),
          tabBarLabel: "Home",
          tabBarColor: Colors.default.blue.dark,
        }}
      />
      <MainTab.Screen
        name={"Search"}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name={"search1"}
              size={24}
              color={color}
              style={styles.bottomTabIcon}
            />
          ),
          tabBarColor: Colors.default.red.dark,
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    fontSize: 28,
    //marginBottom: 5,
    //backgroundColor: "red",
    color: "white",
    //width: 35,
    //height: 35,
    //padding: 5,
    //justifyContent: "center",
    //alignItems: "center",
  },
  bottomTabLabel: {
    fontWeight: "bold",
  },
});

export default MainTabNavigator;
