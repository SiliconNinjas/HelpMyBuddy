import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Screens
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./components/Navigation";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}
        <Stack.Screen name="Nav" component={Navigation} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
