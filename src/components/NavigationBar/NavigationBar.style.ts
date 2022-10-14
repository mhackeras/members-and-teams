import { StyleSheet } from "react-native";
import { colors } from "res";

export default StyleSheet.create({
  top: {
    height: 22,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginTop: 31,
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "sans-serif",
    lineHeight: 20,
    textAlign: "center",
    color: colors.black,
  },
  rightComponent: {
    flex: 1,
    alignItems: "flex-end",
  },
});
