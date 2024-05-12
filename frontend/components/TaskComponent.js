import { SafeAreaView, Text, TextInput, View, Image } from "react-native";
import { themeColors } from "../themes";
import placeHolder from "../assets/placeholderImg.jpeg";
import EarnBtn from "./EarnBtn";
import ProfilePhotoComponent from "./ProfilePhotoComponent";
import { useNavigation } from "@react-navigation/native";

const TaskComponent = ({
  title,
  description,
  name,
  timeAgo,
  price,
  distance,
  item,
  navigation,
}) => {
  return (
    <View className="px-3">
      <View
        className="flex mt-10 w-full rounded-xl h-wrap flex-col"
        style={{ backgroundColor: themeColors.secondaryBgColor }}
      >
        <ProfilePhotoComponent name={name} timeAgo={timeAgo} />
        <View className="mt-5 ml-5">
          <Text className="text-2xl text-white">{title}</Text>
        </View>
        <View className="mt-5 ml-5">
          <Text className="text-md text-white">{description}</Text>
        </View>

        <View className="flex-row mt-4 mb-4 justify-between items-center">
          <View
            className="w-1/3 ml-4 p-2 h-wrap rounded-xl"
            style={{ backgroundColor: themeColors.bgColor }}
          >
            <Text className="text-xs text-green-500 ml-5">
              {distance}Kms away
            </Text>
          </View>
          <EarnBtn price={price} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default TaskComponent;
