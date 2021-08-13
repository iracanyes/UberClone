import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 0,
    paddingTop: 0,
    marginBottom: 0,
  },
  primarySection: {
    backgroundColor: Colors.default.black.primary,
  },
  avatarWrapper: {
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    marginRight: 10,
  },
  avatarContent: {
    justifyContent: "center",
  },
  avatarUsername: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  inlineContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarRate: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 5,
    color: Colors.dark.text,
  },
  iconRate: {
    color: Colors.dark.text,
  },
  primarySectionItem: {
    padding: 10,
  },
  drawerButton: {
    padding: 20,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 15,
    color: Colors.dark.text,
  },
  doMoreButtonText: {
    color: Colors.default.grey.primary,
  },
  separator: {
    width: "95%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.default.grey.primary,
    alignSelf: "center",
  },
});

export default styles;
