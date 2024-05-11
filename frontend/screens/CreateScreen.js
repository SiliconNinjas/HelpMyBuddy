import { SafeAreaView, Text, TextInput, View } from "react-native";
import * as Icons from "react-native-feather";
import { themeColors } from "../themes";
import TextInputComponent from "../components/TextInputComponent";
import ConfirmHelpBtn from "../components/ComfirmHelpBtn";

const CreateScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgColor, height: "100%" }}
      className="flex"
    >
      <View className="flex flex-row items-center">
        <Icons.ChevronLeft height="28" width="28" stroke="white" />
        <Text className="ml-5 text-lg font-semibold text-white">Ask help</Text>
      </View>

      <TextInputComponent title={"Task Title"} />
      <TextInputComponent title={"Task Description"} />
      <TextInputComponent title={"Address"} />
      <TextInputComponent title={"Task Price"} />

      <View className="px-6 mt-3">
        <Text className="text-white mt-4 text-lg">You have to pay: Rs.100</Text>
        <Text className="text-slate-500 mt-2 text-sm">
          Amount will be refunded to your source incase the job is not accepted
          within the mentioned time.
        </Text>
      </View>
      <ConfirmHelpBtn BtnText={"Get Help"} />
    </SafeAreaView>
  );
};

export default CreateScreen;
