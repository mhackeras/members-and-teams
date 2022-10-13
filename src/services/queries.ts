import { gql } from "@apollo/client";

const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    allMembers {
      id
      firstName
    }
  }
`;

export default {
  GET_ALL_MEMBERS,
};
