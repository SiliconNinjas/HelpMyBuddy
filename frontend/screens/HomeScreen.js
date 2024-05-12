import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TopBar from "../components/TopBar";
import { themeColors } from "../themes";
import TaskComponent from "../components/TaskComponent";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { constants } from "../constants";
import {
  setFullName,
  setEmail,
  setGender,
  setDateOfBirth,
  setPhoneNumber,
} from "../redux/slice/profileSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = await AsyncStorage.getItem("token"); // Get token from local storage
        if (!token) {
          console.error("Token not found");
          return;
        }

        const response = await axios.get(
          `${constants.baseUrl}/user/getUserInfo`,
          { headers: { Authorization: `Bearer ${token}` } } // Add token to request headers
        );
        console.log(token);
        console.log(response);
        console.log(response.error);
        console.log(response.data.data.email);
        dispatch(setFullName(response.data.data.fullName));
        dispatch(setEmail(response.data.data.email));
        dispatch(setGender(response.data.data.gender));
        dispatch(setDateOfBirth(response.data.data.dateofbirth));
        dispatch(setPhoneNumber(response.data.data.phoneNumber));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <View style={{ backgroundColor: themeColors.bgColor, height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <TopBar pageName="Help Buddy - Home" />
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <TaskComponent />
        <TaskComponent />
        <TaskComponent />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
