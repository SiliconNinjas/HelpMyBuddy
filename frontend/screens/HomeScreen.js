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

const HomeScreen = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = AsyncStorage.getItem("token"); // Get token from local storage
        const response = await axios.get(
          `${constants.baseUrl}/user/loginOrSignup`,
          { headers: { Authorization: `Bearer ${token}` } } // Add token to request headers
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
