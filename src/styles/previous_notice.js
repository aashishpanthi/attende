import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({ 
  
  box: {
    margin: 15,
    shadowColor: colors.primary,
    elevation: 10,
    backgroundColor: colors.white,
    paddingVertical: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 25,
  },
  date: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    paddingBottom: 10,
    borderBottomColor: colors.lightPrimary,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  message: {
    fontSize: 15,
    paddingHorizontal: 15,
    fontFamily: "Poppins_400Regular",
    marginTop: 10,
    color: colors.lightBlack,
  },
});

export default styles;
