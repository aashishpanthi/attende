import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
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
