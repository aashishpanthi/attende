import React from "react";
import {
  SafeAreaView,
  View,
  Button,
  StatusBar,
  StyleSheet,
  Platform,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

function Loginparent({navigation}) {
    const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_100Thin,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Box}>
        <Image
          style={styles.img}
          resizeMode='contain'
          source={require("../assets/teacher.png")}
        />
      </View>
      <Text style={styles.head}>Login as a teacher</Text>
      <View style={styles.inpbox}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangePassword={onChangePassword}
        value={password}
        secureTextEntry
        placeholder="Password"
       
      />
      <Pressable style={styles.button} onPress={()=>navigation.navigate('Welcome')}>
          <Text style={styles.btn}>Sign in</Text>
          </Pressable>
          <Pressable style={styles.forget}>
              <Text style={styles.forgot}>Forgot password ?</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  Box: {
    height: "41%",
    width: "100%",
    backgroundColor: "#F2F2F2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inpbox:{
      width:'100%',
      marginTop:'8%',
      justifyContent:'center',
      alignItems:'center',
  },
  img: {
    height: "100%",
    width: "100%",
  },
  head: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 35,
    textAlign: "center",
    marginTop: "7%",
    color:'#212E5B',
  },
  input:{
      borderBottomColor:'red',
      backgroundColor:'#F2F2F2',
      color:'#212E5B',
      padding:10,
      paddingLeft: 25,
      borderRadius:40,
      marginBottom: 20,
      width:'80%',
      fontFamily:'Poppins_500Medium',
  },
 button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop:15,
    paddingHorizontal: 125,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: '#212E5B',
  },
  btn:{
      color:'#fff',
      fontFamily:'Poppins_500Medium'
  },
  forgot:{
    color:'#212E5B',
    fontFamily:'Poppins_500Medium',
    fontSize:15,
    marginTop:'5%',
  },
});
export default Loginparent;
