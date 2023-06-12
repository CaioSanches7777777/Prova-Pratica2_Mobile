import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import DashboardPage from './src/pages/DashboardPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';

export default function App() {
  
  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="LoginPage" component={LoginPage}></Stack.Screen>

        <Stack.Screen name="RegisterPage" component={RegisterPage}></Stack.Screen>

        <Stack.Screen name="DashboardPage" component={DashboardPage}></Stack.Screen>
        
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btm: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})