import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TopBar from "../components/TopBar";
import { themeColors } from "../themes";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: themeColors.bgColor, height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <TopBar pageName="Help Buddy - Home" />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row items-center space-x-2 px-4 pb-2">
          <Text className="text-2xl font-bold text-white">Home</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
