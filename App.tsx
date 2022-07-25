import { useState } from "react";
import { SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import List from "./src/components/List";

export default function App() {
  const [textInputText, setTextInputText] = useState("");
  const [listItems, setListItems] = useState<{ text: string; id: string }[]>([]);

  const onTextChangeHandler = (enteredText: string) => {
    setTextInputText(enteredText);
  };

  const onButtonPressHandler = () => {
    setListItems((prevItems) => [...prevItems, { text: textInputText, id: Math.random().toString() }]);
  };

  return (
    <TailwindProvider>
      {/* Top iphone status bar for network signals and time */}
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView className="flex-1 bg-slate-900">
        <View className="px-3 flex-1 ">
          {/* Input Header */}
          <View className="flex-row mt-5 pb-6 items-center border-b-2 border-gray-500">
            <TextInput
              onChangeText={onTextChangeHandler}
              className="flex-1 border-2 border-gray-500 p-2 bg-slate-700 placeholder:text-white text-white"
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
          <List data={listItems} />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
