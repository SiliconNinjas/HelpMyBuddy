import { SafeAreaView, Text, TextInput, View } from "react-native";
import { themeColors } from "../themes";

const ConfirmHelpBtn = () => {
  return (
    <View>
      <View className="flex flex-row justify-center mt-5 px-4">
        <View
          className="w-full h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: themeColors.activeTint }}
        >
          <Text className="text-lg text-white">Confirm Help</Text>
        </View>
      </View>
    </View>
  );
};

export default ConfirmHelpBtn;
