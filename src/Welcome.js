import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

function Welcome({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_100Thin,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Text style={styles.head}>Login as</Text>

      {Platform.OS === "android" ? (
        <>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Loginp")}
          >
            <View style={styles.container}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require("../assets/parent1.png")}
              />
              <Text style={styles.txt}> A parent</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Logint")}
          >
            <View style={styles.container}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require("../assets/teacher.png")}
              />
              <Text style={styles.txt}>A teacher</Text>
            </View>
          </TouchableNativeFeedback>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate("Loginp")}>
            <View style={styles.container}>
              <Image
                style={styles.img}
                resizeMode="center"
                source={require("../assets/parent.png")}
              />
              <Text style={styles.txt}>A parent</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Logint")}>
            <View style={styles.container}>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={require("../assets/teacher.png")}
              />
              <Text style={styles.txt}>A Teacher</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#666",
    elevation: 25,
  },
  head: {
    fontSize: 48,
    color: "#222F5B",
    fontFamily: "Poppins_800ExtraBold",
  },
  img: {
    marginTop: 25,
    height: 125,
    alignSelf: "center",
  },
  maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  txt: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: "#222F5B",
    fontSize: 20,
    marginTop: 8,
  },
});

export default Welcome;
