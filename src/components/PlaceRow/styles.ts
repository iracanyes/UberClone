import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: 250,
  },
  icon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.default.grey.light,
    marginRight: 10,
  },
  caption: {
    width: 300,
  },
});

export default styles;
