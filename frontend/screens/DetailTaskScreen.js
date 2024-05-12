import { SafeAreaView, Text, View, ScrollView } from "react-native";
import * as Icons from "react-native-feather";
import { themeColors } from "../themes";
import ProfilePhotoComponent from "../components/ProfilePhotoComponent";
import ConfirmHelpBtn from "../components/ComfirmHelpBtn";

const DetailTaskScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgColor, height: "100%" }}
      className="flex"
    >
      <View className="flex flex-row items-center">
        <Icons.ChevronLeft height="28" width="28" stroke="white" />
        <Text className="ml-7 text-lg font-semibold text-white">
          Task Details
        </Text>
      </View>
      <ScrollView>
        <View className="px-6 mt-3 flex-col">
          <Text className="text-white text-3xl pl-5 pr-2 mt-5">Title</Text>
          <ProfilePhotoComponent />
          <Text className="text-slate-200 mt-4 text-lg pl-5 pr-2">
            Help me to write a hand written assignment on A4 paper .Torto vel
            fames est posuere. Et suspendisse sem dui faucius.Pellentesque
            varius sit amet nunc. Quam gravida vitae sit ornare suscipit. In
            morbi scelerisque ultrices suspendisse cursus quis turpis amet ut.
            Volutpat sem lobortis diam phasellus sollicitudin amet. Enim
            malesuada bibendum vestibulum in mi mattis volutpat etiam. Accumsan
            diam felis fermentum nisi cras aliquet viverra. Posuere lacus massa
            porta tincidunt tincidunt et dictum. Nunc nisi bibendum elit ut.
            Enim sit proin odio condimentum. Ullamcorper enim egestas sit cursus
            eget.
          </Text>
        </View>

        <View className="px-6 mt-3">
          <Text className="text-white mt-4 text-lg">You will earn: Rs.100</Text>
          <Text className="text-slate-500 mt-2 text-sm">
            We will transfer your earnings to your UPI ID once the total
            earnings are greater than ₹3000
          </Text>
        </View>
        <ConfirmHelpBtn BtnText={"Confirm"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailTaskScreen;
