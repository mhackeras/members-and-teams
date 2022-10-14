import { StyleSheet } from "react-native";
import { colors } from "res";

export default StyleSheet.create({
  member: {
    marginTop: 45,
  },
  teamMembersList: {
    flexGrow: 0,
    maxHeight: "35%",
  },
  divider: {
    marginTop: 30,
    marginBottom: 37,
  },
  secondDivider: {
    marginTop: 36,
    marginBottom: 31,
  },
  description: {
    fontFamily: "sans-serif",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    color: colors.moreGrey,
  },
  add: {
    alignSelf: "center",
  },
});
