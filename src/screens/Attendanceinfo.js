import {View,Text,Image,Pressable,Linking,Picker}from 'react-native'
import styles from "../styles/student_info";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faHome } from "@fortawesome/free-solid-svg-icons";
const Attendanceinfo = () => {
  const Phone='+977 9876543210';
  const Address='Butwal-10, Rupendehi';
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
      <View style={styles.contactbox}>
      <View style={styles.contact}>
      <Pressable
              onPress={() => Linking.openURL(`tel:${Phone}`)}
              style={styles.modalContact}
            >
          <Text style={styles.txt}><FontAwesomeIcon
                
                icon={faPhone}
                size={15}
              /> {Phone}</Text>
          </Pressable>
          
          <Text style={styles.txt}>
          <FontAwesomeIcon
                
                icon={faHome}
                size={20}
              />  {Address}</Text>
          
      </View>
      <View style={styles.attendancebox}>
      <View style={styles.header}>
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
      </View>
      
     
    
  )
};
export default Attendanceinfo;
