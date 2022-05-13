import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import styles from "../styles/parent_home";

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
          onPress={() => navigation.navigate("Studentinfo")}
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
