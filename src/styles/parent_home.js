import { StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    height: 200,
    backgroundColor: colors.parentHome,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  infobox: {
    width: "90%",
    position: "absolute",
    height: 185,
    backgroundColor: colors.white,
    marginTop: "25%",
    elevation: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.5,
    opacity: 0.9,
    borderRadius: 10,
  },
  navcontainer: {
    marginTop: 125,
  },
  nav: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  navinfo: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    marginLeft: 15,
    flex: 1,
  },
  icon: {
    height: 30,
    width: 30,
  },
  iconarr: {
    height: 20,
    width: 20,
  },
  imgbox: {
    alignItems: "center",
    marginTop: "-15%",
    elevation: 10,
  },
  img: {
    height: 80,
    width: 80,
  },
  imgwrap: {
    height: 81,
    width: 81,
    backgroundColor: "#fff",
    borderRadius: 100,
    elevation: 10,
    shadowColor: "black",
  },
  basic: {
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontFamily: "Poppins_500Medium",
  },
  address: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: colors.primary,
    marginTop: -5,
  },
  datawrap: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  data: {
    alignItems: "center",
  },
  head: {
    fontFamily: "Poppins_500Medium",
    color: colors.black,
    opacity: 0.6,
  },
  no: {
    fontFamily: "Poppins_500Medium",
    opacity: 0.7,
    fontSize: 20,
    marginTop: -5,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
    bottom: 15,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
});

export default styles;
