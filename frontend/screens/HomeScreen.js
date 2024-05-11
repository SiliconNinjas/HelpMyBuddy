import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { themeColors } from "../themes";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgColor, height: "100%" }}
    >
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <Text className="text-2xl font-bold text-white">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
