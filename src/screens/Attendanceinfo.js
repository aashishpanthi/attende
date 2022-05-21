import { View, Text, Image, Pressable, Linking, Picker } from "react-native";
import styles from "../styles/student_info";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";

const Attendanceinfo = ({ navigation, route }) => {
  const { student } = route.params;
  const { name, image, section, class: grade, phone_no, address } = student;

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.box}>
          <Image
            style={styles.img}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.class}>Class {`${grade}${section}`}</Text>
        </View>
      </View>
      <View style={styles.contactbox}>
        <View style={styles.contact}>
          <Pressable
            onPress={() => Linking.openURL(`tel:+977 ${phone_no}`)}
            style={styles.modalContact}
          >
            <View style={styles.contactItem}>
              <FontAwesomeIcon
                icon={faPhone}
                size={20}
                color={colors.lightBlack}
              />
              <Text style={styles.txt}>{`+977 ${phone_no}`}</Text>
            </View>
          </Pressable>

          <View style={styles.contactItem}>
            <FontAwesomeIcon
              icon={faHome}
              size={20}
              color={colors.lightBlack}
            />
            <Text style={styles.txt}>{address}</Text>
          </View>
        </View>
        <View style={styles.attendancebox}>
          <Text style={styles.headertxt}>Attendance</Text>
          <View style={styles.infobox}>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Present</Text>
              <Text style={styles.datatxt}>7</Text>
            </View>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Leave</Text>
              <Text style={styles.datatxt}>1</Text>
            </View>
            <View style={styles.databox}>
              <Text style={styles.infotxt}>Absent</Text>
              <Text style={styles.datatxt}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Attendanceinfo;
