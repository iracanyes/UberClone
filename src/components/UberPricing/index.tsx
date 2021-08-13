import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
import {List, Text} from "react-native-paper";
import UberImage from "../../constants/UberImage";

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
      <ScrollView>
        <FlatList
          data={cars}
          renderItem={(item) =>
            <List.Item
              title={item.type}
              {/* TODO: Calculer la durée de la course */}
              description={""}
              left={() => <UberImage type={item.type} />}
              {/* TODO: Calculer le prix de la course */}
              right={() => <Text>22,26 €</Text>}
            />
          }
          keyExtractor={( item, index) => item.id }
        />
      </ScrollView>
    </View>
  );
};

export default UberPricing;
