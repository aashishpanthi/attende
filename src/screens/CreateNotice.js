import { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import BoxAndButton from "../components/BoxAndButton";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-native";

const CreateNotice = () => {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "notices"), {
        message: text,
        date: Timestamp.fromDate(new Date()),
      });

      Alert.alert("Success", "Notice is successfully published");
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BoxAndButton
      text={text}
      setText={setText}
      icon={faUpload}
      btnText="Publish notice"
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateNotice;
