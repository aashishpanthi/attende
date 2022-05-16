import { StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.parentHome,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  infobox: {
    width: "85%",
    position: "absolute",
    backgroundColor: colors.white,
    marginTop: "30%",
    elevation: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.5,
    opacity: 0.9,
    borderRadius: 10,
  },
  imgbox: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-15%",
    elevation: 10,
    height: 85,
    width: 85,
    backgroundColor: colors.white,
    borderRadius: 50,
    elevation: 10,
    shadowColor: colors.primary,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
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
});

export default styles;
