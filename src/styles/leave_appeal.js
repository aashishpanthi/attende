import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  body: {
    fontSize: 15,
    paddingHorizontal: 15,
    fontFamily: "Poppins_400Regular",
    marginTop: 10,
    color: colors.lightBlack,
  },
  box: {
    margin: 10,
    shadowColor: colors.primary,
    elevation: 10,
    backgroundColor: colors.white,
    paddingVertical: 15,
    borderRadius: 10,
    shadowOpacity: 0.25,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
  date: {
    fontFamily: "Poppins_300Light",
    fontSize: 12,
    color: colors.lightBlack,
    marginTop: -6,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  header: {
    borderBottomColor: colors.lightPrimary,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: "row",
  },
  headerInfo: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowOpacity: 0.2,
    elevation: 5,
    marginHorizontal: 10,
    padding: 5,
    borderWidth: 0.5,
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
  statusText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default styles;
