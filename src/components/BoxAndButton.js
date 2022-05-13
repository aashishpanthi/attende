import { ScrollView, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles/box_and_button";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const BoxAndButton = ({ icon, text, setText, btnText }) => {
  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={2}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Write a detailed message..."
      />

      <TouchableOpacity style={styles.button} onPress={() => alert(text)}>
        <Text style={styles.btnTxt}>{btnText}</Text>
        <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BoxAndButton;
