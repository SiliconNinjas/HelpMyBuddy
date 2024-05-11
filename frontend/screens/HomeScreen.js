import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TopBar from "../components/TopBar";
import { themeColors } from "../themes";
import TaskComponent from "../components/TaskComponent";

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
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
