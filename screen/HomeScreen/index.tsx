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
        <View>
          <Image
            source={{ uri: "https://loremflickr.com/1200/960" }}
            style={styles.map}
          />
        </View>
        <View>
          <Text>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
