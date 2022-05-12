import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { useState, useEffect } from "react";
import colors from "../../config/colors";
import * as SecureStore from "expo-secure-store";

export default function Parenthome({ navigation }) {
  const [student, setStudent] = useState("");

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("user");
      if (token) {
        setStudent(JSON.parse(token));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.infobox}>
          <View style={styles.imgbox}>
            <View style={styles.imgwrap}>
              <Image
                style={styles.img}
                source={{
                  uri: student.image,
                }}
              />
            </View>
          </View>
          <View style={styles.basic}>
            <Text style={styles.name}>{student?.name}</Text>
            <Text style={styles.address}>{student?.address}</Text>
          </View>
          <View style={styles.datawrap}>
            <View style={styles.data}>
              <Text style={styles.head}>Class</Text>
              <Text style={styles.no}>{student?.class}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.head}>Roll No.</Text>
              <Text style={styles.no}>{student?.roll_no}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.head}>Section</Text>
              <Text style={styles.no}>{student?.section}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navcontainer}>
        <TouchableNativeFeedback
          style={styles.btn}
          onPress={() => navigation.navigate("Attendance")}
        >
          <View style={styles.nav}>
            <Image
              style={styles.icon}
              source={require("../../assets/activity.png")}
            />
            <Text style={styles.navinfo}>Attendance record</Text>
            <Image
              style={styles.iconarr}
              source={require("../../assets/arrow.png")}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.btn}
          onPress={() => navigation.navigate("PreviousNotices")}
        >
          <View style={styles.nav}>
            <Image
              style={styles.icon}
              source={require("../../assets/paper.png")}
            />
            <Text style={styles.navinfo}>Browse notice </Text>
            <Image
              style={styles.iconarr}
              source={require("../../assets/arrow.png")}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.btn}
          onPress={() => navigation.navigate("AppealLeave")}
        >
          <View style={styles.nav}>
            <Image
              style={styles.icon}
              source={require("../../assets/appeal.png")}
            />
            <Text style={styles.navinfo}>Appeal Leave </Text>
            <Image
              style={styles.iconarr}
              source={require("../../assets/arrow.png")}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    height: "30%",
    backgroundColor: colors.parentHome,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  infobox: {
    width: "80%",
    position: "absolute",
    height: "100%",
    backgroundColor: "#fff",
    marginTop: "25%",
    elevation: 10,
    shadowColor: "#0991F6",
    opacity: 0.9,
    borderRadius: 10,
  },
  navcontainer: {
    marginTop: "25%",
  },
  nav: {
    marginTop: "5%",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "space-around",
  },

  navinfo: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    marginRight: "20%",
    marginTop: "1%",
  },
  icon: {
    height: 30,
    width: 30,
  },
  iconarr: {
    height: 20,
    width: 20,
    marginTop: "1%",
  },
  imgbox: {
    alignItems: "center",
    marginTop: "-15%",
    elevation: 10,
  },
  img: {
    height: 80,
    width: 80,
  },
  imgwrap: {
    height: 81,
    width: 81,
    backgroundColor: "#fff",
    borderRadius: 100,
    elevation: 10,
    shadowColor: "black",
  },
  basic: {
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontFamily: "Poppins_500Medium",
  },
  address: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: colors.primary,
    marginTop: -5,
  },
  datawrap: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  data: {
    alignItems: "center",
  },
  head: {
    fontFamily: "Poppins_500Medium",
    color: colors.black,
    opacity: 0.6,
  },
  no: {
    fontFamily: "Poppins_500Medium",
    opacity: 0.7,
    fontSize: 20,
    marginTop: -5,
  },
});
