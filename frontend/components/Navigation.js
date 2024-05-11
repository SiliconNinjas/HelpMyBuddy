import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";

//Screens
import HomeScreen from "../screens/HomeScreen";
import CreateScreen from "../screens/CreateScreen";
import StatusScreen from "../screens/StatusScreen";
import ProfileScreen from "../screens/ProfileScreen";

//Screen Names
const home = "Home";
const create = "Create";
const status = "Status";
const profile = "Profile";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === home) {
            iconName = "home";
            // return <Feather name={iconName} size={size} color={color}  />;
          } else if (route.name === create) {
            iconName = "plus-circle";
            // return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === status) {
            iconName = "clock";
          } else if (route.name === profile) {
            iconName = "user";
          }

          return <Feather name={iconName} size={20} color={color} />;
          //return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          paddingBottom: 25,
          paddingTop: 10,
          height: 80,
          backgroundColor: "#21262E",
          borderTopWidth: 0.5,
          elevation: 5,
          borderTopEndRadius: 3,
          borderTopStartRadius: 3,
        },
        tabBarActiveTintColor: "#FE914C",

        tabBarOptions: {
          activeTintColor: "#FFCFB1",
          inactiveTintColor: "gray",
          labelStyle: { paddingBottom: 10, fontSize: 12 },
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Create"
        options={{ presentation: "modal" }}
        component={CreateScreen}
      />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Options" options={{presentation: 'modal'}} component={OptionsScreen} /> */}
    </Tab.Navigator>
  );
};

export default Navigation;
