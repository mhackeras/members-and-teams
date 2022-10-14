import React from "react";
import { Image, Text, View } from "react-native";
import { userPics } from "res";
import { Member } from "src/helpers/interfaces/member";
import styles from "./ProfileAvatar.style";

interface Props {
  member: Member;
}

const ProfileAvatar = ({ member }: Props) => {
  const memberName = member.firstName;
  const memberLastName = member.lastName;
  const memberPic =
    userPics.find((user) => user.firstName === member.firstName)?.userPic ||
    undefined;

  const renderPlaceholder = () => {
    const firstNameIntial = memberName.charAt(0);
    const lastNameIntial = memberLastName.charAt(0);

    return (
      <Text
        style={styles.initials}
      >{`${firstNameIntial}${lastNameIntial}`}</Text>
    );
  };

  return (
    <View style={styles.container}>
      {memberPic ? (
        <Image style={styles.image} source={memberPic} resizeMode="cover" />
      ) : (
        renderPlaceholder()
      )}
    </View>
  );
};

export default ProfileAvatar;
