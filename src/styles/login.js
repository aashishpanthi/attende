import { StatusBar, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.white,
  },
  Box: {
    height: "41%",
    width: "100%",
    backgroundColor: colors.loginBackground,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inpbox: {
    width: "100%",
    marginTop: "8%",
    justifyContent: "center",
    alignItems: "center",
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
    color: colors.primary,
  },
  input: {
    borderBottomColor: "red",
    backgroundColor: colors.loginBackground,
    color: colors.primary,
    padding: 10,
    paddingLeft: 25,
    borderRadius: 40,
    marginBottom: 20,
    width: "80%",
    fontFamily: "Poppins_500Medium",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 15,
    paddingHorizontal: 125,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  btn: {
    color: colors.white,
    fontFamily: "Poppins_500Medium",
  },
  forgot: {
    color: colors.primary,
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    marginTop: "5%",
  },
});

export default styles;
