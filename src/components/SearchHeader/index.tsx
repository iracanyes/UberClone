import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { IDropdownPickerItems, IUser } from "../../types/interfaces";

const SearchHeader = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<IDropdownPickerItems[]>([]);
  const [selectedValue, setSelectedValue] = useState(null);

  // On mount, fetch Users on
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.graphql(graphqlOperation(listUsers));

      if (res.data.listUsers) {
        console.log("useEffect users", res.data.listUsers);
        setUsers(res.data.listUsers.items);
      }
    };

    fetchUsers();
  }, []);

  // On users loaded, create listItems
  useEffect(() => {
    const listItems: React.SetStateAction<IDropdownPickerItems[]> =
      [];

    if (users.length > 0) {
      users.map((item: IUser, index) => {
        const arrayItem = {
          id: item.id,
          label: item.username,
          value: item.username,
          icon: () => (
            <Image
              source={{ uri: "https://placebeard.it/640x360" }}
              style={styles.avatar}
            />
          ),
        };

        listItems.push(arrayItem);
      });

      setItems(listItems);
    }
  }, [users]);

  useEffect(() => {
    if (selectedValue === null && items.length > 0) {
      setSelectedValue(items[0]);
    }
  }, [items, selectedValue]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headButtonGoBack}
        >
          <FontAwesome5
            name={"arrow-left"}
            size={24}
            color={Colors.dark.background}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pickerWrapper}>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          items={items}
          setItems={setItems}
          value={selectedValue}
          setValue={setSelectedValue}
          style={styles.picker}
          containerStyle={styles.pickerWrapper}
          labelStyle={styles.pickerLabel}
          //textStyle={styles.pickerLabelText}
          zIndex={1000}
        />
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headRightButton}
        >
          <FontAwesome5
            name={"arrow-left"}
            size={24}
            color={Colors.dark.background}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;
