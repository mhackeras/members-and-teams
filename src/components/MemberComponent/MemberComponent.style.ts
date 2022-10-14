import { StyleSheet } from "react-native";
import { colors } from "res";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  infoContainer: {
    marginLeft: 19,
  },
  infoName: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: "500",
    color: colors.blue,
    textAlign: "center",
  },
  infoRole: {
    marginTop: 4,
    fontFamily: "sans-serif",
    fontSize: 11,
    fontWeight: "400",
    color: colors.darkerGrey,
  },
});
