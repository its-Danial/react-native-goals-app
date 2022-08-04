import React, { FC } from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";

type ListProps = {
  data: { text: string; id: string }[];
  onDeletePress: (id: string) => void;
};

const List: FC<ListProps> = (props) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <ListItem id={item.item.id} onDeletePress={props.onDeletePress} text={item.item.text} />}
    />
  );
};
export default List;
