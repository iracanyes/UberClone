import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.default.blue.primary,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark.text,
    marginLeft: 5,
  },
  content: {
    paddingHorizontal: 5,
    marginVertical: 10,
    color: Colors.dark.text,
  },
  buttonContainer: {},
  buttonYes: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.default.blue.dark,
    color: Colors.dark.text,
    padding: 5,
    borderRadius: 10,
  },
  buttonYesLabel: {
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  shapeWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "transparent",
    //width: 100,
  },
  iconDanger: {
    position: "absolute",
    right: 12,
    bottom: 27,
  },
  signpost: {
    width: 30,
    borderWidth: 3,
    borderColor: Colors.default.grey.primary,
    transform: [{ rotate: "90deg" }],
    zIndex: 5,
    position: "absolute",
    right: 14,
    bottom: 12,
  },
  trapeze: {
    width: 100,
    height: 0,
    borderTopWidth: 0,
    borderBottomWidth: 25,
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderBottomColor: Colors.light.background,
    backgroundColor: "transparent",
    borderTopEndRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: -20,
    borderTopRightRadius: 10,
  },
});

export default styles;
