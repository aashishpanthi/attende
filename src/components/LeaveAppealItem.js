import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/leave_appeal";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import Icon from "./LeaveAppealIcon";

const LeaveAppealItem = ({ studentName, date, body }) => {
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/Model.jpg")}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{studentName}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{body}</Text>

        <View style={styles.iconContainer}>
          <Icon
            icon={faTimes}
            onPress={() => alert("Rejected")}
            color={{ dark: colors.red, light: colors.lightRed }}
          />
          <Icon
            icon={faCheck}
            onPress={() => {
              alert("Approved");
            }}
            color={{ dark: colors.green, light: colors.lightGreen }}
          />
        </View>
      </View>
    </View>
  );
};

export default LeaveAppealItem;
