import { View, Text, Image, LogBox } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import styles from "../styles/home";
import NavItem from "../components/NavItem";
import Logout from "../components/Logout";

export default function Teacherhome({ navigation }) {
  const [teacher, setTeacher] = useState("");

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("user");
      if (token) {
        setTeacher(JSON.parse(token));
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
      <View style={[styles.container, { height: 175 }]}>
        <View style={styles.infobox}>
          <View style={styles.imgbox}>
            <Image
              style={styles.img}
              source={{
                uri: teacher.image,
              }}
            />
          </View>
          <View style={styles.basic}>
            <Text style={styles.name}>{teacher?.name}</Text>
            <Text style={styles.address}>{teacher?.address}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: "25%" }}>
        <NavItem
          img={require("../../assets/Create.png")}
          title="Take attendance"
          navigation={navigation}
          path="Attendance"
        />
        <NavItem
          img={require("../../assets/activity.png")}
          title="Attendance record"
          navigation={navigation}
          path="Attendancerecord"
        />
        <NavItem
          img={require("../../assets/plus.png")}
          title="Create notice"
          navigation={navigation}
          path="CreateNotice"
        />
        <NavItem
          img={require("../../assets/paper.png")}
          title="Previous notices"
          navigation={navigation}
          path="PreviousNotices"
        />
        <NavItem
          img={require("../../assets/ereader.png")}
          title="Browse leave appeals"
          navigation={navigation}
          path="BrowseLeaveAppeals"
        />
      </View>

      <Logout navigation={navigation} />
    </View>
  );
}
