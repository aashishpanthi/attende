import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    Image,
    TouchableNativeFeedback,
    Pressable,
  } from "react-native";
  import colors from "../../config/colors";
  import {
    useFonts,
    Poppins_800ExtraBold,
    Poppins_100Thin,
    Poppins_500Medium,
  } from "@expo-google-fonts/poppins";
  import AppLoading from "expo-app-loading";
  export default function Parenthome({ navigation }) {
    let [fontsLoaded] = useFonts({
      Poppins_800ExtraBold,
      Poppins_500Medium,
      Poppins_100Thin,
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.imgcontainer}>
            <Image
              style={styles.img}
              source={require("../../assets/profile.png")}
            />
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.txt}>Aashish Panthi</Text>
          </View>
        </View>
        
        <TouchableNativeFeedback
          style={styles.btn}
          onPress={() => navigation.navigate("Attendance")}
        >
          <View style={styles.nav}>
            <Image
              style={styles.icon}
              source={require("../../assets/activity.png")}
            />
            <Text style={styles.navinfo}>Attendance record</Text>
            <Image
              style={styles.iconarr}
              source={require("../../assets/arrow.png")}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.btn}
          onPress={() => navigation.navigate("Attendance")}
        >
          <View style={styles.nav}>
            <Image
              style={styles.icon}
              source={require("../../assets/paper.png")}
            />
            <Text style={styles.navinfo}>Browse notice          </Text>
            <Image
              style={styles.iconarr}
              source={require("../../assets/arrow.png")}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
  const styles = StyleSheet.create({
    main: {
      height: "100%",
      width: "100%",
      backgroundColor: "#fff",
    },
    container: {
      height: "30%",
      backgroundColor: colors.parentHome,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    },
    imgcontainer: {
      width: "100%",
  
      alignItems: "center",
    },
    img: {
      marginTop: "10%",
      height: 80,
      width: 80,
    },
    txtcontainer: {
      marginTop: "5%",
      width: "100%",
      alignItems: "center",
    },
    txt: {
      fontSize: 25,
      fontFamily: "Poppins_800ExtraBold",
      color: "#fff",
    },
    nav: {
      marginTop: "5%",
      flexDirection: "row",
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent:'space-around'
    },
  
    navinfo: {
      fontFamily: "Poppins_500Medium",
      fontSize: 20, 
    },
    icon: {
      height: 30,
      width: 30,
      
      
    },
    iconarr:{
      height: 30,
      width: 30,
   
      
    },
    
  });
  