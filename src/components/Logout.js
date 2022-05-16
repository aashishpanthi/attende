import { TouchableOpacity } from "react-native";
import styles from "../styles/logout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import * as SecureStore from "expo-secure-store";

const Logout = ({ navigation }) => {
  const logout = async () => {
    await SecureStore.deleteItemAsync("user");
    navigation.navigate("Welcome");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={logout}
      style={styles.touchableOpacityStyle}
    >
      <FontAwesomeIcon icon={faSignOutAlt} size={20} color="white" />
    </TouchableOpacity>
  );
};

export default Logout;
