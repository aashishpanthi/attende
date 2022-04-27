import { Text, View, Image } from "react-native";
import styles from "../styles/take_attendance";

const StudentBox = ({ item, index }) => {
  return (
    <View style={styles.student}>
      <View style={styles.box} />
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={item.image} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.roll}>Roll No. {item.Roll}</Text>
      </View>
    </View>
  );
};

export default StudentBox;
