import * as React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import MapNotification from "../MapNotification";

const HomeMap = () => {
  return (
    <View style={styles.container}>
      {/*  */}
      <Image
        source={{ uri: "https://loremflickr.com/1200/960" }}
        style={styles.map}
      />
      <MapNotification />
    </View>
  );
};

export default HomeMap;
