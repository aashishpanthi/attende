import React from 'react';
import Loginparent from './Loginparent';
import {Button, View,StyleSheet,Text,Platform,StatusBar,SafeAreaView,Image} from 'react-native';
import { useFonts,   Poppins_800ExtraBold,
    Poppins_100Thin,
    Poppins_500Medium,
    } from  '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
function Welcome(props) {
    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_500Medium,
        Poppins_100Thin,

     });
   
     if (!fontsLoaded) {
       return <AppLoading />;
     }
    return (
       <SafeAreaView style={styles.maincontainer} > 
       
       <Text style={styles.head}>Login as</Text>
    
           <View style={styles.container}>
              <Image style={styles.img} resizeMode='center' source={require('../assets/parent.png')}/>
               <Text style={styles.txt}>A parent</Text>
               </View>
            
           <View style={styles.containerr}>
           <Image style={styles.img} resizeMode='center' source={require('../assets/teacher.png')}/>
               <Text style={styles.txt}>A Teacher</Text>
           </View>
       </SafeAreaView> 
    );
}
const styles=StyleSheet.create({
    head:{
        fontSize:50,
        color:'#222F5B',
        fontFamily: 'Poppins_800ExtraBold',
        
    },
    maincontainer:{
        height:'100%',
        width: '100%',
        paddingTop: Platform.OS==='android' ? StatusBar.currentHeight:0,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
        
        
    },
    container:{
        height: '30%',
        width: '60%',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000000',
           
        
   
    },
    containerr:{
        height: '30%',
        width: '60%',
        backgroundColor: '#fff',
        shadowColor: '#000000',
           
         elevation: 5,
         
    },
    img:{
        width:'100%',
        height:'70%',
        alignSelf:'center',
    },
    txt:{
        textAlign:'center',
        marginBottom:10,
        fontFamily: 'Poppins_500Medium',
        fontWeight:'900',
        color:'#222F5B',
        fontSize:20,
    },
});
export default Welcome;