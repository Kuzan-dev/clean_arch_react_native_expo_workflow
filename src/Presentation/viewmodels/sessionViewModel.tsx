// presentation/viewmodels/sessionViewModel.ts
import { useStorageState } from "../context/useStorageState";
import { AuthenticationRepository } from "@/src/Data/api/authenticationRepository";
import { Alert } from "react-native";

export function useSessionViewModel() {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [[isLoadingUserType, userType], setUserType] =
    useStorageState("userType");
  const [[isLoadingDateEnd, dateEnd], setDateEnd] = useStorageState("dateend");
  const authRepo = new AuthenticationRepository();

  const signIn = async (username: string, password: string) => {
    try {
      const decodedToken = await authRepo.authenticate(username, password);
      const user = decodedToken.username;
      const nivel = decodedToken.nivel;
      const exp = decodedToken.exp;
      const expDate = new Date(exp * 1000);
      console.log(expDate);
      // Comprueba si el token ha expirado
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const currentDate = new Date();
      console.log(currentDate);
      if (exp < currentTimestamp) {
        Alert.alert("El token ha expirado");

        return;
      }

      setSession(user);
      setUserType(nivel);
      setDateEnd(exp);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Usuario o contraseña incorrectos ");
    }
  };

  const signOut = () => {
    setSession(null);
    setUserType(null);
    setDateEnd(null);
  };

  return {
    signIn,
    signOut,
    dataEnd: dateEnd as number | null,
    session,
    userType: userType as "admin" | "tecnico" | null,
    isLoading: isLoading || isLoadingUserType || isLoadingDateEnd,
  };
}