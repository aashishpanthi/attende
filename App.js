import React, { useState, useEffect } from "react";
import Loginparent from "./src/screens/Loginparent";
import Loginteacher from "./src/screens/Loginteacher";
import Welcome from "./src/screens/Welcome";
import colors from "./config/colors";
import Teacherhome from "./src/screens/Teacherhome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Takeattendance from "./src/screens/TakeAttendance";
import Parenthome from "./src/screens/Parenthome";
import CreateNotice from "./src/screens/CreateNotice";

import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_100Thin,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Attendance"
          component={Takeattendance}
          options={{
            title: "Attendance: " + date,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontFamily: "Poppins_500Medium",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Loginp"
          component={Loginparent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Logint"
          component={Loginteacher}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Teacherhome"
          component={Teacherhome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Parenthome"
          component={Parenthome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateNotice"
          component={CreateNotice}
          options={{
            title: "Create Notice",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
