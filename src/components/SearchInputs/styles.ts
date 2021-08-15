import { StyleSheet, Dimensions } from "react-native";
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
  circle: {
    //width: 5,
    height: 5,
    borderWidth: 3,
    borderRadius: 50,
  },
  point: {
    //width: 5,
    height: 5,
    borderWidth: 3,
  },
  row: {
    height: 55,
    width: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "dotted",
    marginVertical: 2,
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
  container: {
    flex: 1,
  },
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
  listView: {
    //flex: 1,
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 125,
    left: -50,
    backgroundColor: Colors.default.white.light,
    paddingHorizontal: 10,
  },
  row: {
    backgroundColor: Colors.default.white.light,
    padding: 13,
    //height: 44,
    flexDirection: "row",
    marginBottom: 5,
  },
  loader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 20,
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
