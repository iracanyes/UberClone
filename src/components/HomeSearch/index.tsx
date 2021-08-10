import * as React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import Colors from "../../constants/Colors";

const HomeSearch = () => {
  const [address, setAddress] = React.useState("");

  const onChangeText = (text: string): void => {
    console.log("onChangeText", text);
  };

  const openDateTimePicker = (): void => {
    console.log("Button openDateTimePicker pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          defaultValue={address}
          placeholder={"Où allez?"}
          onChangeText={onChangeText}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.timerButton}
          onPress={() => openDateTimePicker()}
        >
          <MaterialCommunityIcons
            name={"timeline-clock-outline"}
            size={20}
            color={Colors.default.blue.dark}
          />
          <Text style={styles.timerButtonText}>Now</Text>
          <Entypo
            name={"chevron-down"}
            size={20}
            color={Colors.default.blue.dark}
          />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default HomeSearch;
