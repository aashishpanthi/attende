import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
} from "react-native";

import styles from "../styles/login";

function Login({ navigation, role }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

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
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.btn}>Sign in</Text>
        </Pressable>
        <Pressable style={styles.forget}>
          <Text style={styles.forgot}>Forgot password ?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Login;
