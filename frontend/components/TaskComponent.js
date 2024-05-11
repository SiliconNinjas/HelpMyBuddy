import { SafeAreaView, Text, TextInput, View, Image } from "react-native";
import { themeColors } from "../themes";
import placeHolder from "../assets/placeholderImg.jpeg";
import EarnBtn from "./EarnBtn";
import ProfilePhotoComponent from "./ProfilePhotoComponent";

const TaskComponent = () => {
  return (
    <View className="px-3">
      <View
        className="flex mt-10 w-full rounded-xl h-wrap flex-col"
        style={{ backgroundColor: themeColors.secondaryBgColor }}
      >
        <ProfilePhotoComponent />
        <View className="mt-5 ml-5">
          <Text className="text-2xl text-white">Title</Text>
        </View>
        <View className="mt-5 ml-5">
          <Text className="text-md text-white">Description</Text>
        </View>

        <View className="flex-row mt-4 mb-4 justify-between items-center">
          <View
            className="w-1/3 ml-4 p-2 h-wrap rounded-xl"
            style={{ backgroundColor: themeColors.bgColor }}
          >
            <Text className="text-xs text-green-500 ml-5">3Kms away</Text>
          </View>
          <EarnBtn />
        </View>
      </View>
    </View>
  );
};

export default TaskComponent;
