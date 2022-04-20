import { StyleSheet, Text, View } from 'react-native';
import Loginparent from './src/Loginparent';
import Loginteacher from './src/Loginteacher';
import Welcome from './src/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      
      
      <Stack.Screen name="Welcome" 
      component={Welcome} 
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name='Loginp' component={Loginparent}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name='Logint' component={Loginteacher}
      options={{
        headerShown: false,
      }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
