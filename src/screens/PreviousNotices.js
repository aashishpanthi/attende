import { FlatList, LogBox } from "react-native";
import Notice from "../components/Notice";
import styles from "../styles/previous_notice";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const PreviousNotices = () => {
  const [notices, setNotices] = useState([]);

  const getNotices = async () => {
    const noticesRef = collection(db, "notices");
    const q = query(noticesRef, orderBy("date", "desc"));

    onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setNotices(items);
      console.log(items);
    });
  };

  useEffect(() => {
    getNotices();

    // Ignore the warning about the setting a timer
    LogBox.ignoreLogs(["Setting a timer"]);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={notices}
      renderItem={({ item }) => {
        return <Notice item={item} />;
      }}
    />
  );
};

export default PreviousNotices;
