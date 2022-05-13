import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "../styles/welcome";

const LoginAs = ({ role, image, onPress }) => {
  if (Platform.OS == "android") {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} resizeMode="cover" style={styles.image} />
          <Text style={styles.txt}>{role}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={image} />
        <Text style={styles.txt}> {role} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginAs;
