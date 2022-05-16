import { FlatList } from "react-native";
import Notice from "../components/Notice";
import styles from "../styles/previous_notice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const PreviousNotices = () => {
  const [notices, setNotices] = useState([]);

  const getNotices = async () => {
    const noticesRef = collection(db, "notices");
    onSnapshot(query(noticesRef), (snapshot) => {
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
