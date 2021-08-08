import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.default.blue.light,
  },
  formWrapper: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.default.white.dark,
  },
  title: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.default.grey.primary,
    marginVertical: 10,
    paddingLeft: 10,
  },
  inputWrapper: {},
  inputBox: {},
  inputEmail: {
    paddingLeft: 45,
  },
  inputPassword: {
    paddingRight: 60,
    paddingLeft: 45,
  },
  iconAtSign: {},
  iconLock: {},
  showPasswordIcon: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.default.red.light,
    position: "absolute",
    bottom: 12,
    right: 2,
  },
  buttonWrapper: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSubmit: {
    backgroundColor: Colors.default.purple.light,
  },
  buttonCancel: {
    backgroundColor: Colors.default.red.light,
  },
  buttonText: {
    color: Colors.dark.text,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconBeforeInput: {
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  iconSubmit: {},
  iconCancel: {},
});

export default styles;
