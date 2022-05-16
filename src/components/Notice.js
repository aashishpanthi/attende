import { View, Text } from "react-native";
import styles from "../styles/previous_notice";

const Notice = ({ item }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.date}>
        {item.date.toDate().toString().substring(0, 15)}
      </Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );
};

export default Notice;
