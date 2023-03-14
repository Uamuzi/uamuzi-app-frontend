import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import tw from "twrnc"
import { default as OnboardingScreen } from './src/screens/OnboardingScreens/component/OnboardingScreen.tsx';

import { NavigationContainer } from '@react-navigation/native';

import SignUp1 from './SignUp/SignUpScreens/SignUp1';
import SignUp2 from './SignUp/SignUpScreens/SignUp2';
import SignUp3 from './SignUp/SignUpScreens/SignUp3';
import SignUp4 from './SignUp/SignUpScreens/SignUp4';
import SignUp5 from './SignUp/SignUpScreens/SignUp5';
import LoginOne from "./login/screens/LoginOne";
import ForgotPw1 from "./login/screens/ForgotPw1";
import ForgotPw2 from "./login/screens/ForgotPw2";
import ForgotPw3 from "./login/screens/ForgotPw3";

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
    //   <StatusBar style="auto" />
     
    //     <SignUp1 />
      
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ()=> null}}>
        {/* <Stack.Screen name="" component={} /> */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="SignUp3" component={SignUp3} />
        <Stack.Screen name="SignUp4" component={SignUp4} />
        <Stack.Screen name="SignUp5" component={SignUp5} />
        <Stack.Screen name="LoginOne" component={LoginOne}/>
        <Stack.Screen name="ForgotPw1" component={ForgotPw1}/>
        <Stack.Screen name="ForgotPw2" component={ForgotPw2}/>
        <Stack.Screen name="ForgotPw3" component={ForgotPw3}/>

      </Stack.Navigator>
       
    </NavigationContainer>
  );
}


