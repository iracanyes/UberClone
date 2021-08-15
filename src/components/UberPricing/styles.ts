import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.default.white.light,
  },
  flatlist: {},
  listItem: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.default.white.dark,
    marginBottom: 10,
  },
  image: {
    width: 110,
    height: 80,
    marginRight: 10,
  },
  middleContent: {
    flex: 1,
    marginRight: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    marginBottom: 5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  usersIcon: {},
  badge: {
    position: "absolute",
    right: -18,
    top: -10,
  },
  caption: {
    fontSize: 14,
  },
  priceWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.default.grey.dark,
    textAlign: "center",
  },
});

export default styles;
