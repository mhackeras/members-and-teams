import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./ActionButton.style";

interface Props {
  leftComponent: React.ReactNode;
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const ActionButton = ({ leftComponent, label, onPress, style }: Props) => {
  const finalContainerStyle = Object.assign({}, styles.container, style);
  const finalLabelStyle = Object.assign(
    {},
    styles.label,
    leftComponent && styles.labelWithLeftComponent
  );

  return (
    <TouchableOpacity
      style={finalContainerStyle}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {leftComponent && leftComponent}
      <Text style={finalLabelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
