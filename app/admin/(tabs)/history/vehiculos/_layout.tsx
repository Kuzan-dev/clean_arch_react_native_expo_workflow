import { Stack } from "expo-router";
import { Platform } from "react-native";
import { COLORS } from "@/constants/Colors";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.bg2 : "transparent",
          },
          headerTitle: "Vehiculos",
          headerLargeTitle: true,
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerBlurEffect: "regular",

          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerTitle: "Detalles",
          headerTitleAlign: "center",
          headerBlurEffect: "regular",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? COLORS.bg2 : "transparent",
          },
        }}
      />
    </Stack>
  );
}
