import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <TextInput />
    </SafeAreaView>
  );
};

export default SearchScreen;
