import { SafeAreaView, Text, TextInput, View, Image } from "react-native";
import { themeColors } from "../themes";
import placeHolder from "../assets/placeholderImg.jpeg";
import EarnBtn from "./EarnBtn";
import * as Icon from "react-native-feather";
import ProfilePhotoComponent from "./ProfilePhotoComponent";

const CurrentTaskComponent = () => {
  return (
    <View className="px-3">
      <View
        className="flex mt-10 w-full rounded-xl h-wrap flex-row justify-between items-center px-3 py-2"
        style={{ backgroundColor: themeColors.secondaryBgColor }}
      >
        <View className="flex-col">
          <ProfilePhotoComponent />
          <View className="mt-5 ml-5">
            <Text className="text-2xl text-white font-bold ">Title</Text>
          </View>
          <View className="mt-5 ml-5 mb-5">
            <Text className="text-md text-white">Description</Text>
          </View>
        </View>
        <View className="flex-row mt-4 mb-4 justify-between items-center">
          <Icon.ArrowUpRight className="ml-5" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default CurrentTaskComponent;
