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
<<<<<<< HEAD
import {
  PreviousDestination,
  SearchHeader,
  SearchInputs,
} from "../../components";
=======
import {PreviousDestination, SearchHeader, SearchInputs} from "../../components";
>>>>>>> aba14669f263e29c11832fd4c81445f698689b37

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
