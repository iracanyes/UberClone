import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  ScrollView,
  useColorScheme,
  StyleSheet,
  Image,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import styles from "./styles";
import {HomeMap, HomeSearch, MapNotification} from "../../component";

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      edges={["right", "bottom", "left"]}
      style={styles.container}
    >
      <ScrollView>
        <HomeMap />
        <HomeSearch />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
