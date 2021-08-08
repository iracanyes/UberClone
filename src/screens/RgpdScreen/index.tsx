import React from "react";
import { Text, View } from "react-native";

const RgpdScreen = () => {
  return (
    <View>
      <Text>RGPD : Règlement général sur la protection des données</Text>
      <Text>
        La loi sur la protection de la vie privée accorde différents droits à toutes les personnes concernées, dont :
  
        le droit à l’information : vous avez le droit de savoir que vos données seront traitées et pourquoi elles le sont
        le droit de rectification : vous pouvez faire rectifier sans frais les données inexactes ou faire supprimer d’autres données qui sont non pertinentes, incomplètes ou interdites
        le droit d’accès : vous devez pouvoir exercer le contrôle nécessaire sur vos données personnelles traitées
        le droit d’opposition : vous avez le droit de vous opposer à l’utilisation de vos données
        Le Règlement général sur la Protection des Données (RGPD) renforce les droits existants et introduit également un nouveau droit, à savoir le droit à la portabilité des données.
      </Text>
    </View>
  );
};

export default RgpdScreen;
