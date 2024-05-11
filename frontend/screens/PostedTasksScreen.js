import { SafeAreaView, Text, TextInput, View } from "react-native";
import * as Icons from "react-native-feather";
import { themeColors } from "../themes";
import CurrentTaskComponent from "../components/CurrentTaskComponent";
import TextInputComponent from "../components/TextInputComponent";
import ConfirmHelpBtn from "../components/ComfirmHelpBtn";
const PostedTaskScreen = () => {
  return (
    <View className="h-full" style={{ backgroundColor: themeColors.bgColor }}>
      <CurrentTaskComponent />

      {/* Start OTP */}
      <View className="flex-col">
        <Text className="text-white text-center mt-8 text-2xl">
          Task Start OTP
        </Text>
        <Text className="text-white text-center mt-8 text-xl">Your OTP is</Text>
        <Text className="text-white text-center mt-3 text-xl">1234</Text>
      </View>
    </View>
  );
};

export default PostedTaskScreen;
