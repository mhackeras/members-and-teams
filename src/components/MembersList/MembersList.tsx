import React from "react";
import { FlatList, ListRenderItemInfo, ViewStyle } from "react-native";
import { Member } from "src/helpers/interfaces/member";
import MemberComponent from "../MemberComponent/MemberComponent";
import styles from "./MembersList.style";

interface Props {
  extraKey: string;
  data: Member[];
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

const MembersList = ({ extraKey, data, style, containerStyle }: Props) => {
  const finalStyle = Object.assign({}, styles.container, style);
  const finalContainerStyle = Object.assign(
    {},
    styles.listContainer,
    containerStyle
  );

  const renderMember = (item: ListRenderItemInfo<Member>) => {
    const index = item.index;
    const member = { ...item.item };
    const extraStyle: ViewStyle = { marginTop: index > 0 ? 19 : 0 };

    return <MemberComponent style={extraStyle} member={member} />;
  };

  return (
    <FlatList
      style={finalStyle}
      contentContainerStyle={finalContainerStyle}
      keyExtractor={(item, index) =>
        `key-${extraKey}-id-${item.id.toString()}-index-${index.toString()}`
      }
      data={data}
      renderItem={renderMember}
    />
  );
};

export default MembersList;
