import { StyleSheet } from "react-native";
import { colors } from "res";

export default StyleSheet.create({
  container: {
    height: 63,
    width: 148,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lighterGrey,
  },
  label: {
    height: 15,
    fontFamily: "sans-serif",
    fontSize: 10,
    fontWeight: "400",
    color: colors.blue,
  },
  labelWithLeftComponent: {
    marginLeft: 6,
  },
});
