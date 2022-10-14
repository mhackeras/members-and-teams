import { userPics } from "res";
import { Member } from "src/helpers/interfaces/member";

export const alphabeticalSort = (members: Member[]) => {
  return members.sort((a: Member, b: Member) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
};

export const relevanceSort = (members: Member[]) => {
  return members.sort((a: Member, b: Member) => {
    const aPic = userPics.find((member) => member.firstName === a.firstName);
    const bPic = userPics.find((member) => member.firstName === b.firstName);

    if (aPic && bPic === undefined) {
      return -1;
    }

    if (bPic && aPic === undefined) {
      return 1;
    }

    if (a.experience < b.experience) {
      return 1;
    }
    if (a.experience > b.experience) {
      return -1;
    }

    return 0;
  });
};
