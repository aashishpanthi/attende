import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,   Poppins_800ExtraBold, } from  '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Welcome from './src/Welcome';
export default function App() {
  let [fontsLoaded] = useFonts({
     Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins_800ExtraBold',
    fontSize: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
