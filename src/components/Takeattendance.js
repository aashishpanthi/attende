import React from 'react'
import {View,Text,FlatList,StyleSheet,Image} from 'react-native'

import {
    useFonts,
    Poppins_800ExtraBold,
    Poppins_100Thin,
    Poppins_500Medium,
  } from "@expo-google-fonts/poppins";
  import AppLoading from "expo-app-loading";

export default function Takeattendance() {
    let [fontsLoaded] = useFonts({
        Poppins_800ExtraBold,
        Poppins_500Medium,
        Poppins_100Thin,
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }   
      const students=[
        {
          id:1,
          name:"Aashish Panthi",
          image: require('../../assets/profile.png'),
          Roll: 'Roll No 1',
        },
        {
          id:2,
          name:"Roshan Acharya",
          image: require('../../assets/profile.png'),
          Roll: 'Roll No 2',
        },
        {
          id:3,
          name:"Rajesh Khadka",
          image: require('../../assets/profile.png'),
          Roll: 'Roll No 3',
        },
        
      ];
  return (
    <View>
      <FlatList style={styless.boxx}
      data={students}
      renderItem={({item})=>{
        return(
          <View style={styless.box}>
        <View style={styless.Avatarbox}>
        <Image source={item.image} style={styless.avatar}/>
        </View>
        <View>
        <Text style={styless.lis}>{item.name}</Text>
        <Text style={styless.roll}>{item.Roll}</Text>
        </View>
        </View>
      )}}
      />
    </View>
  )
}
const styless=StyleSheet.create({
  box:{
    backgroundColor:'#fff',
    borderBottomColor:'black',
    borderBottomWidth:0.3,
    flexDirection:'row',
    
    
  },
  lis:{
    color:'#222F5B',
    fontFamily:'Poppins_500Medium',
    fontSize:17,
    paddingTop:'3%',
    marginLeft:'30%',
  },
  roll:{
    fontSize:12,
    color:'red',
    fontFamily:'Poppins_500Medium',
    color:'#222F5B',
    marginLeft:'30%',
    paddingBottom:  '3%',
   
  },
  Avatarbox:{
   
    width:40,
    paddingTop:'3%',
    marginLeft:'10%',
    
    
  },
  avatar:{
    width:45,
    height:40,
    borderRadius: 100,
  }
}
  
);
