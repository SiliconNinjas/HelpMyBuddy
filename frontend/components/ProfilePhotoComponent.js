import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import placeHolder from "../assets/placeholderImg.jpeg";

const ProfilePhotoComponent = () => {
  return (
    <View className="flex-row items-center">
      <Image
        className="mt-5 w-7 h-7 mr-3 ml-3 rounded-full"
        source={placeHolder}
      />
      <View className="flex-col">
        <Text className="text-lg font-semibold text-white mt-4">Name</Text>
        <Text className="text-xs font-medium text-slate-500">
          Added 1 Hrs Ago
        </Text>
      </View>
    </View>
  );
};

export default ProfilePhotoComponent;
