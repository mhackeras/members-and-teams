import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Member } from "src/helpers/interfaces/member";
import ProfileAvatar from "src/components/ProfileAvatar/ProfileAvatar";
import { useRootNavigation } from "src/navigation/hooks";
import styles from "./MemberComponent.style";

interface Props {
  member: Member;
  style?: ViewStyle;
}

const MemberComponent = ({ member, style }: Props) => {
  const navigation = useRootNavigation();
  const memberFirstName = member.firstName;
  const memberLastName = member.lastName;
  const finalContainerStyle = Object.assign({}, styles.container, style);

  const onMemberPress = () => {
    navigation.navigate("Team", { memberName: memberFirstName });
  };

  return (
    <TouchableOpacity
      style={finalContainerStyle}
      activeOpacity={0.8}
      onPress={onMemberPress}
    >
      <ProfileAvatar member={member} />
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoName}
        >{`${memberFirstName} ${memberLastName}`}</Text>
        <Text
          style={styles.infoRole}
        >{`${memberFirstName} ${memberLastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MemberComponent;
