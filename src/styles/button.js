import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  submitBtn: {
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    shadowColor: colors.primary,
    elevation: 5,
  },
  submitBtnText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
    marginRight: 5,
  },
});

export default styles;
