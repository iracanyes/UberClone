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
    paddingRight: 20,
    paddingLeft: 10,
    backgroundColor: Colors.default.white.dark,
    borderRadius: 5,
  },
  timerButton: {
    flexDirection: "row",
    position: "absolute",
    top: 7,
    right: 10,
    padding: 7,
    borderRadius: 50,
    backgroundColor: Colors.default.grey.light,
  },
  timerButtonText: {
    marginLeft: 5,
  },
});

export default styles;
