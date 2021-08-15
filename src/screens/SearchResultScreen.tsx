import React, { useEffect, useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchResultMap } from "../components";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../graphql/queries";
import { ICar } from "../types/interfaces";
import UberPricing from "../components/UberPricing";

const SearchResultScreen = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  // TODO: Fetch Nearest Uber cars
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
    <View>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent={true}
      />
      <SearchResultMap cars={cars} />
      {/*  */}
      <UberPricing />
    </View>
  );
};

export default SearchResultScreen;
