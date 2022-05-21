import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import ForgotPasswordModal from "./ForgotPasswordModel";
import { db } from "../../config/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import * as SecureStore from "expo-secure-store";

import styles from "../styles/login";

const Login = ({ navigation, role }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Empty fields", "Please fill out all fields", [
        {
          text: "Cancel",
        },
        { text: "OK" },
      ]);
    } else {
      const usersRef = doc(db, "users", username);

      try {
        const userSnap = await getDoc(usersRef);
        if (userSnap.exists() && userSnap.data().role === role) {
          if (userSnap.data().password === password) {
            save("user", JSON.stringify(userSnap.data()));

            //Reset the stack and navigate to the home screen
            navigation.reset({
              index: 0,
              routes: [
                { name: `${role === "parent" ? "Parenthome" : "Teacherhome"}` },
              ],
            });
          }
        } else {
          Alert.alert("Invalid credentials", "Invalid username or password", [
            {
              text: "Cancel",
            },
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <SafeAreaView>
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
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              placeholder="Password"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.btn}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <ForgotPasswordModal
            visible={showModal}
            setShowModal={setShowModal}
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
