import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { themeColors } from "../themes";
import hey_svg from "../assets/hey_svg.png";
import logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { constants } from "../constants";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${constants.baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Handle successful login here (e.g., navigate to another screen)
      if (data.status === true) {
        console.log("Successfully logged in");
        navigate.navigate("Nav");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgColor }}
      className="h-full"
    >
      <View className="flex-1 justify-center items-center">
        <Image source={hey_svg} className="mt-10" />
        <Text className="text-3xl font-bold mt-10 text-white">Welcome to</Text>
        <Image className="mt-5" source={logo} />
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={60}>
          <View
            style={{ backgroundColor: themeColors.secondaryBgColor }}
            className="w-full px-10 py-1 mt-4 items-center rounded"
          >
            <TextInput
              className="mt-4 px-3 py-2 text-white rounded w-full"
              placeholder="Email"
              placeholderTextColor={themeColors.text}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View
            style={{ backgroundColor: themeColors.secondaryBgColor }}
            className=" w-full px-10 py-1 mt-4 items-center rounded"
          >
            <TextInput
              className="mt-4 text-white px-3 py-2 rounded w-full"
              placeholder="Password"
              placeholderTextColor={themeColors.text}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View className="w-40 h-14 mt-5 rounded-xl flex justify-center items-center bg-orange">
            <Button
              title="Login"
              color={themeColors.text}
              onPress={handleLogin}
              className="mt-4"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
