import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    elevation: 10,
    alignItems: "center",
    padding: 15,
  },
  head: {
    fontSize: 40,
    color: colors.primary,
    fontFamily: "Poppins_800ExtraBold",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  txt: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: colors.primary,
    fontSize: 20,
  },
});

export default styles;
