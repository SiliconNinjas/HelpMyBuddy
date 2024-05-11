import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, Text, TextInput, View } from "react-native";

import MyTaskScreen from "./MyTaskScreen";
import PostedTaskScreen from "./PostedTasksScreen";
import themeColors from "../themes";
import TopBar from "../components/TopBar";

const Tab = createMaterialTopTabNavigator();
const StatusScreen = () => {
  return (
    <Tab.Navigator className="mt-16">
      <Tab.Screen name="MyTask" component={MyTaskScreen} />
      <Tab.Screen name="PostedTask" component={PostedTaskScreen} />
    </Tab.Navigator>
  );
};

export default StatusScreen;
