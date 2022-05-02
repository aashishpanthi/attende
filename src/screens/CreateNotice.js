import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles/create_notice";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const CreateNotice = () => {
  const [text, setText] = useState("");

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
        <Text style={styles.btnTxt}>Publish notice</Text>
        <FontAwesomeIcon icon={faUpload} size={20} style={styles.icon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateNotice;
