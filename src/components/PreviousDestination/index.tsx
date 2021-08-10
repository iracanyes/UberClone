import React from "react";
import styles from "./styles";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const PreviousDestination = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.flatlistContainer}>
        <TouchableOpacity style={styles.listItemBox}>
          {true && (
            <AntDesign name={"home"} color={"#FFD700"} size={30} />
          )}
          <Text style={styles.listItemText}>Maison</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemBox}>
          {true && (
            <Ionicons name={"business"} color={"#FFD700"} size={30} />
          )}
          <Text style={styles.listItemText}>Travail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemBox}>
          {true && (
            <AntDesign name={"staro"} color={"#FFD700"} size={30} />
          )}
          <Text style={styles.listItemText}>Adresse Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemBox}>
          {true && (
            <AntDesign name={"staro"} color={"#FFD700"} size={30} />
          )}
          <Text style={styles.listItemText}>Adresse Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItemBox}>
          {true && (
            <AntDesign name={"staro"} color={"#FFD700"} size={30} />
          )}
          <Text style={styles.listItemText}>Adresse Favorite</Text>
        </TouchableOpacity>
  
      </ScrollView>
    </View>
  );
};

export default PreviousDestination;
