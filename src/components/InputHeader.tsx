import { FC, useState } from "react";
import { Pressable, Text, TextInput, View, Modal, SafeAreaView, Image } from "react-native";

type InputHeaderProps = {
  onButtonPressHandler: (inputText: string) => void;
  showModal: boolean;
  onCloseModal: () => void;
};

const InputHeader: FC<InputHeaderProps> = (props) => {
  const [textInputText, setTextInputText] = useState("");

  const onTextChangeHandler = (enteredText: string) => {
    setTextInputText(enteredText);
  };

  const onPressHandler = () => {
    props.onButtonPressHandler(textInputText);
    setTextInputText("");
  };

  const onCancelHandler = () => {
    props.onCloseModal();
  };
  return (
    <Modal visible={props.showModal} animationType="slide">
      <SafeAreaView className="flex-col flex-1 relative space-y-8 bg-slate-900 justify-center items-center">
        <Image source={require("../../assets/images/white-logo.png")} className="w-[150px] h-[150px]" />
        <TextInput
          onChangeText={onTextChangeHandler}
          className="border-2 rounded  w-[90%] h-12 border-gray-500 p-2 bg-slate-700 placeholder:text-white text-white"
          placeholder="Add Item"
          placeholderTextColor={"white"}
          value={textInputText}
        />
        <View className="flex-row w-[90%] justify-evenly">
          <Pressable className="bg-slate-700 active:bg-slate-500 w-24 rounded-md p-3" onPress={onCancelHandler}>
            <Text className="text-white font-semibold px-2 text-center ">Cancel</Text>
          </Pressable>
          <Pressable className="bg-slate-600 active:bg-slate-500 w-24 rounded-md  p-3" onPress={onPressHandler}>
            <Text className="text-white font-semibold text-center px-2 ">Add</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
export default InputHeader;
