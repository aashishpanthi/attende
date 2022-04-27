import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  box: {
    width: 10,
    height: "100%",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginRight: 12,
  },
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.white,
  },
  image: {
    height: 50,
    alignSelf: "center",
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 7,
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
  roll: {
    fontSize: 12,
    color: colors.lightBlack,
    marginTop: -7,
  },
  student: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 7,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    elevation: 10,
    height: 65,
  },
});

export default styles;
