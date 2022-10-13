import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { Screen } from "components";
import { useApolloClient, useQuery } from "@apollo/client";
import { queries } from "services";

const AllMembersScreen = () => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(queries.GET_ALL_MEMBERS);

  const refetch = useCallback(async () => {
    await client.refetchQueries({
      include: ["GetAllMembers"],
    });
  }, [client]);

  useEffect(() => {
    if (data !== undefined && data.allMembers.length <= 0) {
      refetch();
    }
  }, [data, refetch]);

  return (
    <Screen>
      <View>{}</View>
    </Screen>
  );
};

export default AllMembersScreen;
