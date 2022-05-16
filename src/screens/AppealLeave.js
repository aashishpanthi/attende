import { useState, useEffect } from "react";
import BoxAndButton from "../components/BoxAndButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const AppealLeave = () => {
  const [text, setText] = useState("");
  const [studentId, setStudentId] = useState("");

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("user");
      if (token) {
        setStudentId(JSON.parse(token)._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  });

  const handleSubmit = async () => {
    if (text.length === 0) {
      Alert.alert("Error", "Please enter your appeal");
      return;
    }

    try {
      await addDoc(collection(db, "leave_appeals"), {
        student: studentId,
        message: text,
        date: Timestamp.fromDate(new Date()),
        status: "",
      });

      Alert.alert("Success", "Your appeal has been sent");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BoxAndButton
      text={text}
      setText={setText}
      icon={faPaperPlane}
      btnText="Appeal leave"
      handleSubmit={handleSubmit}
    />
  );
};

export default AppealLeave;
