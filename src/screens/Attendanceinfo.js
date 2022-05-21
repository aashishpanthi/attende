import { View, Text, Image, Pressable, Linking } from "react-native";
import styles from "../styles/student_info";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import { useState, useEffect } from "react";

import { db } from "../../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const Attendanceinfo = ({ route }) => {
  const { student } = route.params;
  const { id, name, image, section, class: grade, phone_no, address } = student;

  const [presentDays, setPresentDays] = useState(0);
  const [absentDays, setAbsentDays] = useState(0);
  const [leaveDays, setLeaveDays] = useState(0);

  const getAttendance = async () => {
    try {
      // query to fetch attendance data
      const q = query(collection(db, "attendance"));

      // fetching all the documents
      const querySnapshot = await getDocs(q);

      // extracting the data from the documents
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      let present = 0;
      let absent = 0;

      items.forEach((item) => {
        if (item.presentStudents.includes(id)) {
          // get present days
          present++;
        } else if (item.absentStudents.includes(id)) {
          // get absent days
          absent++;
        }
      });

      setPresentDays(present); // set present days
      setAbsentDays(absent); // set absent days
    } catch (error) {
      alert(error);
    }
  };

  const getLeaveDays = async () => {
    try {
      // query to fetch only student's leave request data
      const q = query(
        collection(db, "leave_appeals"),
        where("student", "==", `${id}`),
        where("status", "==", "approved")
      );

      // fetching all the documents
      const querySnapshot = await getDocs(q);

      // extracting the data from the documents
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // setting the leave days
      setLeaveDays(items.length);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAttendance();
    getLeaveDays();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.box}>
          <Image
            style={styles.img}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.class}>Class {`${grade}${section}`}</Text>
        </View>
      </View>
      <View style={styles.contactbox}>
        <View style={styles.contact}>
          <Pressable
            onPress={() => Linking.openURL(`tel:+977 ${phone_no}`)}
            style={styles.modalContact}
          >
            <View style={styles.contactItem}>
              <FontAwesomeIcon
                icon={faPhone}
                size={20}
                color={colors.lightBlack}
              />
              <Text style={styles.txt}>{`+977 ${phone_no}`}</Text>
            </View>
          </Pressable>

          <View style={styles.contactItem}>
            <FontAwesomeIcon
              icon={faHome}
              size={20}
              color={colors.lightBlack}
            />
            <Text style={styles.txt}>{address}</Text>
          </View>
        </View>
        <View style={styles.attendancebox}>
          <Text style={styles.headertxt}>Attendance</Text>
          <View style={styles.infobox}>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Present</Text>
              <Text style={styles.datatxt}>{presentDays}</Text>
            </View>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Absent</Text>
              <Text style={styles.datatxt}>{absentDays}</Text>
            </View>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Leave</Text>
              <Text style={styles.datatxt}>{leaveDays}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Attendanceinfo;
