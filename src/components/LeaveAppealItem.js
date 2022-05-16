import { View, Text, Image } from "react-native";
import styles from "../styles/leave_appeal";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import Icon from "./LeaveAppealIcon";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const LeaveAppealItem = ({ date, message, student }) => {
  const [studentDetails, setStudentDetails] = useState({});

  const getStudentDetails = async () => {
    const docRef = doc(db, "users", student);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStudentDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: studentDetails?.image }} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{studentDetails?.name}</Text>
          <Text style={styles.date}>
            {date.toDate().toString().substring(0, 15)}
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{message}</Text>

        <View style={styles.iconContainer}>
          <Icon
            icon={faTimes}
            onPress={() => alert("Rejected")}
            color={{ dark: colors.red, light: colors.lightRed }}
          />
          <Icon
            icon={faCheck}
            onPress={() => {
              alert("Approved");
            }}
            color={{ dark: colors.green, light: colors.lightGreen }}
          />
        </View>
      </View>
    </View>
  );
};

export default LeaveAppealItem;
