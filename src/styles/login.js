import { StatusBar, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  Box: {
    height: 300,
    width: "100%",
    backgroundColor: colors.loginBackground,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inpbox: {
    flex: 1,
    marginTop: "10%",
    alignItems: "center",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  head: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 25,
    color: colors.primary,
  },
  input: {
    backgroundColor: colors.loginBackground,
    color: colors.lightBlack,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 20,
    width: "80%",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: "80%",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  btn: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
  },
  forgot: {
    color: colors.primary,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    marginTop: 15,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBox: {
    height: 140,
    width: "90%",
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 15,
  },
  modalContact: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  modalContactIcon: {
    color: colors.lightBlack,
  },
  modalContactText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: colors.lightBlack,
    marginLeft: 10,
  },
  modalHead: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: colors.black,
    marginBottom: 10,
  },
});

export default styles;
