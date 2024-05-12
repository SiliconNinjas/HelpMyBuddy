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
import { homeScreenData } from "../constants/homeScreenData";
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
        <TaskComponent
          name={"Ashrrith"}
          timeAgo={"5 minutes ago"}
          title={"Need help with groceries"}
          description={
            "I need help with getting groceries from the nearby store. I am unable to go out due to the lockdown."
          }
          price={230}
          distance={"1"}
        />
        <TaskComponent
          name={"Ramith"}
          timeAgo={"7 minutes ago"}
          title={"I want someone to walk my dog"}
          description={
            "My dog is very active and I am unable to take him out for a walk. I need someone to walk him for me."
          }
          price={"300"}
          distance={"2.3"}
        />
        <TaskComponent
          name={"Alphin"}
          timeAgo={"30 minutes ago"}
          title={"Cat walking assistance needed"}
          description={
            "Looking for someone to walk my cat since I'm tied up with work all day."
          }
          price={150}
          distance={"2.9"}
        />
        <TaskComponent
          name={"John"}
          timeAgo={"1 hour ago"}
          title={"Help with moving furniture"}
          description={
            "Need assistance with moving heavy furniture items to my new apartment."
          }
          price={350}
          distance={"5"}
        />
        <TaskComponent
          name={"Samantha"}
          timeAgo={"2 days ago"}
          title={"Gardening help needed"}
          description={
            "Looking for someone to help with weeding and planting in my garden."
          }
          price={120}
          distance={"2"}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
