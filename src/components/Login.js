import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import ForgotPasswordModal from "./ForgotPasswordModel";

import styles from "../styles/login";

function Login({ navigation, role, navv }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Box}>
        {role == "parent" && (
          <Image
            style={styles.img}
            source={require("../../assets/parent.png")}
          />
        )}
        {role == "teacher" && (
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require("../../assets/teacher.png")}
          />
        )}
      </View>
      <Text style={styles.head}>Login as a {role}</Text>
      <View style={styles.inpbox}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          onChangePassword={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(navv)}
        >
          <Text style={styles.btn}>Sign in</Text>
        </Pressable>
        <Pressable onPress={() => setShowModal(true)}>
          <Text style={styles.forgot}>Forgot password ?</Text>
        </Pressable>
      </View>

      <ForgotPasswordModal visible={showModal} setShowModal={setShowModal} />
    </SafeAreaView>
  );
}

export default Login;
