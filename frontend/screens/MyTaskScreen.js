import { SafeAreaView, Text, TextInput, View } from "react-native";
import * as Icons from "react-native-feather";
import { themeColors } from "../themes";
import TopBar from "../components/TopBar";
import CurrentTaskComponent from "../components/CurrentTaskComponent";
import TextInputComponent from "../components/TextInputComponent";
import EarnBtn from "../components/EarnBtn";
import ConfirmHelpBtn from "../components/ComfirmHelpBtn";
const MyTaskScreen = () => {
  return (
    <View className="h-full" style={{ backgroundColor: themeColors.bgColor }}>
      <CurrentTaskComponent />

      {/* Direction */}
      <View
        className="flex-col w-1/3 ml-4 p-2 h-wrap rounded-xl mt-5"
        style={{ backgroundColor: themeColors.secondaryBgColor }}
      >
        <View className=" flex-row justify-center items-center mt-2">
          <Icons.Compass className="text-green-500" />
          <Text className="text-xs text-green-500 ml-5">3Kms away</Text>
        </View>
        <View>
          <Text className="text-white text-center mt-3 mb-2 text-md">
            Get Direction
          </Text>
        </View>
      </View>

      {/* Start OTP */}
      <View className="flex-col">
        <Text className="text-white text-center mt-8 text-2xl">
          Task Start OTP
        </Text>
        <TextInputComponent title={"Start OTP"} />
        <ConfirmHelpBtn BtnText={"Confirm"} />
      </View>
    </View>
  );
};

export default MyTaskScreen;
