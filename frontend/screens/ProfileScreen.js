import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { themeColors } from "../themes";
import ProfileComponent from "../components/ProfileComponent";
import TopBar from "../components/TopBar";
import Dialog from "react-native-dialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFullName,
  setEmail,
  setGender,
  setDateOfBirth,
  setPhoneNumber,
  setLocation,
  setAddress,
  setUpi,
  setTotalEarnings,
  setIsEligible,
} from "../redux/slice/profileSlice";
import placeHolder from "../assets/placeholderImg.jpeg";

const ProfileScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [editingTitle, setEditingTitle] = useState("");

  const dispatch = useDispatch();

  const fullname = useSelector((state) => state.profile.fullname);
  const email = useSelector((state) => state.profile.email);
  const gender = useSelector((state) => state.profile.gender);
  const dateofbirth = useSelector((state) => state.profile.dateofbirth);
  const phoneNumber = useSelector((state) => state.profile.phoneNumber);
  const location = useSelector((state) => state.profile.Location);
  const address = useSelector((state) => state.profile.Address);
  const upi = useSelector((state) => state.profile.Upi);
  const totalEarnings = useSelector((state) => state.profile.TotalEarnings);
  const isEligible = useSelector((state) => state.profile.isEligible);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleSave = () => {
    // Save the changes here
    console.log(inputText);
    if (editingTitle === "Email") {
      fetch(`${constants.baseUrl}/user/updateUserInfo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: inputText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (editingTitle === "Name") {
      fetch(`${constants.baseUrl}/user/updateUserInfo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: inputText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    ``;
    setDialogVisible(false);
  };
  return (
    <View style={{ backgroundColor: themeColors.bgColor }} className="h-full">
      <TopBar pageName="Profile" />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Profile */}
        <View className="flex-row items-center">
          <Image
            className="mt-5 w-12 h-12 mr-3 ml-3 rounded-full"
            source={placeHolder}
          />
          <View className="flex-col">
            <Text className="text-xl font-semibold text-white mt-4">
              {fullname || "NA"}
            </Text>
            {isEligible ? (
              <Text className="text-md font-medium text-green-500">
                Eligible
              </Text>
            ) : (
              <Text className="text-md font-medium text-red-500">
                Not Eligible
              </Text>
            )}
          </View>
        </View>
        {/* Withdraw */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <View className="">
            <ProfileComponent
              title="Total Earnings"
              data={totalEarnings || "0.00"}
              buttonName="Withdraw"
              color="#FFFFFF"
            />
          </View>
        </View>

        {/* Personal Details */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent
            title="Name"
            data={fullname || "NA"}
            buttonName="Edit"
          />
          <ProfileComponent
            title="Email"
            data={email}
            buttonName="Edit"
            onPress={showDialog}
          />
          <Dialog.Container visible={dialogVisible}>
            <Dialog.Title>Edit {editingTitle}</Dialog.Title>
            <Dialog.Input onChangeText={setInputText} />
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="Save" onPress={handleSave} />
          </Dialog.Container>
          <ProfileComponent title="Gender" data={gender} buttonName="Edit" />
          <ProfileComponent
            title="Date of Birth"
            data={dateofbirth || "NA"}
            buttonName="Edit"
          />
          <ProfileComponent
            title="Phone"
            data={phoneNumber || "NA"}
            buttonName="Edit"
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent
            title="Job Description"
            data={fullname || "NA"}
            buttonName="Edit"
          />
        </View>

        {/* Location/UPI/AADHAR */}
        <View
          style={{ backgroundColor: themeColors.secondaryBgColor }}
          className="rounded-xl mt-10 ml-4 mr-4 p-4"
        >
          <ProfileComponent
            title="Location"
            data={location || "NA"}
            buttonName="Edit"
          />
          <ProfileComponent
            title="Address"
            data={address || "NA"}
            buttonName="Upload"
          />
          <ProfileComponent
            title="UPI VPA"
            data={upi || "NA"}
            buttonName="Add"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
