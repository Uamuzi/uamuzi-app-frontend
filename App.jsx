import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import tw from "twrnc"
import { default as OnboardingScreen } from './src/screens/OnboardingScreens/component/OnboardingScreen.tsx';

import { NavigationContainer } from '@react-navigation/native';
import LoginOne from "./login/screens/LoginOne";
import ForgotPw1 from "./login/screens/ForgotPw1";
import ForgotPw2 from "./login/screens/ForgotPw2";
import ForgotPw3 from "./login/screens/ForgotPw3";

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
    //   <StatusBar style="auto" />
     
    //     <Login />
      
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ()=> null}}>
        {/* <Stack.Screen name="" component={} /> */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="LoginOne" component={LoginOne}/>
        <Stack.Screen name="ForgotPw1" component={ForgotPw1}/>
        <Stack.Screen name="ForgotPw2" component={ForgotPw2}/>
        <Stack.Screen name="ForgotPw3" component={ForgotPw3}/>

      </Stack.Navigator>
       
    </NavigationContainer>
  );
}


