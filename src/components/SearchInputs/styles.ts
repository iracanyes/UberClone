import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: Colors.default.white.light,
  },
  leftContainer: {
    width: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    //width: 5,
    height: 5,
    borderWidth: 3,
  },
  row: {
    height: 40,
    //width: 5,
    borderWidth: 3,
    borderStyle: "dashed",
    marginVertical: 5,
  },

  textInputWrapper: {
    flex: 1,
  },
  locationInputWrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  locationRightContainer: {
    width: 50,
    height: 50,
  },
  destinationInputWrapper: {
    flexDirection: "row",
    //
  },
  buttonPlus: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },
  iconPlus: {},
});

const locationInputStyle = StyleSheet.create({
  textInputContainer: {
    width: 300,
  },
  textInput: {
    backgroundColor: Colors.default.white.primary,
    color: Colors.default.blue.light,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

const destinationInputStyle = StyleSheet.create({
  textInputContainer: {
    width: 300,
  },
  textInput: {
    backgroundColor: Colors.default.white.dark,
    color: Colors.default.grey.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export { styles, locationInputStyle, destinationInputStyle };
