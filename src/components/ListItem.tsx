import { FC } from "react";
import { View, Text } from "react-native";

type ListItemProps = {
  text: string;
};

const ListItem: FC<ListItemProps> = (props) => {
  return (
    <View className="p-3 mb-3 bg-slate-700 rounded">
      <Text className="text-base text-white">{props.text}</Text>
    </View>
  );
};
export default ListItem;
