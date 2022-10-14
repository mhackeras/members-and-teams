import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./TextButton.style";

interface Props {
  label: string;
  onPress: () => void;
}

const TextButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
