import { StyleSheet } from "react-native";
import { colors } from "res";

export default StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grey,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  initials: {
    fontFamily: "sans-serif",
    fontSize: 32,
    fontWeight: "400",
    color: colors.darkerGrey,
  },
});
