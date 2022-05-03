import React from "react";
import styles from "../styles/take_attendance";

import { FlatList ,View,ScrollView} from "react-native";
import StudentBox from "../components/StudentBox";

const students = [
  {
    id: 1,
    name: "Aashish Panthi",
    image: require("../../assets/Model.jpg"),
    Roll: 1,
  },
  {
    id: 2,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 2,
  },
  {
    id: 3,
    name: "Rajesh Khadka",
    image: require("../../assets/Model.jpg"),
    Roll: 3,
  },
];

const Attendance = () => {
  return (
    
    <FlatList
      style={styles.container}
      data={students}
      renderItem={({ item }) => {
        return <StudentBox item={item} />;
      }}
    />
    
  );
};

export default Attendance;
