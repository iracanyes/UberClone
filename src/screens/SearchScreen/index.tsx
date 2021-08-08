import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { Picker } from "@react-native-picker/picker";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.light.background}
        barStyle={Colors.dark.background}
      />
      <View>
      
      </View>
      <Text style={styles.title}>Search Screen</Text>
      <TextInput />
    </SafeAreaView>
  );
};

export default SearchScreen;
