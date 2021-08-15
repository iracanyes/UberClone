import React from "react";
import { View } from "react-native";
import { Avatar, Text, Caption } from "react-native-paper";
import styles from "./styles";
import { IPlaceRow } from "../../types/interfaces";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const PlaceRow = (props: IPlaceRow) => {
  const { data, index } = props;
  console.log(`\n\nSearchInputs Place Row ${index}\n`, data);

  return (
    <View style={styles.container}>
      <Entypo
        name={"pin"}
        size={32}
        color={"black"}
        style={styles.icon}
      />
      <View>
        <Text style={styles.text}>
          {data.name || data.description}
        </Text>
        {data.vicinity && (
          <Caption style={styles.caption}>{data.vicinity}</Caption>
        )}
      </View>
    </View>
  );
};

export default PlaceRow;
