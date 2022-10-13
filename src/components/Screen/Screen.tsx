import React from "react";
import { SafeAreaView } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Screen;
