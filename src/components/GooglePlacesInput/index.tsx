import React, { useEffect, useRef } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Env from "../../constants/Env";

interface IGooglePlacesInput {
  placeholder: string;
  autoFocus?: boolean;
  fetchDetails?: boolean;
  styles?: any;
}

const GooglePlacesInput = (props: IGooglePlacesInput) => {
  const ref = useRef();
  const {
    placeholder,
    autoFocus = false,
    styles = null,
  } = props;

  useEffect(() => {
    ref.current?.setAddressText("Rue neuve, Bruxelles");
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
        console.log(data, details);
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
