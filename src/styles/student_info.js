import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  head: {
    height: "35%",
    backgroundColor: colors.green,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
  },
  box: {
    height: "80%",
    width: "80%",
    backgroundColor: colors.white,
    marginTop: "25%",
    elevation: 10,
    shadowColor: colors.lightGreen,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 20,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
  },
  class: {
    fontFamily: "Poppins_300Light",
    fontSize: 15,
    color: colors.blue,
    marginTop: -5,
  },
  contactbox: {
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  contact: {
    marginTop: 90,
    width: "80%",
    height: 100,
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.lightPrimary,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contactItem: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 2,
  },
  txt: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Poppins_500Medium",
    color: colors.lightBlack,
  },
  attendancebox: {
    height: 200,
    width: "80%",
    marginTop: 25,
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.lightPrimary,
    borderRadius: 10,
    paddingVertical: 10,
  },
  headertxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
    borderBottomColor: colors.lightPrimary,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  infobox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  databox: {
    alignItems: "center",
    backgroundColor: colors.white,
    height: 80,
    width: 80,
    borderRadius: 10,
    elevation: 25,
    shadowColor: colors.lightGreen,
    justifyContent: "center",
  },
  infotxt: {
    fontFamily: "Poppins_400Regular",
    opacity: 0.6,
    fontSize: 15,
  },
  datatxt: {
    fontFamily: "Poppins_500Medium",
    opacity: 0.7,
    fontSize: 25,
    color: colors.black,
  },
});

export default styles;
