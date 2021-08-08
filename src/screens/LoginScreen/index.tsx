import React, { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  ToastAndroid,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { getUser } from "../../graphql/queries";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../graphql/mutations";
import { v4 as uuidV4 } from "uuid";

/**
 *
 * @constructor
 * @return JSX.Element
 */
const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });

        console.log(
          "LoginScreen useEffect fetchAuthUser",
          cognitoUser,
        );
        if (cognitoUser.attributes) {
          const authUser = await getUserDB(
            cognitoUser.attributes.sub,
          );
          if (authUser) {
            navigation.navigate("Root", { screen: "Home" });
          }
        }
      } catch (e) {
        if (typeof e === "string") {
          ToastAndroid.showWithGravity(
            "Veuillez vous connecter! Pour accéder à l'application",
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
        } else {
          console.warn("LoginScreen fetchAuthUser error", e);
        }
      }
    };

    fetchAuthUser();
  }, []);

  const getUserDB = async (userID: string) => {
    try {
      const res = await API.graphql(
        graphqlOperation(getUser, { id: userID }),
      );

      console.log("LoginScreen useEffect getUser ", res);

      return res.data.getUser ? res.data.getUser : undefined;
    } catch (e) {
      console.warn("LoginScreen useEffect getUser error ", e);
    }
  };

  const submit = async () => {
    try {
      const cognitoUser = await Auth.signIn(
        email.split("@")[0],
        password,
      );
      console.log("button submit cognitoUser", cognitoUser);
      if (cognitoUser.attributes) {
        const user = await getUserDB(cognitoUser.attributes.sub);

        if (user && user.id) {
          navigation.navigate("Root", { screen: "Home" });
        } else {
          await createUserDB(cognitoUser.attributes.sub);
        }
      }
      // eslint-disable-next-line no-empty
    } catch (e) {
      switch (e.code) {
        case "UserNotFoundException":
          navigation.navigate("SignUp");
          break;
        case "UserNotConfirmedException":
          // prettier-ignore
          navigation.navigate(
            "ConfirmSignUp",
            {
              email,
            }
          );
          break;
        default:
          console.warn("LoginScreen signIn error", e);
          break;
      }
    }
  };

  const createUserDB = async (userID: string) => {
    try {
      const res = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            id: userID,
            username: email,
            email,
          },
        }),
      );

      if (res.data.createUser) {
        navigation.navigate("Root", { screen: "Home" });
      }
    } catch (e) {
      console.warn("LoginScreen create user in DB error", e);
    }
  };

  const cancel = () => {
    console.log("button submit pressed!");
  };

  const showPasswordPressed = () => {
    setShowPassword(!showPassword);
  };

  // prettier-ignore
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.dark.background}
        barStyle={Colors.dark.text}
      />
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Connexion via votre compte</Text>
        <View style={styles.inputWrapper}>
          <View>
            <Foundation
              name={"at-sign"}
              size={30}
              style={styles.iconBeforeInput}
            />
            <TextInput
              value={email}
              placeholder={"your_email@gmail.com"}
              onChangeText={setEmail}
              autoFocus
              keyboardType={"email-address"}
              style={[styles.input, styles.inputEmail]}
            />
          </View>

          <View>
            <Entypo
              name={"lock"}
              size={30}
              style={[styles.iconBeforeInput, styles.iconLock]}
            />
            <TextInput
              value={password}
              placeholder={"*********** Password *************"}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={[styles.input, styles.inputPassword]}
            />
            {!showPassword ? (
                <Entypo
                  name={"eye"}
                  style={styles.showPasswordIcon}
                  size={26}
                  onPress={() => showPasswordPressed()}
                />
              ) : (
                <Entypo
                  name={"eye-with-line"}
                  style={styles.showPasswordIcon}
                  size={26}
                  onPress={() => showPasswordPressed()}
                />
              )
            }
            
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => submit()}
            style={[styles.button, styles.buttonSubmit]}
          >
            <Feather
              name={"check-circle"}
              size={26}
              style={styles.iconSubmit}
            />
            <Text style={styles.buttonText}>Confirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={[styles.button, styles.buttonCancel]}
          >
            <MaterialIcons
              name={"person-add-alt"}
              size={26}
              style={styles.iconCancel}
            />
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
