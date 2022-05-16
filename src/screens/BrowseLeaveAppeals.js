import React from "react";
import { FlatList } from "react-native";
import LeaveAppealItem from "../components/LeaveAppealItem";
import styles from "../styles/leave_appeal";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const BrowseLeaveAppeals = () => {
  const [appeals, setAppeals] = useState([]);

  const getAppeals = async () => {
    const appealsRef = collection(db, "leave_appeals");
    onSnapshot(query(appealsRef), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAppeals(items);
      console.log(items);
    });
  };

  useEffect(() => {
    getAppeals();
  }, []);

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
