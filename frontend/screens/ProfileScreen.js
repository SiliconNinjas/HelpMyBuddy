import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { themeColors } from "../themes";
import ProfileComponent from "../components/ProfileComponent";
import TopBar from "../components/TopBar";

const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: themeColors.bgColor }} className="h-full">
      <TopBar pageName="Profile" />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Withdraw */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent
            title="Total Earnings"
            data="Rs.0.0"
            buttonName="Withdraw"
          />
        </View>

        {/* Personal Details */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent title="Name" data="John Doe" buttonName="Edit" />
          <ProfileComponent
            title="Email"
            data="jd@gmail.com"
            buttonName="Edit"
          />
          <ProfileComponent title="Gender" data="NA" buttonName="Edit" />
          <ProfileComponent title="Date of Birth" data="NA" buttonName="Edit" />
          <ProfileComponent title="Phone" data="NA" buttonName="Edit" />
        </View>

        {/* Location/UPI/AADHAR */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent title="Location" data="NA" buttonName="Edit" />
          <ProfileComponent
            title="Email"
            data="jd@gmail.com"
            buttonName="Edit"
          />
          <ProfileComponent title="Aadhar" data="NA" buttonName="Upload" />
          <ProfileComponent title="UPI VPA" data="NA" buttonName="Add" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
