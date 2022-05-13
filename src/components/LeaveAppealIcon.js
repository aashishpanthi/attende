import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, TouchableOpacity } from "react-native";
import styles from "../styles/leave_appeal";

const Icon = ({ icon, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.icon,
          {
            shadowColor: color.dark,
            borderColor: color.light,
          },
        ]}
      >
        <FontAwesomeIcon icon={icon} size={25} color={color.dark} />
      </View>
    </TouchableOpacity>
  );
};

export default Icon;
