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
      <View style={styles.infobox}>
          <View style={styles.imgbox}>
              <View style={styles.imgwrap}>
      <Image
          style={styles.img}
          source={require("../../assets/profile.png")}
        />
         </View>
        </View>
        <View style={styles.basic}>
            <Text style={styles.name}>Roshan Acharya</Text>
            <Text style={styles.address}>Kalika ManavGyan S.S</Text>
        </View>
        
      </View>

      </View>
      <View style={styles.navcontainer}>
      <TouchableNativeFeedback
        style={styles.btn}
        onPress={() => navigation.navigate("Attendance")}
      >
        <View style={styles.nav}>
          <Image
            style={styles.icon}
            source={require("../../assets/Create.png")}
          />
          <Text style={styles.navinfo}>Take attendance  </Text>
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
            source={require("../../assets/plus.png")}
          />
          <Text style={styles.navinfo}>Create notice          </Text>
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
            source={require("../../assets/Create.png")}
          />
          <Text style={styles.navinfo}>Previous notice     </Text>
          
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
            source={require("../../assets/ereader.png")}
          />
          <Text style={styles.navinfo}>Leave appeal     </Text>
          
          <Image
            style={styles.iconarr}
            source={require("../../assets/arrow.png")}
          />
          
        </View>
      </TouchableNativeFeedback>
      </View>
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
    alignItems:'center'

  },
  infobox:{
     
      width:'80%',
      position:'absolute',
      height:'70%',
      backgroundColor:'#fff',
      marginTop:'35%',
      elevation: 10,
      shadowColor:'#0991F6',
      opacity:.9,
      borderRadius:10,
  },
  navcontainer:{
      marginTop:'25%',

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
    fontSize: 15, 
    marginRight:'20%',
    marginTop:'1%'
  },
  icon: {
    height: 30,
    width: 30,
    
    
  },
  iconarr:{
    height: 20,
    width: 20,
    marginTop:'1%',
 
    
  },
  imgbox:{
      
      alignItems:'center',
      marginTop:'-15%',
      elevation:10,
      
  },
  img:{
      height:80,
      width:80,
  },
  imgwrap:{
      height:80,
      width:80,
      backgroundColor:'#fff',
      borderRadius: 100,
      elevation:10,
      shadowColor:'black',
  },
  basic:{
      marginTop:10,
      alignItems:"center",
  },
  name:{
      fontSize:25,
     fontFamily:'Poppins_800ExtraBold',
  
      
  },
  address:{
   fontFamily:'Poppins_500Medium',
   fontSize:15,
   color:colors.primary,
  },
  datawrap:{
      marginTop:'10%',
      flexDirection:'row',
      justifyContent:'space-around',
  },
  data:{
      alignItems:'center',
  },
  head:{
      fontFamily:'Poppins_500Medium',
      color: colors.black,
      opacity:0.5,
  },
  no:{
      fontFamily:'Poppins_500Medium',
      opacity:0.5,
  }

    
});
