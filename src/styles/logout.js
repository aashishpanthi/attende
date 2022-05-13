import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
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
