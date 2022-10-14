import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "./Screen.style";

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const marginTop = 53 - safeAreaInsets.top;
  const finalSafeAreaStyle = Object.assign({}, styles.safeArea, { marginTop });

  return <SafeAreaView style={finalSafeAreaStyle}>{children}</SafeAreaView>;
};

export default Screen;
