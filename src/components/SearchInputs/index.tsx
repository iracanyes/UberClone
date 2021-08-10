import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {
  styles,
  destinationInputStyle,
  locationInputStyle,
} from "./styles";
import Colors from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Env from "../../constants/Env";
import GooglePlacesInput from "../GooglePlacesInput";

const SearchInputs = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  console.log(
    "GOOGLE_MAPS_PLACE_API_KEY",
    Env.dev.GOOGLE_MAPS_PLACE_API_KEY,
  );

  const showOptions = () => {
    console.log("show options pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.point} />
        <View style={styles.row} />
        <View style={styles.point} />
      </View>
      <View style={styles.textInputWrapper}>
        <View style={styles.locationInputWrapper}>
          <GooglePlacesInput
            placeholder={"Où etes-vous?"}
            //autoFocus={true}
            styles={locationInputStyle}
          />
          <View style={styles.locationRightContainer}/>
        </View>
        <View style={styles.destinationInputWrapper}>
          <GooglePlacesInput
            placeholder={"Où allez-vous?"}
            styles={destinationInputStyle}
          />

          <TouchableOpacity
            onPress={() => showOptions()}
            style={styles.buttonPlus}
          >
            <Entypo name={"plus"} size={34} style={styles.iconPlus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchInputs;
