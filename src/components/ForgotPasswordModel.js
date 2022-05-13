import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  View,
  Modal,
  Text,
  Linking,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../styles/login";

const ForgotPasswordModal = ({ visible, setShowModal }) => {
  const phoneNumber = "+977 9867526912";
  const email = "info@aashishpanthi.me";
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setShowModal(false)}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => {
          setShowModal(false);
        }}
        style={styles.modal}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalBox}>
            <Text style={styles.modalHead}>
              Please contact your administrator
            </Text>

            <Pressable
              onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
              style={styles.modalContact}
            >
              <FontAwesomeIcon
                style={styles.modalContactIcon}
                icon={faPhoneAlt}
                size={18}
              />
              <Text style={styles.modalContactText}>{phoneNumber}</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                Linking.openURL(
                  `mailto:${email}?subject=Forgot Password&body=I've forgot password of Attende and I am unable to login`
                )
              }
              style={styles.modalContact}
            >
              <FontAwesomeIcon
                style={styles.modalContactIcon}
                icon={faEnvelope}
                size={18}
              />
              <Text style={styles.modalContactText}>{email}</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default ForgotPasswordModal;
