import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import MapNotification from "../MapNotification";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

navigator.geolocation = require("@react-native-community/geolocation");

const HomeMap = () => {
  const [location, setLocation] = useState({});

  const fetchCurrLocation = async () => {
    try {
      Geolocation.getCurrentPosition( info => {
        console.log(
          "\n\nHomeMap useEffect fetchCurrPosition\n\n",
          info,
        );
  
        setLocation(info.coords);
      });
    }catch (e) {
      console.warn("fetchCurrLocation error\n", e);
    }
  };

  useEffect(() => {
    fetchCurrLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* Map show user location && */}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}
        zoomEnabled={true}
        zoomControlEnabled={true}
        style={styles.map}
        showsUserLocation={true}
      >
        <Marker
          title="Position approximative"
          coordinate={location}
        />
      </MapView>
      <MapNotification />
    </View>
  );
};

export default HomeMap;
