import { useState } from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  const [textInputText, setTextInputText] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  const onTextChangeHandler = (enteredText: string) => {
    setTextInputText(enteredText);
  };

  const onButtonPressHandler = () => {
    setListItems((prevItems) => [...prevItems, textInputText]);
  };

  return (
    <TailwindProvider>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView className="flex-1 bg-slate-900">
        <View className="px-3 flex-1 ">
          {/* Input Header */}
          <View className="flex-row mt-5 pb-6 items-center border-b-2 border-gray-300">
            <TextInput
              onChangeText={onTextChangeHandler}
              className="flex-1 border-2 border-gray-400 p-2 bg-slate-700 placeholder:text-white text-white"
              placeholder="Add Item"
              placeholderTextColor={"white"}
            />
            <View className="bg-slate-700 rounded-md ml-2 p-3">
              <TouchableOpacity onPress={onButtonPressHandler}>
                <Text className="text-white font-semibold">Add Item</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Items list */}
          <View className="flex-1 mt-5 ">
            {listItems.map((item, index) => (
              <View key={index} className="p-3 mb-3 bg-slate-700 rounded">
                <Text className="text-base text-white">{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
