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
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { getUser } from "../../graphql/queries";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IConfirmSignUpRouteProps } from "../../types/interfaces";
import { createUser } from "../../graphql/mutations";

/**
 *
 * @constructor
 * @return JSX.Element
 */
const ConfirmSignUpScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const {
    params: {
      user = undefined,
      userSub = undefined,
      email = undefined,
    },
  } = useRoute<IConfirmSignUpRouteProps>();
  const [verificationCode, setVerificationCode] = useState(undefined);

  const confirmSignUp = async () => {
    try {
      if (email && verificationCode) {
        const res = await Auth.confirmSignUp(
          email.split("@")[0],
          verificationCode,
        );

        navigation.navigate("Login");
      }

      // eslint-disable-next-line no-empty
    } catch (e) {
      switch (e.code) {
        case "UserNotFoundException":
          navigation.navigate("SignUp");
          break;
      }
      console.warn("ConfirmSignUpScreen confirmSignUp error", e);
    }
  };

  const cancel = () => {
    console.log("button submit pressed!");
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
        <Text style={styles.title}>Entrer votre code de vérification</Text>
        <Text>Consulter votre boîte de réception</Text>
        <View style={styles.inputWrapper}>
          <View>
            <Foundation
              name={"lock"}
              size={30}
              style={styles.iconBeforeInput}
            />
            <TextInput
              value={verificationCode}
              placeholder={"*********"}
              onChangeText={text => setVerificationCode(text)}
              autoFocus
              keyboardType={"email-address"}
              style={[styles.input, styles.inputEmail]}
            />
          </View>
          
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => confirmSignUp()}
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
            onPress={() => cancel()}
            style={[styles.button, styles.buttonCancel]}
          >
            <Feather
              name={"x-circle"}
              size={26}
              style={styles.iconCancel}
            />
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmSignUpScreen;
