import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.default.white.light,
  },
  inputBox: {
    //height: 100,
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    paddingRight: 20,
    paddingLeft: 10,
  },
  timerButton: {
    flexDirection: "row",
    position: "absolute",
    top: 6,
    right: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.default.white.dark,
  },
  timerButtonText: {
    marginLeft: 5,
  },
  flatlistContainer: {
    //marginTop: 10,
  },
  listItemBox: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.default.white.dark,
    alignItems: "center",
    marginVertical: 5,
  },
  listItemText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default styles;
