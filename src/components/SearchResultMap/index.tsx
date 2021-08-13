import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import styles from "./styles";
import Colors from "../../constants/Colors";
import Env from "../../constants/Env";
import { ISearchResultMap } from "../../types/interfaces";
import UberImage, { getImage } from "../../constants/UberImage";

const SearchResultMap = (props: ISearchResultMap) => {
  const {
    params: { location = null, destination = null },
  } = useRoute();
  const { cars } = props;

  console.log("\n\nLocation\n\n", location);
  console.log("\n\nDestination\n", destination);

  // Trip coordinates
  const coordinates = [
    {
      latitude: location.details.geometry.location.lat,
      longitude: location.details.geometry.location.lng,
    },
    {
      latitude: destination.details.geometry.location.lat,
      longitude: destination.details.geometry.location.lng,
    },
  ];

  return (
    <View>
      {location && destination && (
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.details.geometry.location.lat,
            longitude: location.details.geometry.location.lng,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}
          zoomEnabled={true}
          zoomControlEnabled={true}
          style={styles.map}
        >
          <MapViewDirections
            apikey={Env.dev.GOOGLE_MAPS_PLACE_API_KEY}
            origin={coordinates[0]}
            destination={coordinates[1]}
            strokeWidth={6}
            strokeColor={Colors.default.purple.light}
            strokeColors={[Colors.default.blue.primary]}
          />
          <Marker title={"Départ"} coordinate={coordinates[0]} />
          <Marker title="Arrivée" coordinate={coordinates[1]} />
          {/* Nearest UberCars markers */}
          {cars.length > 0 &&
            cars.map((item, index) => (
              <Marker
                key={index}
                title={item.type}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              >
                <Image
                  source={getImage(item.type)}
                  style={styles.markerUber}
                  resizeMode={"contain"}
                />
              </Marker>
            ))
          }
          {/* Distance à vol d'oiseau
            <Polyline
              coordinates={coordinates}
              strokeWidth={6}
              strokeColor={"#fff"}
              strokeColors={[Colors.default.blue.primary]}
            />
          */}
        </MapView>
      )}
    </View>
  );
};

export default SearchResultMap;
