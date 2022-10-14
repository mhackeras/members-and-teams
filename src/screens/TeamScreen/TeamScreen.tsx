import React from "react";
import { Text } from "react-native";
import {
  ActionButton,
  DividerLine,
  MemberComponent,
  MembersList,
  NavigationBar,
  Screen,
} from "components";
import { useRootRoute } from "src/navigation/hooks";
import styles from "./TeamScreen.style";
import { Svgs } from "res";
import { useTeamInfo } from "./hook";

const ADD_MEMBER_LABEL = "Click to add member";

const TeamScreen = () => {
  const route = useRootRoute();
  const memberName = route.params?.memberName;
  const teamInfo = useTeamInfo(memberName);

  const addMemberPress = () => {};

  return (
    <Screen>
      <NavigationBar showBackButton title={teamInfo.teamName} />
      {teamInfo.primaryMember && (
        <MemberComponent
          style={styles.member}
          member={teamInfo.primaryMember}
        />
      )}
      <DividerLine style={styles.divider} />

      {teamInfo.membersList.length > 0 ? (
        <MembersList
          style={styles.teamMembersList}
          extraKey={`Team-${memberName}`}
          data={teamInfo.membersList}
        />
      ) : (
        <ActionButton
          style={styles.add}
          label={ADD_MEMBER_LABEL}
          leftComponent={<Svgs.Plus />}
          onPress={addMemberPress}
        />
      )}

      <DividerLine style={styles.secondDivider} />

      <Text style={styles.description}>{teamInfo.description}</Text>
    </Screen>
  );
};

export default TeamScreen;
