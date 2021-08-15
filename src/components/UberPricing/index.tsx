import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
import {Badge, Caption, List, Text} from "react-native-paper";
import UberImage from "../../constants/UberImage";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const UberPricing = () => {
  const [cars, setCars] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      const res = await API.graphql(graphqlOperation(listCars));

      if (res.data.listCars) {
        setCars(res.data.listCars.items);
      }
    };

    fetchCars();
  }, []);

  return (
    <View style={styles.container}>
      {cars && (
        <FlatList
          data={cars}
          renderItem={(el) => (
            <View style={styles.listItem}>
              <UberImage type={el.item.type} style={styles.image} />
              <View style={styles.middleContent}>
                <View style={styles.titleWrapper}>
                  <Text style={styles.title}>{el.item.type}</Text>
                  <View>
                    <FontAwesome5
                      name={"users"}
                      size={20}
                      style={styles.usersIcon}
                    />
                    <Badge style={styles.badge}>3</Badge>
                  </View>
                </View>
                <Caption
                  style={styles.caption}
                >{`Durée du trajet : ${22}min`}</Caption>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.price}>{`${22.1}€`}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
      )}
    </View>
  );
};

export default UberPricing;
