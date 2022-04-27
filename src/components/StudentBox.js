import { Text, Image } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../styles/take_attendance";
import Animated, {
  FadeIn,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import colors from "../../config/colors";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheckCircle,
  faCheckDouble,
  faCoffee,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const StudentBox = ({ item }) => {
  const [backgroundColor, setBackgroundColor] = useState(colors.primary);
  const [present, setPresent] = useState(false);
  const [absent, setAbsent] = useState(false);

  const translateX = useSharedValue(0);
  const _onPanGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const position = translateX.value;
      if (position > 0) {
        runOnJS(setAbsent)(false);
        runOnJS(setPresent)(true);
        runOnJS(setBackgroundColor)(colors.green);
      } else if (position < 0) {
        runOnJS(setPresent)(false);
        runOnJS(setAbsent)(true);
        runOnJS(setBackgroundColor)(colors.red);
      }

      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        minDist={25}
        maxPointers={0}
        onGestureEvent={_onPanGestureEvent}
      >
        <Animated.View style={[styles.student, rStyle]}>
          <Animated.View
            style={[
              styles.box,
              {
                backgroundColor: backgroundColor,
              },
            ]}
          />
          <Animated.View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.image}
            />
          </Animated.View>
          <Animated.View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.roll}>Roll No. {item.Roll}</Text>
          </Animated.View>
          {present && (
            <Animated.View entering={FadeIn} style={styles.icon}>
              <FontAwesomeIcon
                size={22}
                icon={faCheckCircle}
                color={colors.green}
              />
            </Animated.View>
          )}
          {absent && (
            <Animated.View entering={FadeIn} style={styles.icon}>
              <FontAwesomeIcon
                size={22}
                icon={faTimesCircle}
                color={colors.red}
              />
            </Animated.View>
          )}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default StudentBox;
