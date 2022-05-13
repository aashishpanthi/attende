import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import Notice from "../components/Notice";
import styles from "../styles/previous_notice";

const notices = [
  {
    id: 1,
    date: "Fri, 2079-01-20",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    date: "Sun, 2079-01-22",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const PreviousNotices = () => {
  return (
    <View>
    <FlatList
      style={styles.container}
      data={notices}
      renderItem={({ item }) => {
        return <Notice item={item} />;
      }}
    />
    </View>
  );
};

export default PreviousNotices;
