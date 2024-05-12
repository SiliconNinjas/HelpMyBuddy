import { View, Image } from "react-native";
import { OnboardFlow } from "react-native-onboard";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { setOnboarded } from "../redux/slice/homeSlice";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: themeColors.bgColor }}>
      <OnboardFlow
        pages={[
          {
            title: "HelpMyBuddy",
            subtitle: "Your friendly neighborhood app",
            imageUri: Image.resolveAssetSource(
              require("../assets/onboarding1.png")
            ).uri,
          },
          {
            title: "Book in few minutes",
            subtitle:
              "Get help in minutes. Your helper arrives on time, ready to work. Relax while your chores get done.",
            imageUri: Image.resolveAssetSource(
              require("../assets/onboarding2.png")
            ).uri,
          },
          {
            title: "Book a task and get help",
            subtitle:
              "After finding a helper, you can quickly book a task and receive confirmation. Your helper will then contact you to arrange a meeting time.",
            imageUri: Image.resolveAssetSource(
              require("../assets/onboarding3.png")
            ).uri,
          },
        ]}
        primaryButtonStyle={{ backgroundColor: "#FE914C" }}
        type={"fullscreen"}
        onDone={() => navigation.navigate("Auth")}
      />
    </View>
  );
};

export default OnboardingScreen;
