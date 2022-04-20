import { StatusBar, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  Box: {
    height: "41%",
    width: "100%",
    backgroundColor: "#F2F2F2",
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
    color: "#212E5B",
  },
  input: {
    borderBottomColor: "red",
    backgroundColor: "#F2F2F2",
    color: "#212E5B",
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
    backgroundColor: "#212E5B",
  },
  btn: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
  forgot: {
    color: "#212E5B",
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    marginTop: "5%",
  },
});

export default styles;
