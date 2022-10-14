import { useApolloClient } from "@apollo/client";
import { queries } from "services";
import { Member } from "src/helpers/interfaces/member";

export interface TeamInfo {
  teamName: string;
  primaryMember: Member;
  membersList: Member[];
  membersTotalExperience: number;
  membersNames: string;
  description: string;
}

export const useTeamInfo = (memberName?: string) => {
  const client = useApolloClient();
  const { allMembers } = client.readQuery({
    query: queries.GET_ALL_MEMBERS,
  });

  const teamName = `Team ${memberName}`;

  const primaryMember: Member =
    allMembers?.find((member: Member) => member.firstName === memberName) ||
    undefined;

  const membersList = primaryMember.colleagues || [];

  const membersTotalExperience =
    primaryMember.experience +
    membersList.reduce((a, curr) => a + curr.experience, 0);

  const teamMembersNamesList = [
    memberName,
    ...membersList.map((member) => member.firstName),
  ];

  const membersNames =
    teamMembersNamesList.slice(0, -1).join(", ") +
    " and " +
    teamMembersNamesList.slice(-1);

  const description =
    membersList.length > 0
      ? `Between ${membersNames}, this team of experts have a total of ${membersTotalExperience} years of experience. You are in great hands!`
      : `Oops, ${memberName} doesn't have a team yet.`;

  return {
    teamName,
    primaryMember,
    membersList,
    membersTotalExperience,
    membersNames,
    description,
  } as TeamInfo;
};
