import { gql } from "@apollo/client";

const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    allMembers {
      id
      firstName
      lastName
      title
      experience
      colleagues {
        id
        firstName
        lastName
        title
        experience
      }
    }
  }
`;

export default {
  GET_ALL_MEMBERS,
};
