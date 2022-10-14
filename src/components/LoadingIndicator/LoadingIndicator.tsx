import React from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import { colors } from "res";

interface Props {
  style?: ViewStyle;
}

const LoadingIndicator = ({ style }: Props) => {
  return (
    <View style={style}>
      <ActivityIndicator color={colors.blue} />
    </View>
  );
};

export default LoadingIndicator;
