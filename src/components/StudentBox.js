import { Text, Image, View, TouchableNativeFeedback } from "react-native";
import styles from "../styles/take_attendance";
import colors from "../../config/colors";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const StudentBox = ({ item, setPresentStudents, presentStudents }) => {
  const [present, setPresent] = useState(true);

  const handelClick = () => {
    if (present) {
      setPresent(false);
      setPresentStudents(presentStudents.filter((id) => id !== item.id));
    } else {
      setPresent(true);
      setPresentStudents([...presentStudents, item.id]);
    }
  };

  return (
    <TouchableNativeFeedback onPress={() => handelClick()}>
      <View style={styles.student}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: present ? colors.green : colors.red,
            },
          ]}
        />
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.roll}>Roll No. {item.Roll}</Text>
        </View>

        <View style={styles.icon}>
          {present ? (
            <FontAwesomeIcon
              size={22}
              icon={faCheckCircle}
              color={colors.green}
            />
          ) : (
            <FontAwesomeIcon
              size={22}
              icon={faTimesCircle}
              color={colors.red}
            />
          )}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default StudentBox;
