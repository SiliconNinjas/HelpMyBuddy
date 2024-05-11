import { SafeAreaView, Text, TextInput, View } from "react-native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";

const EarnBtn = () => {
  return (
    <View>
      <View className="flex flex-row justify-center mt-5 px-4">
        <View
          className="w-36 h-14 rounded-xl flex items-center justify-center flex-row"
          style={{ backgroundColor: themeColors.activeTint }}
        >
          <View className="flex-col">
            <Text className="text-lg text-bold text-black">Earn ₹299</Text>
            <Text className="text-xs text-black">Provide Help</Text>
          </View>
          <Icon.ArrowUpRight
            className="ml-2"
            height="20"
            width="20"
            stroke="black"
          />
        </View>
      </View>
    </View>
  );
};

export default EarnBtn;
