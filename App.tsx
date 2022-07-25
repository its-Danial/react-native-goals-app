import { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import InputHeader from "./src/components/InputHeader";
import List from "./src/components/List";

export default function App() {
  const [listItems, setListItems] = useState<{ text: string; id: string }[]>([]);

  const onAddButtonPressHandler = (inputText: string) => {
    setListItems((prevItems) => [...prevItems, { text: inputText, id: Math.random().toString() }]);
  };

  const onDeletePressHandler = (id: string) => {
    setListItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <TailwindProvider>
      {/* Top iphone status bar for network signals and time */}
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView className="flex-1 bg-slate-900">
        <View className="px-4 flex-1 ">
          {/* Input Header */}
          <InputHeader onButtonPressHandler={onAddButtonPressHandler} />

          {/* Items list */}
          <List onDeletePress={onDeletePressHandler} data={listItems} />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
