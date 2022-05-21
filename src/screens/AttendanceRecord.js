import styles from "../styles/take_attendance";
import { FlatList, SafeAreaView, View } from "react-native";
import RecordListItem from "../components/RecordListItem";
import { useEffect, useState } from "react";
import { collection, where, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";

const AttendanceRecord = ({ navigation }) => {
  const [students, setStudents] = useState([]); // array of student objects

  const getStudents = async () => {
    try {
      // query to fetch only student data
      const q = query(
        collection(db, "users"),
        where("role", "==", "parent"),
        orderBy("roll_no", "asc")
      );

      // fetching all the documents
      const querySnapshot = await getDocs(q);

      // extracting the data from the documents
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // setting the students
      setStudents(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // get the students
    getStudents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => {
          return <RecordListItem student={item} navigation={navigation} />;
        }}
      />
    </SafeAreaView>
  );
};

export default AttendanceRecord;
