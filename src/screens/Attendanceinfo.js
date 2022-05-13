import {View,Text,Image}from 'react-native'
import styles from "../styles/student_info";
const Attendanceinfo = () => {
  return (
      <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.box}>
        <Image
                style={styles.img}
                source={require("../../assets/model2.png")}
              /> 
        <Text style={styles.name}>Rajesh Khadka</Text>
        <Text style={styles.class}>Class 11T</Text>
        </View>
      </View>
      <View style={styles.contact}>
          <Text>+977 9876543210</Text>
          <Text>Butwal-10, Rupendehi</Text>
      </View>
      </View>
  )
};
export default Attendanceinfo;
