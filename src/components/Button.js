import { TouchableNativeFeedback, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../config/colors";
import styles from "../styles/button";

const Button = ({ onPress, color, icon, text }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.submitBtn,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={styles.submitBtnText}>{text}</Text>
        <FontAwesomeIcon color={colors.white} size={15} icon={icon} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
