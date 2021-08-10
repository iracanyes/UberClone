import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: Colors.default.white.light,
    zIndex: 1,
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
