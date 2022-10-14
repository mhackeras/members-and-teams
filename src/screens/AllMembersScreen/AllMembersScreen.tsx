import React, { useCallback, useEffect, useState } from "react";
import {
  LoadingIndicator,
  MembersList,
  NavigationBar,
  Screen,
  TextButton,
} from "components";
import { useQuery } from "@apollo/client";
import { queries } from "services";
import { alphabeticalSort, relevanceSort } from "src/utils";
import styles from "./AllMembersScreen.style";

const SCREEN_TITLE = "All Members";

enum Sort {
  UNSORTED = "Unsorted",
  ALPHABETICAL = "Alphabetical",
  RELEVANCE = "Relevance",
}

const AllMembersScreen = () => {
  const { loading, error, data, refetch } = useQuery(queries.GET_ALL_MEMBERS);
  const [allMembers, setAllMembers] = useState(data?.allMembers || []);
  const [currentSort, setCurrentSort] = useState(Sort.UNSORTED);
  const showLoading = loading || allMembers.length <= 0;

  const refetchAllMembers = useCallback(async () => {
    if (!loading && allMembers.length <= 0) {
      const newData = (await refetch()).data;
      const newMembers =
        newData.allMembers.length > 0 ? newData.allMembers : [];
      setAllMembers(newMembers);
    }
  }, [loading, allMembers, refetch]);

  useEffect(() => {
    refetchAllMembers();
  }, [refetchAllMembers]);

  const sortedList = () => {
    const newMembersList = allMembers ? [...allMembers] : [];
    if (currentSort === Sort.UNSORTED) {
      return newMembersList;
    } else if (currentSort === Sort.ALPHABETICAL) {
      return alphabeticalSort(newMembersList);
    } else {
      return relevanceSort(newMembersList);
    }
  };

  const sortPress = () => {
    if (currentSort === Sort.UNSORTED) {
      setCurrentSort(Sort.ALPHABETICAL);
    } else if (currentSort === Sort.ALPHABETICAL) {
      setCurrentSort(Sort.RELEVANCE);
    } else {
      setCurrentSort(Sort.UNSORTED);
    }
  };

  return (
    <Screen>
      <NavigationBar
        title={SCREEN_TITLE}
        rightComponent={<TextButton label={currentSort} onPress={sortPress} />}
      />
      {!showLoading ? (
        <MembersList
          style={styles.membersList}
          extraKey={"allMembers"}
          data={sortedList()}
        />
      ) : (
        <LoadingIndicator style={styles.loadingIndicator} />
      )}
    </Screen>
  );
};

export default AllMembersScreen;
