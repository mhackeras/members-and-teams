import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  icon: React.ReactNode;
  onPress: () => void;
}

const IconButton = ({ icon, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
