import { Text, Image } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";
import styles from "../styles/take_attendance";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const StudentBox = ({ item }) => {
  const lastOffset = {
    x: 0,
    y: 0,
  };

  const translateX = useSharedValue(0);
  const _onPanGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
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

  const _handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      // alert("Doing something");
    }
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        minDist={25}
        maxPointers={0}
        onGestureEvent={_onPanGestureEvent}
        onHandlerStateChange={_handleStateChange}
      >
        <Animated.View style={[styles.student, rStyle]}>
          <Animated.View style={styles.box} />
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
