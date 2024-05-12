import { SafeAreaView, Text, View, ScrollView } from "react-native";
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
} from "../redux/slice/profileSlice";

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

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleSave = () => {
    // Save the changes here
    console.log(inputText);
    if (editingTitle === "Email") dispatch(setEmail(inputText));
    else if (editingTitle === "Name") dispatch(setFullName(inputText));
    else if (editingTitle === "Gender") dispatch(setGender(inputText));
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
