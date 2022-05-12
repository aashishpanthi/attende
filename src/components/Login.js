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
import { onSnapshot, query, collection, where } from "firebase/firestore";
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
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("password", "==", password),
        where("role", "==", role)
      );
      onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          ...doc.data(),
          _id: doc.id,
        }));

        items.map((item) => {
          if (item._id === username) {
            save("user", JSON.stringify(item));
            navigation.navigate(
              `${role === "parent" ? "Parenthome" : "Teacherhome"}`
            );
          }
        });

        Alert.alert("Invalid credentials", "Invalid username or password", [
          {
            text: "Cancel",
          },
        ]);
      });
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
