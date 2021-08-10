import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 60,
    backgroundColor: Colors.default.white.light,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "visible",
    zIndex: 10,
  },
  headButtonGoBack: {
    //width: 50,
    padding: 5,
    //backgroundColor: "blue",
    alignSelf: "flex-start",
  },
  pickerContainer: {},
  pickerWrapper: {
    backgroundColor: "yellow",
    alignSelf: "center",
    overflow: "visible",
    borderRadius: 10,
    zIndex: 10,
    borderWidth: 0,
  },
  picker: {
    width: 150,
    height: 30,
    padding: 0,
    zIndex: 10,
    borderWidth: 0,
    backgroundColor: Colors.default.white.light,
  },
  pickerLabel: {
    //width: 120,
    height: 0,
    backgroundColor: "purple",
    fontSize: 12,
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  pickerText: {
    borderWidth: 0,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "cover",
  },
  rightWrapper: {
    width: 40,
  },
  headRightButton: {
    display: "none",
  },
});

export default styles;
