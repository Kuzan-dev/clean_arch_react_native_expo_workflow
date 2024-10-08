import { Redirect, Stack } from "expo-router";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Platform,
  Text,
} from "react-native";
import { COLORS } from "@/constants/Colors";
import { useSession } from "@/src/Presentation/hooks/useSession";
import { LogLevel, OneSignal } from "react-native-onesignal";
import Constants from "expo-constants";

export default function AppLayout() {
  const { session, isLoading, userType } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }

  // Config OneSignal
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(Constants.expoConfig?.extra?.oneSignalAppId);
  // Also need enable notifications to complete OneSignal setup
  OneSignal.Notifications.requestPermission(true);
  // If the user is logged in, set their ID and user type in OneSignal
  if (session) {
    OneSignal.User.addTags({ userType: userType });
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />;
  }
  // Check userType and redirect if necessary
  if (userType !== "admin") {
    return <Redirect href="/" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="perfil"
        options={{
          headerTitle: "Perfil",
          headerBackTitleVisible: false, // Esto ocultará el título de la ruta a la que se regresa
          headerShadowVisible: false,
          headerBlurEffect: "regular",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="progrmantenimiento"
        options={{
          headerLargeTitle: true,
          headerTitle: "Programar Mantenimiento",
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerBlurEffect: "regular",

          headerLargeTitleStyle: {
            fontSize: 25,
          },
          headerShadowVisible: false,

          headerBackTitle: "Inicio",
        }}
      />
      <Stack.Screen
        name="regisunidad"
        options={{
          headerLargeTitle: true,
          headerTitle: "Registrar Unidad",
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerBlurEffect: "regular",

          headerLargeTitleStyle: {
            fontSize: 25,
          },
          headerShadowVisible: false,

          headerBackTitle: "Inicio",
        }}
      />
      <Stack.Screen
        name="registrarfactura"
        options={{
          headerLargeTitle: true,
          headerTitle: "Registrar Facturación",
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerBlurEffect: "regular",

          headerLargeTitleStyle: {
            fontSize: 25,
          },
          headerShadowVisible: false,

          headerBackTitle: "Inicio",
        }}
      />
      <Stack.Screen
        name="[detalles]"
        options={{
          headerTitle: "Detalles Mantenimiento",
          headerTransparent: Platform.OS === "ios" ? true : false,
          headerBlurEffect: "regular",
          presentation: "modal",

          headerShadowVisible: false,

          headerBackTitle: "Inicio",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
