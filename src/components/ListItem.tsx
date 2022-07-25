import { FC } from "react";
import { View, Text, Touchable, TouchableOpacity, Pressable } from "react-native";

type ListItemProps = {
  text: string;
  onDeletePress: (id: string) => void;
  id: string;
};

const ListItem: FC<ListItemProps> = (props) => {
  const onDeletePressHandler = () => {
    props.onDeletePress(props.id);
  };
  return (
    <Pressable onPress={onDeletePressHandler} className="p-3 mb-3 bg-slate-700 rounded active:bg-slate-500">
      <Text className="text-base text-white">{props.text}</Text>
    </Pressable>
  );
};
export default ListItem;
