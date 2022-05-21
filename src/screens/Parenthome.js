import { View, Text, Image, LogBox } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import styles from "../styles/home";
import Logout from "../components/Logout";
import NavItem from "../components/NavItem";

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

    // Ignore the warning about the setting a timer
    LogBox.ignoreLogs(["Setting a timer"]);
  });

  return (
    <View style={styles.main}>
      <View style={[styles.container, { height: 200 }]}>
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
      <View style={{ marginTop: "40%" }}>
        <NavItem
          img={require("../../assets/activity.png")}
          title="Attendance record"
          navigation={navigation}
          path="Studentinfo"
        />
        <NavItem
          img={require("../../assets/paper.png")}
          title="Browse notices"
          navigation={navigation}
          path="PreviousNotices"
        />
        <NavItem
          img={require("../../assets/appeal.png")}
          title="Appeal leave"
          navigation={navigation}
          path="AppealLeave"
        />
      </View>

      <Logout navigation={navigation} />
    </View>
  );
}
