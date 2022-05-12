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
import PreviousNotices from "./src/screens/PreviousNotices";
import LeaveAppeals from "./src/screens/BrowseLeaveAppeals";
import AppealLeave from "./src/screens/AppealLeave";
import * as SecureStore from "expo-secure-store";

import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
export default function App() {
  const [date, setDate] = useState(null);
  const [defaultScreen, setDefaultScreen] = useState("Welcome");

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("user");
    if (token) {
      console.log(token);
      const role = JSON.parse(token).role;
      if (role === "parent") {
        setDefaultScreen("Parenthome");
      } else {
        setDefaultScreen("Teacherhome");
      }
      // navigation.navigate(
      //   `${role === "parent" ? "Parenthome" : "Teacherhome"}`
      // );
    }
  };

  useEffect(() => {
    getToken();
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
    Poppins_400Regular,
    Poppins_300Light,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={defaultScreen}>
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

        <>
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
        </>
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
        <Stack.Screen
          name="PreviousNotices"
          component={PreviousNotices}
          options={{
            title: "Previous Notices",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
        <Stack.Screen
          name="BrowseLeaveAppeals"
          component={LeaveAppeals}
          options={{
            title: "Leave Appeals",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
        <Stack.Screen
          name="AppealLeave"
          component={AppealLeave}
          options={{
            title: "Appeal leave",
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
