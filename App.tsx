import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import InputHeader from "./src/components/InputHeader";
import List from "./src/components/List";

export default function App() {
  const [listItems, setListItems] = useState<{ text: string; id: string }[]>([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddItemHandler = () => {
    setModalIsVisible(true);
  };

  const endAddItemHandler = () => {
    setModalIsVisible(false);
  };

  const onAddButtonPressHandler = (inputText: string) => {
    setListItems((prevItems) => [...prevItems, { text: inputText, id: Math.random().toString() }].reverse());
    setModalIsVisible(false);
  };

  const onDeletePressHandler = (id: string) => {
    setListItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <TailwindProvider>
      {/* Top iphone status bar for network signals and time */}
      <StatusBar style="auto" />
      <SafeAreaView className="flex-1 relative">
        <View className="px-4 flex-1 flex-col items-center mt-2">
          {/* Modal opening button */}
          <Pressable onPress={startAddItemHandler} className="p-3 w-1/3 bg-slate-700 rounded-full active:bg-slate-500">
            <Text className="text-gray-200 text-center text-base font-bold">Add item</Text>
          </Pressable>
          {/* Input Header */}
          <InputHeader
            onCloseModal={endAddItemHandler}
            showModal={modalIsVisible}
            onButtonPressHandler={onAddButtonPressHandler}
          />
          {/* Items list */}
          <View className="w-full flex-1 mt-5">
            <List onDeletePress={onDeletePressHandler} data={listItems} />
          </View>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
