/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import Navigation from "./src/navigation";


Amplify.configure(config);

const App: () => React.ReactElement<any> = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}
    >
      <StatusBar
        barStyle={
          useColorScheme() === "dark"
            ? "light-content"
            : "dark-content"
        }
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {},
});

export default App;
