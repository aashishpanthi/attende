import { View, Text, Modal } from "react-native";
import Button from "./Button";
import colors from "../../config/colors";
import {
  faArrowAltCircleLeft,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/take_attendance";

const AttendanceModal = ({
  visible,
  setShowModal,
  presentStudents,
  allStudentsId,
  handleSubmit,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
    >
      <View style={styles.modal}>
        <View style={styles.modalItem}>
          <Text style={styles.modalItemTitle}>Total students: </Text>
          <Text style={styles.modalItemValue}> {allStudentsId.length} </Text>
        </View>
        <View style={styles.modalItem}>
          <Text style={styles.modalItemTitle}>Present students: </Text>
          <Text style={styles.modalItemValue}> {presentStudents.length} </Text>
        </View>
        <View style={styles.modalItem}>
          <Text style={styles.modalItemTitle}>Absent students: </Text>
          <Text style={styles.modalItemValue}>
            {allStudentsId.length - presentStudents.length}
          </Text>
        </View>

        <View style={styles.buttons}>
          <Button
            onPress={() => setShowModal(false)}
            text="Back"
            color={colors.red}
            icon={faArrowAltCircleLeft}
          />
          <Button
            onPress={handleSubmit}
            text="OK"
            color={colors.green}
            icon={faCheckCircle}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AttendanceModal;
