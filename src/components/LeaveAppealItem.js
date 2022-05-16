import { View, Text, Image } from "react-native";
import styles from "../styles/leave_appeal";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import Icon from "./LeaveAppealIcon";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const LeaveAppealItem = ({ id, date, message, status, student }) => {
  const [studentDetails, setStudentDetails] = useState({});
  const [appealStatus, setAppealStatus] = useState(status);

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

  const updateAppealStatus = async (status) => {
    const docRef = doc(db, "leave_appeals", id);

    try {
      await updateDoc(docRef, {
        status: status,
      });
      setAppealStatus(status);
    } catch (err) {
      console.log(err);
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

        {appealStatus === "" ? (
          <View style={styles.iconContainer}>
            <Icon
              icon={faTimes}
              onPress={() => updateAppealStatus("rejected")}
              color={{ dark: colors.red, light: colors.lightRed }}
            />
            <Icon
              icon={faCheck}
              onPress={() => {
                updateAppealStatus("approved");
              }}
              color={{ dark: colors.green, light: colors.lightGreen }}
            />
          </View>
        ) : (
          <View>
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    appealStatus === "approved" ? colors.green : colors.red,
                },
              ]}
            >
              {appealStatus}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default LeaveAppealItem;
