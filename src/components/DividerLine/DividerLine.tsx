import React from "react";
import { View, ViewStyle } from "react-native";
import styles from "./DividerLine.style";

interface Props {
  style?: ViewStyle;
}
const DividerLine = ({ style }: Props) => {
  const finalContainerStyle = Object.assign({}, styles.container, style);

  return <View style={finalContainerStyle} />;
};

export default DividerLine;
