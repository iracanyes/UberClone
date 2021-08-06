import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import styles from "./styles";
import Colors from "../../constants/Colors";

const MapNotification = () => {
  const closeNotification = () => {
    console.log("close button pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Octicons
          name={"alert"}
          size={26}
          color={Colors.default.red.dark}
        />
        <Text style={styles.title}>Travel only if necessary</Text>
      </View>
      <Text style={styles.content}>
        We are now strongly recommending everyone, regardless of
        vaccination status, wear a mask or other face covering indoors
        when other people are present and in all public and common
        areas, such as lobbies, hallways, stairways, restrooms,
        elevators and shared vehicles. We continue to monitor the
        situation, and we should all be prepared for the possibility…
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonYes}
          onPress={() => closeNotification()}
        >
          <Entypo
            name={"check"}
            size={22}
            color={Colors.default.purple.dark}
          />
          <Text style={styles.buttonYesLabel}>Learn more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shapeWrapper}>
        <Octicons
          name={"alert"}
          size={35}
          color={"black"}
          style={styles.iconDanger}
        />
        <View style={styles.signpost} />
        <View style={styles.trapeze} />
      </View>
    </View>
  );
};

export default MapNotification;
