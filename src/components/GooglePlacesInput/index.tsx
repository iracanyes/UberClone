import React, { useEffect, useRef, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Env from "../../constants/Env";
import { IGooglePlacesInput } from "../../types/interfaces";
import Geolocation from "@react-native-community/geolocation";
import PlaceRow from "../PlaceRow";

navigator.geolocation = require("@react-native-community/geolocation");

const GooglePlacesInput = (props: IGooglePlacesInput) => {
  const ref = useRef();
  const {
    placeholder,
    autoFocus = false,
    styles = null,
    setPlaceInfo = undefined,
    currentLocation = false,
    currentLocationLabel = "",
  } = props;
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchCurrPosition = async () => {
      try {
        if (currentLocation) {
          Geolocation.getCurrentPosition((info) => {
            console.log(
              "\n\nSearchInputs useEffect fetchCurrPosition\n\n",
              info,
            );

            setLocation(info.coords);
          });
        }
      } catch (e) {
        console.warn(e);
      }
    };

    fetchCurrPosition();
  }, [currentLocation]);

  useEffect(() => {
    // Get current location details
    ref.current?.getCurrentLocation(
      ( info ) => console.log("\n\n GooglePlacesInput currLocationDetails\n", info ),
    );

    // set Current Location Info
    //ref.current?.setAddressText("Rue neuve, Bruxelles");
  }, [location]);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoFillOnNotFound={true}
      fetchDetails={true}
      predefinedPlacesAlwaysVisible={true}
      //predefinedPlaces={["home", "work"]}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("\nGooglePlacesAutocomplete onPress\n data\n", data, "\nLocation\n", details);
        setPlaceInfo !== null && setPlaceInfo({ data, details });
      }}
      currentLocation={currentLocation ? currentLocation : false}
      currentLocationLabel={"Position actuelle"}
      enableHighAccuracyLocation={currentLocation ? true : false}
      query={{
        key: Env.dev.GOOGLE_MAPS_PLACE_API_KEY,
        language: "en",
      }}
      styles={styles !== null ? styles : undefined}
      onFail={(data) => console.warn("Google Place API error", data)}
      suppressDefaultStyles={true}
      //isRowScrollable={true}
      renderRow={(data: any, index: number) => (
        <PlaceRow data={data} index={index} />
      )}
      listViewDisplayed={"auto"}
    />
  );
};

export default GooglePlacesInput;
