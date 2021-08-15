/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  PermissionsAndroid,
} from "react-native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import Navigation from "./src/navigation";

Amplify.configure(config);

const App: () => React.ReactElement<any> = () => {
  const androidPermissions = async () => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permission d'accès à votre localisation précise",
          message:
            "Nous désirons accéder à votre localisation précise afin de vous proposer les Uber cars les plus proches.",
          buttonNegative: "Demander ultérieurement",
          buttonNeutral: "Annuler",
          buttonPositive: "Ok",
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Do smthg
        console.log("Fine Geolocation enabled!");
      } else {
        // Close App
        console.warn("Fine Geolocation denied!");
      }
    } catch (e) {
      console.warn(
        "\n\nPermissionsAndroid.request ACCESS_FINE_LOCATION\n",
        e,
      );
    }
  };

  useEffect(() => {
    androidPermissions();
  }, []);
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {/*
        <StatusBar
          barStyle={
            useColorScheme() === "dark"
              ? "light-content"
              : "dark-content"
          }
          backgroundColor={"transparent"}
          translucent={true}
        />
      */}

      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {},
});

export default App;
