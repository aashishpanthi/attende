import React from "react";
import { FlatList } from "react-native";
import LeaveAppealItem from "../components/LeaveAppealItem";
import styles from "../styles/leave_appeal";

const appeals = [
  {
    id: 1,
    studentName: "Aashish Panthi",
    date: "2078-12-08",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    studentName: "Aashish Panthi",
    date: "2078-12-08",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaa liqua aliqua.",
  },
];

const BrowseLeaveAppeals = () => {
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => <LeaveAppealItem {...item} />}
      data={appeals}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default BrowseLeaveAppeals;
