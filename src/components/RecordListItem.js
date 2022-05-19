import { Text, Image, View, TouchableNativeFeedback } from "react-native";
import styles from "../styles/take_attendance";
import colors from "../../config/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const RecordListItem = ({ student, navigation }) => {
  const { name, image, roll_no } = student;

  const handelClick = () => {
    navigation.navigate("Studentinfo");
  };

  return (
    <TouchableNativeFeedback onPress={() => handelClick()}>
      <View style={styles.student}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: colors.primary,
            },
          ]}
        />
        <View style={styles.imageContainer}>
          <Image source={{ uri: student?.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.roll}>Roll No. {roll_no}</Text>
        </View>

        <View style={styles.icon}>
          <FontAwesomeIcon
            size={22}
            icon={faAngleRight}
            color={colors.primary}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default RecordListItem;
