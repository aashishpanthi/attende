import { Text, Image } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../styles/take_attendance";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import colors from "../../config/colors";
import { useState } from "react";

const StudentBox = ({ item }) => {
  const [backgroundColor, setBackgroundColor] = useState(colors.primary);

  const translateX = useSharedValue(0);
  const _onPanGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const position = translateX.value;
      runOnJS(setBackgroundColor)(position > 0 ? colors.green : colors.red);
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
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default StudentBox;
