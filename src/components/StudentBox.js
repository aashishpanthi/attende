import { Text, View, Image, Animated, Dimensions } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";
import styles from "../styles/take_attendance";
// import Animated from "react-native-reanimated";

const StudentBox = ({ item }) => {
  const lastOffset = {
    x: 0,
    y: 0,
  };

  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const _onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const _handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      alert("Doing something");
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
        <Animated.View
          style={[
            { ...styles.student },
            {
              transform: [
                {
                  translateX: translateX,
                },
              ],
            },
          ]}
        >
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
