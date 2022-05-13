import { useState } from "react";
import styles from "../styles/take_attendance";


import { ScrollView, SafeAreaView, Dimensions } from "react-native";
import StudentBox from "../components/StudentBox";
import { useHeaderHeight } from "@react-navigation/elements";

const students = [
  {
    id: 1,
    name: "Aashish Panthi",
    image: require("../../assets/Model.jpg"),
    Roll: 1,
  },
  {
    id: 2,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 2,
  },
  {
    id: 3,
    name: "Rajesh Khadka",
    image: require("../../assets/Model.jpg"),
    Roll: 3,
  },
  {
    id: 4,
    name: "Roshan Pathak",
    image: require("../../assets/Model.jpg"),
    Roll: 4,
  },
  {
    id: 5,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 5,
  },
  {
    id: 6,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 6,
  },
  {
    id: 7,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 7,
  },
  {
    id: 8,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 8,
  },
  {
    id: 9,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 9,
  },
  {
    id: 10,
    name: "Roshan Acharya",
    image: require("../../assets/Model.jpg"),
    Roll: 10,
  },
  // {
  //   id: 11,
  //   name: "Roshan Acharya",
  //   image: require("../../assets/Model.jpg"),
  //   Roll: 11,
  // },
  // {
  //   id: 12,
  //   name: "Roshan Acharya",
  //   image: require("../../assets/Model.jpg"),
  //   Roll: 12,
  // },
  // {
  //   id: 13,
  //   name: "Roshan Acharya",
  //   image: require("../../assets/Model.jpg"),
  //   Roll: 13,
  // },
  // {
  //   id: 14,
  //   name: "Roshan Pathak",
  //   image: require("../../assets/Model.jpg"),
  //   Roll: 14,
  // },
  // {
  //   id: 15,
  //   name: "Roshan Pathak",
  //   image: require("../../assets/Model.jpg"),
  //   Roll: 15,
  // },
];

const Attendance = () => {
  const [scrollEnabled, setscrollEnabled] = useState(true);

  const list = () => {
    return students.map((item) => {
      return (
        <StudentBox
          scrollEnabled={setscrollEnabled}
          key={item.id}
          item={item}
        />
      );
    });
  };
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={scrollEnabled}
        style={[
          styles.container,
          {
            top: useHeaderHeight(),
            height: Dimensions.get("window").height - useHeaderHeight(),
          },
        ]}
      >
        {list()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Attendance;
