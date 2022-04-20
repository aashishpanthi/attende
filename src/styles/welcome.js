import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 25,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    elevation: 25,
  },
  head: {
    fontSize: 48,
    color: colors.primary,
    fontFamily: "Poppins_800ExtraBold",
  },
  img: {
    marginTop: 25,
    height: 125,
    alignSelf: "center",
  },
  maincontainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  txt: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: colors.primary,
    fontSize: 20,
    marginTop: 8,
  },
});

export default styles;
