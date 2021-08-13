import React, { useEffect, useRef, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Env from "../../constants/Env";
import { IGooglePlacesInput } from "../../types/interfaces";

const GooglePlacesInput = (props: IGooglePlacesInput) => {
  const ref = useRef();
  const {
    placeholder,
    autoFocus = false,
    styles = null,
    setPlaceInfo = undefined,
  } = props;

  useEffect(() => {
    // set Current Location Info
    //ref.current?.setAddressText("Rue neuve, Bruxelles");
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoFillOnNotFound={true}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //console.log("data\n", data, "\nLocation\n", details);
        setPlaceInfo !== null && setPlaceInfo({ data, details });
      }}
      query={{
        key: Env.dev.GOOGLE_MAPS_PLACE_API_KEY,
        language: "en",
      }}
      styles={styles !== null ? styles : undefined}
      onFail={(data) => console.warn("Google Place API error", data)}
    />
  );
};

export default GooglePlacesInput;
