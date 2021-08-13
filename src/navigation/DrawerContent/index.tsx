import React, { useEffect, useState } from "react";
import { View, Pressable, StatusBar } from "react-native";
import {
  Avatar,
  Text,
  TouchableRipple,
  Title,
  Caption,
  Drawer,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { IDrawerContent } from "../../types/interfaces";
import styles from "./styles";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import AntDesign from "react-native-vector-icons/AntDesign";

const DrawerContent = (props: IDrawerContent) => {
  const { state, navigation, descriptors, progress } = props;
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const cognitoUser = await Auth.currentAuthenticatedUser();

      if (cognitoUser.attributes) {
        const res = await API.graphql(
          graphqlOperation(getUser, {
            id: cognitoUser.attributes.sub,
          }),
        );

        if (res.data.getUser) {
          setUser(res.data.getUser);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"transparent"}
        translucent={true}
        barStyle={"dark-content"}
      />
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.primarySection}>
          <View style={styles.avatarWrapper}>
            <Avatar.Image
              source={{ uri: "https://placebeard.it/640x380" }}
              size={70}
              style={styles.avatar}
            />
            <View style={styles.avatarContent}>
              <Title style={styles.avatarUsername}>
                {user ? user.username : "Mr. Nobody"}
              </Title>
              <View style={styles.inlineContent}>
                <Text style={styles.avatarRate}>
                  {user && user.rate
                    ? user.rate
                    : Math.round(5.12 * 100) / 100}
                </Text>
                <AntDesign
                  name={"staro"}
                  size={24}
                  style={styles.iconRate}
                />
              </View>
            </View>
          </View>
          <View style={styles.separator} />

          <Pressable
            onPress={() =>
              navigation.navigate("Root", {
                screen: "Messages",
              })
            }
            style={[styles.drawerButton, styles.messagesButton]}
          >
            <Text style={styles.buttonText}>{"Messages"}</Text>
          </Pressable>
          <View style={styles.separator} />
          <Pressable
            onPress={() =>
              navigation.navigate("Root", {
                screen: "Messages",
              })
            }
            style={[styles.drawerButton]}
            disabled={true}
          >
            <Text
              style={[styles.buttonText, styles.doMoreButtonText]}
            >
              {"Do more with your account"}
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate("Root", { screen: "MakeMoney" })
            }
            style={[styles.drawerButton, styles.primarySectionItem]}
          >
            <Text style={styles.buttonText}>
              {"Make more money driving"}
            </Text>
          </Pressable>
        </Drawer.Section>
        <Drawer.Section>
          <Drawer.Item
            label={"Your trips"}
            onPress={() =>
              navigation.navigate("Root", { screen: "YourTrips" })
            }
          />
          <Drawer.Item
            label={"Help"}
            onPress={() =>
              navigation.navigate("Root", { screen: "Help" })
            }
          />
          <Drawer.Item
            label={"Wallet"}
            onPress={() =>
              navigation.navigate("Root", { screen: "Wallet" })
            }
          />
          <Drawer.Item
            label={"Settings"}
            onPress={() =>
              navigation.navigate("Root", { screen: "Settings" })
            }
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
