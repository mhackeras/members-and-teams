import React from "react";
import { Text, View } from "react-native";
import { Svgs } from "res";
import { useRootNavigation } from "src/navigation/hooks";
import IconButton from "../IconButton/IconButton";
import styles from "./NavigationBar.style";

interface Props {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
}

const NavigationBar = ({ title, showBackButton, rightComponent }: Props) => {
  const navigation = useRootNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.top}>
        {showBackButton && (
          <IconButton icon={<Svgs.LeftArrow />} onPress={onBackPress} />
        )}
        {rightComponent && (
          <View style={styles.rightComponent}>{rightComponent}</View>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default NavigationBar;
