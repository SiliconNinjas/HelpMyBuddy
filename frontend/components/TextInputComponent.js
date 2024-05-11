import { SafeAreaView, Text, TextInput, View } from "react-native";
import { themeColors } from "../themes";

const TextInputComponent = ({ title, onChange }) => {
  return (
    <View className="px-6 mt-5">
      <View
        className="w-full h-14 rounded-xl flex"
        style={{ backgroundColor: themeColors.secondaryBgColor }}
      >
        <TextInput
          className="w-full h-14 ml-4 text-lg text-white"
          placeholder={title}
          placeholderTextColor="gray"
          onChangeText={onChange}
        ></TextInput>
      </View>
    </View>
  );
};

export default TextInputComponent;
