import { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type InputHeaderProps = {
  onButtonPressHandler: (inputText: string) => void;
};

const InputHeader: FC<InputHeaderProps> = (props) => {
  const [textInputText, setTextInputText] = useState("");

  const onTextChangeHandler = (enteredText: string) => {
    setTextInputText(enteredText);
  };

  const onPressHandler = () => {
    props.onButtonPressHandler(textInputText);
  };
  return (
    <View className="flex-row mt-5 pb-6 items-center border-b-2 border-gray-500">
      <TextInput
        onChangeText={onTextChangeHandler}
        className="flex-1 border-2 rounded h-10 border-gray-500 p-2 bg-slate-700 placeholder:text-white text-white"
        placeholder="Add Item"
        placeholderTextColor={"white"}
      />
      <View className="bg-slate-700 rounded-md ml-2 p-3">
        <TouchableOpacity onPress={onPressHandler}>
          <Text className="text-white font-semibold px-2">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InputHeader;
