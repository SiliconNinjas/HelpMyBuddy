import { View, Text, Image } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import menu from "../assets/menu.png";

const TopBar = ({ pageName }) => {
  return (
    <View
      style={{ backgroundColor: themeColors.secondaryBgColor }}
      className="flex flex-row justify-between items-center rounded-b-xl p-4 pt-14"
    >
      <View className="ml-4 mt-2">
        <Text className="text-xl font-bold text-white ">{pageName}</Text>
      </View>

      <Image source={menu} />
    </View>
  );
};

export default TopBar;
