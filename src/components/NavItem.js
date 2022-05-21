import { Text, View, TouchableNativeFeedback, Image } from "react-native";
import styles from "../styles/nav_item";

const NavItem = ({ navigation, img, title, path, routeParams }) => {
  return (
    <TouchableNativeFeedback
      style={styles.btn}
      onPress={() => navigation.navigate(path, { ...routeParams })}
    >
      <View style={styles.nav}>
        <Image style={styles.icon} source={img} />
        <Text style={styles.navinfo}>{title}</Text>
        <Image
          style={styles.iconarr}
          source={require("../../assets/arrow.png")}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default NavItem;
