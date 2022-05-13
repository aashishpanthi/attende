import { StyleSheet} from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 7,
    backgroundColor: colors.primary,
    flexDirection: "row",
  },
  btnTxt: {
    color: colors.white,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  icon: {
    color: colors.white,
    marginLeft: 10,
  },
  input: {
    fontSize: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    color: colors.lightBlack,
    padding: 10,
    borderRadius: 7,
    marginTop: 50,
    marginHorizontal: 20,
  },
});

export default styles;
