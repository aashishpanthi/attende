import styles from "../styles/take_attendance";
import { ScrollView, SafeAreaView, View } from "react-native";
import RecordListItem from "../components/RecordListItem";

const students = [
  {
    id: 1,
    name: "Aashish Panthi",
    image: require("../../assets/Model.jpg"),
    roll_no: 1,
  },
  {
    id: 2,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 2,
  },
  {
    id: 3,
    name: "Rajesh Khadka",
    image: require("../../assets/Model.jpg"),
    roll_no: 3,
  },
  {
    id: 4,
    name: "Roshan Pathak",
    image: require("../../assets/Model.jpg"),
    roll_no: 4,
  },
  {
    id: 5,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 5,
  },
  {
    id: 6,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 6,
  },
  {
    id: 7,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 7,
  },
  {
    id: 8,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 8,
  },
  {
    id: 9,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 9,
  },
  {
    id: 10,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    roll_no: 10,
  },
];

const AttendanceRecord = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {students.map((student) => (
          <RecordListItem
            key={student.id}
            student={student}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceRecord;
