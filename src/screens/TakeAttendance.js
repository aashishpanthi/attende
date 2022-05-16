import styles from "../styles/take_attendance";
import { ScrollView, SafeAreaView, View } from "react-native";
import StudentBox from "../components/StudentBox";
import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import { useState } from "react";
import Button from "../components/Button";

import AttendanceModal from "../components/AttendanceModal";

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
  {
    id: 4,
    name: "Roshan Pathak",
    image: require("../../assets/Model.jpg"),
    Roll: 4,
  },
  {
    id: 5,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 5,
  },
  {
    id: 6,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 6,
  },
  {
    id: 7,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 7,
  },
  {
    id: 8,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 8,
  },
  {
    id: 9,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 9,
  },
  {
    id: 10,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 10,
  },
];

const Attendance = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const studentsId = students.map((student) => student.id);
  const [presentStudents, setPresentStudents] = useState(studentsId);

  const handleSubmit = () => {
    navigation.navigate("Teacherhome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {students.map((student) => (
          <StudentBox
            key={student.id}
            setPresentStudents={setPresentStudents}
            presentStudents={presentStudents}
            item={student}
          />
        ))}

        <View style={styles.buttons}>
          <Button
            onPress={() => navigation.navigate("Teacherhome")}
            text="Cancel"
            icon={faTimes}
            color={colors.red}
            styles={styles}
          />
          <Button
            onPress={() => setShowModal(true)}
            text="Next"
            icon={faAngleDoubleRight}
            color={colors.primary}
            styles={styles}
          />
        </View>
      </ScrollView>

      <AttendanceModal
        handleSubmit={handleSubmit}
        presentStudents={presentStudents}
        visible={showModal}
        setShowModal={setShowModal}
        allStudentsId={studentsId}
      />
    </SafeAreaView>
  );
};

export default Attendance;
