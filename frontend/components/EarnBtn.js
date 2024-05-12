import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const EarnBtn = ({ price, navigation }) => {
  navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailTaskHome")}>
      <View className="flex flex-row justify-center mt-5 px-4">
        <View
          className="w-36 h-14 rounded-xl flex items-center justify-center flex-row"
          style={{ backgroundColor: themeColors.activeTint }}
        >
          <View className="flex-col">
            <Text className="text-lg text-bold text-black">Earn ₹{price}</Text>
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
    </TouchableOpacity>
  );
};

export default EarnBtn;
