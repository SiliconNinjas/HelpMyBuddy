import { SafeAreaView, Text, TextInput, View, Alert } from "react-native";
import * as Icons from "react-native-feather";
import { themeColors } from "../themes";
import TextInputComponent from "../components/TextInputComponent";
import ConfirmHelpBtn from "../components/ComfirmHelpBtn";
import { useState } from "react";
import { constants } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateScreen = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [address, setAddress] = useState("");
  const [taskPrice, setTaskPrice] = useState("");
  const [lat, setLat] = useState("12.93085110917127");
  const [long, setLong] = useState("77.6106928194742");

  const postTask = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${constants.baseUrl}/task/askHelp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          taskTitle,
          taskDescription,
          taskGeoLocation: {
            // Add a colon (:) after taskGeoLocation to define it as an object
            lat,
            long,
          },
          taskPrice,
          address,
          // Add a comma (,) after long to separate it from lat
        }),
      });
      console.log(response);
      console.log(token);

      // Handle successful login here (e.g., navigate to another screen)
      if (response.status === 200) {
        setTaskTitle("");
        setTaskDescription("");
        setAddress("");
        setTaskPrice("");
        navigate.navigate("Home");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgColor, height: "100%" }}
      className="flex"
    >
      <View className="flex flex-row items-center">
        <Icons.ChevronLeft height="28" width="28" stroke="white" />
        <Text className="ml-5 text-lg font-semibold text-white">Ask help</Text>
      </View>

      <TextInputComponent
        title={"Task Title"}
        onChange={setTaskTitle}
        value={taskTitle}
      />
      <TextInputComponent
        title={"Task Description"}
        onChange={setTaskDescription}
        value={taskDescription}
      />
      <TextInputComponent
        title={"Address"}
        onChange={setAddress}
        value={address}
      />
      <TextInputComponent
        title={"Task Price"}
        onChange={setTaskPrice}
        value={taskPrice}
      />

      <View className="px-6 mt-3">
        <Text className="text-white mt-4 text-lg">
          {`You have to pay: ` + `₹` + taskPrice}
        </Text>
        <Text className="text-slate-500 mt-2 text-sm">
          Amount will be refunded to your source incase the job is not accepted
          within the mentioned time.
        </Text>
      </View>
      <ConfirmHelpBtn BtnText={"Get Help"} onPress={postTask} />
    </SafeAreaView>
  );
};

export default CreateScreen;
