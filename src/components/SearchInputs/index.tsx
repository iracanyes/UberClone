import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Platform } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {
  styles,
  destinationInputStyle,
  locationInputStyle,
} from "./styles";
import GooglePlacesInput from "../GooglePlacesInput";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Env from "../../constants/Env";
import Geolocation from "@react-native-community/geolocation";
import PlaceRow from "../PlaceRow";
//navigator.geolocation = require("@react-native-community/geolocation");

const SearchInputs = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  const showOptions = () => {
    console.log("show options pressed!");
  };

  useEffect(() => {
    if (location && destination) {
      console.log(
        "Location.data\n",
        location.data,
        "\nLocation.details\n",
        location.details,
      );
      console.log("\ndestination\n", destination);
      console.log(
        "\ndestination geometry\n",
        destination.details.geometry,
      );
      try {
        navigation.navigate("SearchResult", {
          location,
          destination,
        });
      } catch (e) {
        console.warn(e);
      }
    }
  }, [navigation, location, destination]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.circle} />
        <View style={styles.row} />
        <View style={styles.point} />
      </View>
      <View style={styles.textInputWrapper}>
        <View style={styles.locationInputWrapper}>
          <GooglePlacesInput
            placeholder={"Où etes-vous?"}
            autoFocus={true}
            setPlaceInfo={setLocation}
            currentLocation={true}
            currentLocationLabel={"Actuelle localisation"}
            styles={locationInputStyle}
            
          />
          <View style={styles.locationRightContainer} />
        </View>
        <View style={styles.destinationInputWrapper}>
          <GooglePlacesInput
            placeholder={"Où allez-vous?"}
            styles={destinationInputStyle}
            setPlaceInfo={setDestination}
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
