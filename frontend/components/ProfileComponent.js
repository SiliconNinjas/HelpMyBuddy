import { Button, View, Text } from "react-native";
import { themeColors } from "../themes";

const ProfileComponent = ({
  title,
  data,
  buttonName,
  onPress,
  buttonStyle,
  color,
}) => {
  return (
    <View className="flex flex-row justify-between items-center mt-2 mb-2">
      <View className="flex flex-col ml-4 mt-2">
        <Text className="text-xs text-slate-500 ">{title}</Text>
        <Text className="text-xl text-slate-50 ">{data}</Text>
      </View>
      <View className="mr-4">
        <Button
          title={buttonName}
          onPress={onPress}
          color={color || "white"}
          className="mr-4"
          style={buttonStyle}
        />
      </View>
    </View>
  );
};

export default ProfileComponent;
