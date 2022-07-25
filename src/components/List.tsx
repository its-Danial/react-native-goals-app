import React, { FC } from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";

type ListProps = {
  data: { text: string; id: string }[];
};

const List: FC<ListProps> = (props) => {
  return (
    <View className="flex-1 mt-5 ">
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ListItem text={item.item.text} />}
      />
    </View>
  );
};
export default List;
