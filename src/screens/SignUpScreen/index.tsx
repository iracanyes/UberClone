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
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { getUser } from "../../graphql/queries";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import {ISignUpResult} from "amazon-cognito-identity-js";

/**
 *
 * @constructor
 * @return JSX.Element
 */
const SignUpScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });

        if (cognitoUser.attributes) {
          const user = await getUserDB(cognitoUser.attributes.sub);
          if (user) {
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

      

      return res.data.getUser ? res.data.getUser : undefined;
    } catch (e) {
      console.warn("LoginScreen useEffect getUser error ", e);
    }
  };

  const signUp = async () => {
    let member = null;

    try {
      const { user, userConfirmed, userSub } = await Auth.signUp({
        username: email.split("@")[0],
        password,
        attributes: {
          email,
        },
      });

      if (!userConfirmed) {
        navigation.navigate("ConfirmSignUp", { user, userSub, email });
      }

      if (userSub) {
        member = await getUserDB(userSub);
        if (!member) {
          member = await createUserDB(user, userSub);
        }

        navigation.navigate("Root", { screen: "Home" });
      }
    } catch (e) {
      console.warn("SignUp error", e);
      switch (e.code) {
        case "UsernameExistsException":
          ToastAndroid.showWithGravity(
            "Username already exist!",
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
          break;
      }
    }
  };

  const createUserDB = async (user: any, userSub: string) => {
    try {
      const res = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            id: userSub,
            username: user.username,
            email,
          },
        }),
      );

      if (res.data.createUser) {
        setUser(res.data.createUser);
      }
    } catch (e) {
      console.warn("SignUp Screen createUser error", e);
    }
  };

  const cancel = () => {
    console.log("button submit pressed!");
  };

  const showPasswordPressed = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmPasswordPressed = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        <Text style={styles.title}>Créer votre compte</Text>
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
          {/* Password */}
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
          {/* Confirm Password */}
          <View>
            <Entypo
              name={"lock"}
              size={30}
              style={[styles.iconBeforeInput, styles.iconLock]}
            />
            <TextInput
              value={confirmPassword}
              placeholder={"*********** Password *************"}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={[styles.input, styles.inputPassword]}
            />
            {!showConfirmPassword ? (
              <Entypo
                name={"eye"}
                style={styles.showPasswordIcon}
                size={26}
                onPress={() => showConfirmPasswordPressed()}
              />
            ) : (
              <Entypo
                name={"eye-with-line"}
                style={styles.showPasswordIcon}
                size={26}
                onPress={() => showConfirmPasswordPressed()}
              />
            )
            }
  
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => signUp()}
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
            onPress={() => navigation.navigate("Login")}
            style={[styles.button, styles.buttonCancel]}
          >
            <Octicons
              name={"sign-in"}
              size={26}
              style={styles.iconCancel}
            />
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
