import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import {PreviousDestination, SearchHeader, SearchInputs} from "../../components";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.light.background}
        barStyle={"black"}
        style={styles.statusBar}
      />
      <SearchHeader />
      <SearchInputs />
      <PreviousDestination />
    </SafeAreaView>
  );
};

export default SearchScreen;
