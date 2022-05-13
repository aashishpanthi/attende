import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({ 
    container:{
        height:'100%'
    },
  head:{
      height:'35%',
      backgroundColor:colors.green,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:100,
      alignItems:'center'
      
  },
  box:{
      height:'80%',
      width:'80%',
      backgroundColor:colors.white,
      marginTop:'30%',
      elevation:15,
      shadowColor:colors.green,
      shadowOpacity:0.50,
      borderRadius:15,
      alignItems:'center'
      
  },
  img:{
      height:'50%',
      width:'35%',
      borderRadius:200,
      marginTop:'5%'
  },
  name:{
      marginTop:10,
      fontFamily:'Poppins_500Medium',
      fontSize:20,      
  },
  class:{
      fontFamily:'Poppins_300Light',
      fontSize:15,
      color:colors.blue,
  },
  contact:{
      marginTop:'40%',
      width:'80%',
      height:'10%',
      backgroundColor:colors.blue,
  }
 
});

export default styles;
